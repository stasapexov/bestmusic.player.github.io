const Audius = (() => {
    const base = 'https://api.audius.co/v1';
    const trackId = file => typeof file === 'string' && /^audius:([a-z0-9]{1,32})$/i.exec(file)?.[1];

    function endpoint(path) {
        const url = new URL(base + path);
        url.searchParams.set('app_name', 'SmokerPlayer');
        return url;
    }

    function normalizeTrack(value) {
        if (!trackId(value?.file) || typeof value.title !== 'string' || !value.title.trim()) return null;
        const artists = Array.isArray(value.artists)
            ? value.artists.filter(name => typeof name === 'string' && name.trim())
            : [];
        return {
            file: value.file,
            title: value.title.trim(),
            artists,
            duration: Number.isFinite(value.duration) && value.duration > 0 ? value.duration : 0,
            cover: typeof value.cover === 'string' && value.cover.startsWith('https://') ? value.cover : undefined
        };
    }

    async function search(query, signal) {
        const url = endpoint('/tracks/search');
        url.searchParams.set('query', query);
        url.searchParams.set('limit', '10');
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error('Audius HTTP ' + response.status);
        const { data } = await response.json();
        if (!Array.isArray(data)) throw new Error('Invalid Audius search response');
        return data
            .filter(track => track?.is_streamable === true && track.access?.stream === true && !track.is_unlisted)
            .map(track => normalizeTrack({
                file: 'audius:' + (track.id || ''),
                title: track.title,
                artists: [track.user?.name],
                duration: track.duration,
                cover: track.artwork?.['480x480'] || track.artwork?.['150x150']
            }))
            .filter(Boolean);
    }

    function streamUrl(file) {
        const id = trackId(file);
        return id ? endpoint('/tracks/' + id + '/stream').href : null;
    }

    return { search, normalizeTrack, streamUrl, isTrack: file => Boolean(trackId(file)) };
})();
