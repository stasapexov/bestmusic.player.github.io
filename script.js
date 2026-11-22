(() => {
    'use strict';

    const byId = id => document.getElementById(id);
    const audio = byId('audio-player');
    const seek = byId('seek');
    const volume = byId('volume');
    const playButton = byId('play-pause');
    const libraryPanel = document.querySelector('.library-panel');
    const queueList = byId('playlist');
    const tabs = [...document.querySelectorAll('.tab')];
    const notification = byId('notification');

    const HOME_ID = 'home';
    const PLAYLISTS_KEY = 'smoker.playlists';
    const HISTORY_KEY = 'smoker.listeningHistory';
    const LIKES_KEY = 'smoker.likedTracks';
    const ONLINE_TRACKS_KEY = 'smoker.onlineTracks';
    const RECOMMENDATION_COUNT = 24;
    const MUSIC_CACHES = ['music-v3', 'music-v2'];
    const preferredLanguages = new Set(['ru', 'en']);
    const trackPlural = new Intl.PluralRules('ru');
    const normalize = text => text.toLowerCase().replace(/ё/g, 'е').normalize('NFKD')
        .replace(/\p{M}/gu, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    const trackPath = track => Audius.streamUrl(track.file) || 'music/' + encodeURIComponent(track.file);
    const trackByFile = new Map(TRACKS.map(track => [track.file, track]));
    const artistText = track => track.artists.join(', ') || 'Неизвестный артист';
    const trackArt = track => {
        const name = track?.artists[0];
        return track?.cover || (Object.hasOwn(ARTIST_AVATARS, name) ? ARTIST_AVATARS[name] : undefined);
    };
    const titleFields = track => [
        track.title, track.file.replace(/\.[^.]+$/, ''),
        ...track.artists.flatMap(name => [name + ' ' + track.title, track.title + ' ' + name])
    ].map(normalize);
    const searchFields = new Map(TRACKS.map(track => [track.file, titleFields(track)]));

    const artistsByName = new Map();
    for (const track of TRACKS) {
        for (const name of new Set(track.artists)) {
            if (!artistsByName.has(name)) {
                artistsByName.set(name, { name, avatar: ARTIST_AVATARS[name], tracks: [] });
            }
            artistsByName.get(name).tracks.push(track);
        }
    }
    const artists = [...artistsByName.values()].sort((a, b) =>
        b.tracks.length - a.tracks.length || a.name.localeCompare(b.name, 'ru')
    );
    const artistQueries = artists.map(artist => ({ value: artist, fields: [normalize(artist.name)] }));

    const allTracks = { id: 'all-tracks', name: 'Все треки', tracks: TRACKS };
    const newTracks = { id: 'new-tracks', name: 'Новые треки', tracks: TRACKS.filter(track => track.recent) };
    const chillKeywords = ['chill', 'dream', 'garden', 'ночь', 'night', 'homecoming', 'long time', 'dark thought', 'ratherlife'];
    const builtInPlaylists = [
        allTracks,
        { id: 'english', name: 'В ритме', tracks: TRACKS.filter(track => track.language === 'en'),
            cover: 'picture/cover-night.webp' },
        { id: 'russian', name: 'На репите', tracks: TRACKS.filter(track => track.language === 'ru') },
        { id: 'chill', name: 'Mix chill', tracks: TRACKS.filter(track =>
            searchFields.get(track.file).some(field => chillKeywords.some(word => field.includes(word)))) },
        { id: 'yamash', name: 'Ямаш хит', tracks: artistsByName.get('Ямаш')?.tracks || [], cover: ARTIST_AVATARS['Ямаш'] }
    ];
    const trackQueries = TRACKS.map(track => ({ value: track, fields: searchFields.get(track.file) }));

    let customPlaylists = readStorage(PLAYLISTS_KEY, []);
    let listens = readStorage(HISTORY_KEY, {});
    let likedFiles = new Set(readStorage(LIKES_KEY, []));
    restoreOnlineTracks();
    let home = homeCollection();
    let collection = home;
    let queue = home.tracks;
    let showQueue = false;
    let currentIndex = -1;
    let counted = false;
    let playRequest = 0;
    let notificationTimer;
    let selectedRows = [];

    function readStorage(key, fallback) {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value && typeof value === 'object' && Array.isArray(value) === Array.isArray(fallback)
                ? value : fallback;
        } catch {
            return fallback;
        }
    }

    function updateStorage(key, fallback, change) {
        const save = () => {
            const value = change(readStorage(key, fallback));
            localStorage.setItem(key, JSON.stringify(value));
            return value;
        };
        return navigator.locks && location.protocol !== 'file:'
            ? navigator.locks.request(key, save) : Promise.resolve().then(save);
    }

    function indexOnlineTrack(track) {
        const existing = trackByFile.get(track.file);
        if (existing) return existing;
        trackByFile.set(track.file, track);
        searchFields.set(track.file, titleFields(track));
        return track;
    }

    function restoreOnlineTracks() {
        for (const stored of readStorage(ONLINE_TRACKS_KEY, [])) {
            const track = Audius.normalizeTrack(stored);
            if (track) indexOnlineTrack(track);
        }
    }

    async function rememberOnlineTracks(files) {
        const online = files.filter(Audius.isTrack).map(file => trackByFile.get(file)).filter(Boolean);
        if (!online.length) return;
        await updateStorage(ONLINE_TRACKS_KEY, [], tracks => {
            const saved = new Map(tracks.filter(track => Audius.isTrack(track?.file)).map(track => [track.file, track]));
            for (const track of online) saved.set(track.file, track);
            return [...saved.values()];
        });
    }

    function addWeight(counts, key, weight = 1) {
        counts.set(key, (counts.get(key) || 0) + weight);
    }

    function listenCount(track) {
        const plays = Number(listens[track.file]);
        return Number.isFinite(plays) && plays > 0 ? plays : 0;
    }

    function homeCollection() {
        const liked = [...likedFiles].map(file => trackByFile.get(file)).filter(Boolean);
        const moods = new Map();
        const languages = new Map();
        const performers = new Map();
        let evidence = 0;
        for (const track of TRACKS) {
            const weight = Math.log2(1 + listenCount(track)) + (likedFiles.has(track.file) ? 3 : 0);
            if (!weight) continue;
            evidence += weight;
            addWeight(moods, track.emotion, weight);
            if (preferredLanguages.has(track.language)) addWeight(languages, track.language, weight);
            for (const artist of track.artists) addWeight(performers, artist, weight / track.artists.length);
        }

        const affinity = (weights, key) => (weights.get(key) || 0) / Math.max(evidence, 1);
        const candidates = TRACKS.filter(track => !likedFiles.has(track.file)).map(track => ({
            track,
            plays: listenCount(track),
            affinity: 0.75 * affinity(moods, track.emotion) +
                0.55 * affinity(languages, track.language) +
                0.75 * Math.max(0, ...track.artists.map(artist => affinity(performers, artist)))
        }));
        const recommendations = [];
        const usedMoods = new Map();
        const usedLanguages = new Map();
        const usedArtists = new Map();

        // Reserve each fourth slot for discovery and penalize runs of similar tracks.
        while (candidates.length && recommendations.length < RECOMMENDATION_COUNT) {
            const recent = recommendations.slice(-2);
            const discovery = recommendations.length % 4 === 3;
            let best = 0;
            let highest = -Infinity;
            for (const [index, candidate] of candidates.entries()) {
                const { track, plays, affinity: taste } = candidate;
                const repeatsMood = recent.filter(item => item.emotion === track.emotion).length;
                const repeatsLanguage = recent.filter(item => item.language === track.language).length;
                const languageFrequency = usedLanguages.get(track.language) || 0;
                const languagePenalty = preferredLanguages.has(track.language)
                    ? 0.08 * languageFrequency : 0.65 + 0.18 * languageFrequency;
                const artistFrequency = Math.max(0, ...track.artists.map(artist => usedArtists.get(artist) || 0));
                const score = (discovery ? -0.8 : 1) * taste + 0.45 / (1 + plays) + (track.recent ? 0.08 : 0)
                    - 0.09 * (usedMoods.get(track.emotion) || 0) - languagePenalty
                    - 0.38 * artistFrequency - 0.5 * repeatsMood ** 2 - 0.45 * repeatsLanguage ** 2;
                if (score > highest) {
                    best = index;
                    highest = score;
                }
            }
            const [{ track }] = candidates.splice(best, 1);
            recommendations.push(track);
            addWeight(usedMoods, track.emotion);
            addWeight(usedLanguages, track.language);
            for (const artist of track.artists) addWeight(usedArtists, artist);
        }

        return { id: HOME_ID, name: 'Рекомендации', liked, recommendations, tracks: [...liked, ...recommendations] };
    }

    function refreshHome() {
        home = homeCollection();
        if (collection.id === HOME_ID && currentIndex < 0 && !showQueue) {
            collection = home;
            queue = home.tracks;
        }
        if (!showQueue) renderQueue();
    }

    async function recordListen() {
        const track = queue[currentIndex];
        if (!track || counted || !Number.isFinite(audio.duration) || audio.duration <= 0) return;

        const threshold = Math.min(30, audio.duration / 2);
        // Media playback ranges omit time skipped by seeking.
        let listenedSeconds = 0;
        const played = audio.played;
        for (let i = 0; i < played.length; i++) listenedSeconds += played.end(i) - played.start(i);
        if (listenedSeconds < threshold) return;

        counted = true;
        const increment = history => ({
            ...history, [track.file]: (Number(history[track.file]) || 0) + 1
        });
        try {
            listens = await updateStorage(HISTORY_KEY, listens, increment);
        } catch {
            listens = increment(listens);
        }
        refreshHome();
    }

    function element(tag, className, label) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (label != null) node.textContent = label;
        return node;
    }

    function icon(name) {
        const namespace = 'http://www.w3.org/2000/svg';
        const node = document.createElementNS(namespace, 'svg');
        node.setAttribute('class', 'icon');
        node.setAttribute('aria-hidden', 'true');
        const use = document.createElementNS(namespace, 'use');
        use.setAttribute('href', '#icon-' + name);
        node.append(use);
        return node;
    }

    function artwork(container, url, fallback, lazy = true) {
        container.replaceChildren(...(fallback ? [icon(fallback)] : []));
        if (!url) return;
        const image = element('img');
        image.alt = '';
        image.decoding = 'async';
        if (url.endsWith('.svg')) image.classList.add('is-illustration');
        if (lazy) image.loading = 'lazy';
        image.addEventListener('error', () => image.remove(), { once: true });
        container.append(image);
        image.src = url;
    }

    function button(className, label, iconName) {
        const node = element('button', className);
        node.type = 'button';
        if (label) {
            node.title = label;
            node.setAttribute('aria-label', label);
        }
        if (iconName) node.append(icon(iconName));
        return node;
    }

    function notify(message) {
        notification.textContent = message;
        notification.classList.add('show');
        clearTimeout(notificationTimer);
        notificationTimer = setTimeout(() => notification.classList.remove('show'), 2600);
    }

    function trackCount(count) {
        const ending = trackPlural.select(count);
        return count + ' ' + ({ one: 'трек', few: 'трека', many: 'треков' }[ending] || 'трека');
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) return '0:00';
        const whole = Math.floor(seconds);
        return Math.floor(whole / 60) + ':' + String(whole % 60).padStart(2, '0');
    }

    function activateTab(tabName) {
        for (const tab of tabs) {
            const active = tab.dataset.tab === tabName;
            tab.classList.toggle('active', active);
            tab.setAttribute('aria-pressed', String(active));
            byId(tab.getAttribute('aria-controls')).classList.toggle('active', active);
            if (active) byId('library-title').textContent = tab.textContent.trim();
        }
        byId('library-content').dataset.tab = tabName;
        libraryPanel.scrollTop = 0;
        if (tabName === 'playlists' && !byId('playlists-grid').childElementCount) renderPlaylists();
        if (tabName === 'artists' && !byId('artists-grid').childElementCount) renderArtists();
        if (tabName === 'new' && !byId('new-tracks').childElementCount) {
            renderRows(byId('new-tracks'), newTracks.tracks, track => playFrom(newTracks, track));
            markCurrentTrack();
        }
    }

    function customCollection(list) {
        return {
            id: list.id, name: list.name, custom: true,
            tracks: list.files.map(file => trackByFile.get(file)).filter(Boolean)
        };
    }

    function renderPlaylists() {
        const custom = customPlaylists.map(customCollection);
        const cards = [...custom, ...builtInPlaylists].map(list => {
            const card = button('playlist-item-card');
            const cover = element('span', 'cover');
            artwork(cover, list.cover, 'list-ul');
            card.append(cover, element('span', 'name', list.name), element('span', 'count', trackCount(list.tracks.length)));
            card.addEventListener('click', () => replaceQueue(list));
            return card;
        });
        byId('playlists-grid').replaceChildren(...cards);
    }

    function renderArtists() {
        byId('artists-grid').replaceChildren(...artists.map(artist => {
            const card = button('artist-card');
            const avatar = element('span', 'avatar');
            artwork(avatar, artist.avatar, 'user');
            if (!artist.avatar) avatar.textContent = artist.name.slice(0, 2).toUpperCase();
            card.append(avatar, element('span', 'name', artist.name),
                element('span', 'songs', trackCount(artist.tracks.length)));
            card.addEventListener('click', () => replaceQueue({
                id: 'artist:' + artist.name, name: artist.name, tracks: artist.tracks
            }));
            return card;
        }));
    }

    function renderQueue() {
        const liked = showQueue ? [] : home.liked;
        const tracks = showQueue ? queue : home.recommendations;
        const select = showQueue ? track => selectTrack(queue.indexOf(track), true) : track => playFrom(home, track);
        byId('liked-section').hidden = !liked.length;
        byId('collection-heading').hidden = !showQueue && !tracks.length;
        byId('collection-name').textContent = showQueue ? collection.name : home.name;
        byId('edit-playlist').hidden = !showQueue || !collection.custom;
        byId('popular-section').hidden = showQueue;
        const empty = byId('queue-empty');
        empty.hidden = !showQueue || tracks.length > 0;
        empty.textContent = 'В этом плейлисте пока нет треков.';
        renderRows(byId('liked-tracks'), liked, select);
        renderRows(queueList, tracks, select);
        markCurrentTrack();
    }

    function renderRows(list, tracks, select) {
        list.replaceChildren(...tracks.map(track => {
            const row = element('li', 'playlist-item');
            row.dataset.trackFile = track.file;
            const play = button('track-select');
            const cover = element('span', 'track-art');
            cover.setAttribute('aria-hidden', 'true');
            artwork(cover, trackArt(track), 'music');
            const mark = element('span', 'track-indicator');
            mark.append(icon('volume'));
            cover.append(mark);
            const details = element('span', 'song-details');
            const online = Audius.isTrack(track.file);
            const subtitle = artistText(track) + (online ? ' · Audius' : '');
            details.append(element('span', 'title', track.title), element('span', 'track-subtitle', subtitle));
            play.append(cover, details, element('span', 'duration', formatTime(track.duration)));
            play.addEventListener('click', () => select(track));
            row.append(play, likeButton(track), addToPlaylistButton(track));
            if (!online) row.append(downloadButton(track));
            return row;
        }));
    }

    function syncLikeButton(node) {
        const pressed = likedFiles.has(node.dataset.likeFile);
        node.setAttribute('aria-pressed', String(pressed));
        node.title = pressed ? 'Убрать лайк' : 'Поставить лайк';
        node.replaceChildren(icon('heart'));
    }

    function refreshLikes(files) {
        likedFiles = new Set(files);
        refreshHome();
        document.querySelectorAll('[data-like-file]').forEach(syncLikeButton);
    }

    function likeButton(track) {
        const node = button('track-like-btn', 'Нравится: ' + track.title);
        node.dataset.likeFile = track.file;
        syncLikeButton(node);
        node.addEventListener('click', async () => {
            const restoreFocus = document.activeElement === node;
            const liked = !likedFiles.has(track.file);
            const change = files => {
                const other = files.filter(file => file !== track.file);
                return liked ? [track.file, ...other] : other;
            };
            let files;
            try {
                if (liked) await rememberOnlineTracks([track.file]);
                files = await updateStorage(LIKES_KEY, [...likedFiles], change);
            } catch {
                files = change([...likedFiles]);
            }
            refreshLikes(files);
            if (restoreFocus && !node.isConnected && document.activeElement === document.body) {
                const selector = '[data-like-file="' + CSS.escape(track.file) + '"]';
                (byId('user-playlist').querySelector(selector) || byId('search-input')).focus();
            }
        });
        return node;
    }

    function addToPlaylistButton(track) {
        const node = button('track-add-btn', 'Добавить в плейлист', 'list-plus');
        node.addEventListener('click', () => openPlaylistChooser(track));
        return node;
    }

    function renderPopular() {
        byId('popular-grid').replaceChildren(...TRACKS.filter(track => !track.recent).slice(0, 40).map(track => {
            const card = element('article', 'popular-song');
            const cover = element('div', 'cover');
            artwork(cover, trackArt(track), 'music');
            const details = element('div', 'track-meta', formatTime(track.duration));
            const actions = element('div', 'track-actions');
            const play = button('play-btn', 'Воспроизвести ' + track.title, 'play');
            play.addEventListener('click', () => {
                let index = queue.indexOf(track);
                if (index < 0) {
                    collection = { id: 'queue', name: 'Очередь' };
                    queue = [...queue, track];
                    index = queue.length - 1;
                    renderQueue();
                }
                selectTrack(index, true);
            });
            actions.append(likeButton(track), addToPlaylistButton(track), downloadButton(track), play);
            card.append(cover, element('div', 'title', track.title),
                element('div', 'artist', artistText(track)), details, actions);
            return card;
        }));
    }

    function markCurrentTrack() {
        for (const row of selectedRows) {
            row.classList.remove('active');
            row.firstElementChild.removeAttribute('aria-current');
        }
        const track = queue[currentIndex];
        const selector = track && '[data-track-file="' + CSS.escape(track.file) + '"]';
        selectedRows = selector ? [...document.querySelectorAll(selector)] : [];
        for (const row of selectedRows) {
            row.classList.add('active');
            row.firstElementChild.setAttribute('aria-current', 'true');
        }
    }

    function renderNowPlaying(track) {
        byId('song-title').textContent = track?.title || 'Выберите трек';
        byId('song-artist').textContent = track ? artistText(track) : '';
        artwork(byId('album-art'), trackArt(track), null, false);
    }

    function useCollection(nextCollection, keepCurrentFirst = false) {
        const currentTrack = queue[currentIndex];
        collection = nextCollection;
        queue = keepCurrentFirst && currentTrack
            ? [currentTrack, ...collection.tracks.filter(track => track !== currentTrack)]
            : [...collection.tracks];
        currentIndex = queue.indexOf(currentTrack);
    }

    function openQueue() {
        showQueue = true;
        activateTab('user');
    }

    function playFrom(nextCollection, track) {
        const changed = collection !== nextCollection;
        if (changed) useCollection(nextCollection);
        selectTrack(queue.indexOf(track), true);
        if (changed && showQueue) renderQueue();
    }

    function replaceQueue(nextCollection, switchTab = true) {
        useCollection(nextCollection, true);
        if (switchTab) openQueue();
        if (currentIndex < 0 && queue.length) selectTrack(0);
        renderQueue();
    }

    function selectTrack(index, autoplay = false, restart = false) {
        const track = queue[index];
        if (!track) return;
        if (currentIndex !== index || restart || !audio.hasAttribute('src')) {
            ++playRequest;
            currentIndex = index;
            counted = false;
            audio.src = trackPath(track);
            renderNowPlaying(track);
            markCurrentTrack();
            updateProgress();
        }
        if (autoplay) playAudio();
    }

    function playAudio() {
        if (currentIndex < 0) {
            if (queue.length) selectTrack(0, true);
            else notify('Выберите плейлист с треками');
            return;
        }
        const request = ++playRequest;
        audio.play().catch(error => {
            if (request === playRequest && error.name !== 'AbortError' && !audio.error) {
                notify('Не удалось начать воспроизведение');
            }
        });
    }

    function moveTrack(offset, autoplay = !audio.paused) {
        if (!queue.length) return;
        const index = currentIndex < 0 ? (offset > 0 ? 0 : queue.length - 1)
            : (currentIndex + offset + queue.length) % queue.length;
        selectTrack(index, autoplay, true);
    }

    function shuffledTracks(tracks) {
        const result = [...tracks];
        for (let i = result.length - 1; i > 0; i--) {
            const swap = Math.floor(Math.random() * (i + 1));
            [result[i], result[swap]] = [result[swap], result[i]];
        }
        return result;
    }

    function shuffleQueue() {
        if (!queue.length) return;
        const track = queue[currentIndex];
        queue = track ? [track, ...shuffledTracks(queue.filter(item => item !== track))] : shuffledTracks(queue);
        if (track) currentIndex = 0;
        renderQueue();
        notify('Треки перемешаны');
    }

    function paintRange(range, fraction) {
        const percent = 100 * Math.min(1, Math.max(0, fraction));
        range.style.setProperty('--range-progress', percent + '%');
    }

    function updateProgress() {
        const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
        const time = audio.currentTime;
        const current = formatTime(time);
        const total = formatTime(duration || queue[currentIndex]?.duration);
        byId('current-time').textContent = current;
        byId('duration').textContent = total;
        seek.disabled = duration <= 0;
        seek.max = duration || 1;
        seek.value = time;
        seek.setAttribute('aria-valuetext', current + ' из ' + total);
        paintRange(seek, duration > 0 ? time / duration : 0);
    }

    function syncVolume() {
        volume.value = audio.volume;
        paintRange(volume, audio.volume);
    }

    function initVolumeControls() {
        const toggle = byId('volume-toggle');
        const controls = byId('volume-controls');
        const player = toggle.closest('.player-section');
        const isOpen = () => player.classList.contains('volume-open');
        function setOpen(open) {
            player.classList.toggle('volume-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        }
        toggle.addEventListener('click', () => {
            const open = !isOpen();
            setOpen(open);
            if (open) volume.focus({ preventScroll: true });
        });
        document.addEventListener('click', event => {
            if (isOpen() && !controls.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
        });
        controls.addEventListener('keydown', event => {
            if (event.key === 'Escape' && isOpen()) {
                setOpen(false);
                toggle.focus();
            }
        });
        volume.addEventListener('input', () => { audio.volume = Number(volume.value); });
        audio.addEventListener('volumechange', syncVolume);
        syncVolume();
    }

    function updatePlayButton() {
        const playing = !audio.paused && !audio.ended;
        playButton.replaceChildren(icon(playing ? 'pause' : 'play'));
        const label = playing ? 'Пауза' : 'Воспроизвести';
        playButton.setAttribute('aria-label', label);
        playButton.title = label;
    }

    function bestMatch(entries, value, allowPartialWords = false) {
        const query = normalize(value);
        if (!query) return null;
        const words = query.split(' ');
        let best = null;
        for (const entry of entries) {
            for (const field of entry.fields) {
                let score = 0;
                if (query === field) score = 1000;
                else if (field.startsWith(query)) score = 850;
                else if (field.includes(query)) score = 700;
                else if ((' ' + query + ' ').includes(' ' + field + ' ')) score = 650;
                else if (allowPartialWords && words.every(word => field.includes(word))) score = 500;
                if (score > (best?.score || 0)) best = { value: entry.value, score };
                if (score === 1000) return best;
            }
        }
        return best;
    }

    function prioritizeTracks(tracks, order = queue) {
        const previousTrack = queue[currentIndex];
        const promoted = new Set(tracks);
        queue = [...promoted, ...order.filter(track => !promoted.has(track))];
        collection = { id: 'queue', name: 'Очередь' };
        currentIndex = queue.indexOf(previousTrack);
        openQueue();
        renderQueue();
    }

    function initSearch() {
        const input = byId('search-input');
        const status = byId('search-status');
        const content = byId('library-content');
        let timer;
        let preview;
        let pending;

        function showResult(track, commit) {
            const current = queue[currentIndex];
            // Replace a previous autocomplete result without adding it to the underlying queue.
            const order = preview?.result === queue && (!current || preview.order.includes(current))
                ? preview.order : queue;
            prioritizeTracks([track], order);
            preview = commit ? null : { order, result: queue };
            const label = Audius.isTrack(track.file) ? 'Найдено в Audius: ' : 'Найдено: ';
            status.textContent = label + track.title + ' — ' + artistText(track);
        }

        function cancelSearch() {
            clearTimeout(timer);
            pending?.abort();
            pending = null;
        }

        async function search(commit = false) {
            const query = input.value.trim();
            if (!normalize(query)) {
                status.textContent = '';
                return;
            }
            const match = bestMatch(trackQueries, query, true);
            // A local title embedded in a longer query is not enough to match a different recording.
            if (match && match.score !== 650) {
                showResult(match.value, commit);
                return;
            }

            const request = new AbortController();
            pending = request;
            const queueAtStart = queue;
            const tabAtStart = content.dataset.tab;
            const isSameView = () => queue === queueAtStart && tabAtStart === content.dataset.tab;
            const timeout = setTimeout(() => request.abort(), 9000);
            status.textContent = 'Ищу в Audius…';
            try {
                const tracks = await Audius.search(query, request.signal);
                if (pending !== request) return;
                status.textContent = '';
                if (!isSameView()) return;
                const online = bestMatch(tracks.map(track => ({ value: track, fields: titleFields(track) })), query, true);
                const track = online?.value || tracks[0];
                if (track) showResult(indexOnlineTrack(track), commit);
                else status.textContent = 'Трек не найден';
            } catch {
                if (pending === request) status.textContent = isSameView() ? 'Онлайн-поиск недоступен. Попробуйте ещё раз.' : '';
            } finally {
                clearTimeout(timeout);
                if (pending === request) pending = null;
            }
        }

        byId('track-search').addEventListener('submit', event => {
            event.preventDefault();
            cancelSearch();
            search(true);
        });
        input.addEventListener('input', () => {
            status.textContent = '';
            cancelSearch();
            if (normalize(input.value).length >= 2) timer = setTimeout(search, 500);
        });
    }

    const downloadFiles = new Set();
    const pendingDownloads = new Set();

    function syncDownloadButton(node) {
        const file = node.dataset.downloadFile;
        const saved = downloadFiles.has(file);
        const pending = pendingDownloads.has(file);
        const text = saved ? 'Доступен офлайн' : pending ? 'Загрузка трека' : 'Загрузить для офлайна';
        node.title = text;
        node.setAttribute('aria-label', text);
        node.disabled = saved || pending;
        node.classList.toggle('downloaded', saved);
        node.replaceChildren(icon(saved ? 'check' : 'download'));
    }

    function refreshDownloadButtons() {
        document.querySelectorAll('[data-download-file]').forEach(syncDownloadButton);
    }

    function downloadButton(track) {
        const node = button('track-download-btn');
        node.dataset.downloadFile = track.file;
        syncDownloadButton(node);
        node.addEventListener('click', () => downloadTrack(track));
        return node;
    }

    async function downloadTrack(track) {
        if (!('caches' in window)) {
            notify('Офлайн-загрузка доступна через HTTPS или localhost');
            return;
        }
        if (pendingDownloads.has(track.file) || downloadFiles.has(track.file)) return;

        pendingDownloads.add(track.file);
        refreshDownloadButtons();
        notify('Загружаю: ' + track.title);
        try {
            const url = trackPath(track);
            const response = await fetch(url, { cache: 'reload' });
            if (!response.ok || response.status === 206) throw new Error('HTTP ' + response.status);
            const cache = await caches.open(MUSIC_CACHES[0]);
            await cache.put(url, response);
            downloadFiles.add(track.file);
            notify('Доступен офлайн: ' + track.title);
        } catch (error) {
            console.warn('Ошибка офлайн-загрузки', error);
            notify('Не удалось загрузить трек');
        } finally {
            pendingDownloads.delete(track.file);
            refreshDownloadButtons();
        }
    }

    async function restoreDownloads() {
        if (!('caches' in window)) return;
        try {
            const names = await caches.keys();
            const lists = await Promise.all(MUSIC_CACHES.filter(name => names.includes(name))
                .map(async name => (await caches.open(name)).keys()));
            const filenames = new Map(TRACKS.map(track => [track.file.normalize('NFC'), track.file]));
            for (const request of lists.flat()) {
                const encoded = new URL(request.url).pathname.split('/').pop();
                let filename;
                try {
                    filename = decodeURIComponent(encoded);
                } catch {
                    filename = encoded.replace(/%20/g, ' ');
                }
                const file = filenames.get(filename.normalize('NFC'));
                if (file) downloadFiles.add(file);
            }
            refreshDownloadButtons();
        } catch (error) {
            console.warn('Ошибка чтения офлайн-загрузок', error);
        }
    }

    const editor = byId('playlist-editor');
    const playlistForm = byId('playlist-form');
    const playlistName = byId('playlist-name');
    const playlistFilter = byId('playlist-filter');
    const trackPicker = byId('track-picker');
    const editorStatus = byId('editor-status');
    let editingId;
    let pickedFiles;
    let pickerRows;
    const playlistChooser = byId('playlist-chooser');
    const chooserStatus = byId('playlist-chooser-status');
    let trackToAdd;

    function refreshEditedPlaylist(list) {
        renderPlaylists();
        if (collection.id === list.id) replaceQueue(customCollection(list), false);
    }

    async function addTrackToPlaylist(track, playlistId) {
        const controls = [...playlistChooser.querySelectorAll('button:not(:disabled)')];
        for (const control of controls) control.disabled = true;
        playlistChooser.setAttribute('aria-busy', 'true');
        chooserStatus.hidden = true;
        try {
            await rememberOnlineTracks([track.file]);
            customPlaylists = await updateStorage(PLAYLISTS_KEY, customPlaylists, lists => {
                const index = lists.findIndex(list => list.id === playlistId);
                if (index < 0) throw new Error('Playlist unavailable');
                const list = lists[index];
                if (!list.files.includes(track.file)) lists[index] = { ...list, files: [...list.files, track.file] };
                return lists;
            });
            const list = customPlaylists.find(item => item.id === playlistId);
            playlistChooser.close();
            refreshEditedPlaylist(list);
            notify('Добавлено в «' + list.name + '»');
        } catch {
            chooserStatus.textContent = 'Не удалось добавить трек. Попробуйте ещё раз.';
            chooserStatus.hidden = false;
        } finally {
            playlistChooser.removeAttribute('aria-busy');
            for (const control of controls) control.disabled = false;
        }
    }

    function openPlaylistChooser(track) {
        trackToAdd = track;
        byId('playlist-chooser-track').textContent = track.title + ' — ' + artistText(track);
        chooserStatus.hidden = true;
        const choices = byId('playlist-choices');
        choices.replaceChildren(...customPlaylists.map(list => {
            const row = button('playlist-choice');
            row.append(icon('list-ul'), element('span', null, list.name));
            if (list.files.includes(track.file)) {
                row.disabled = true;
                row.append(element('span', 'choice-added', 'Добавлено'));
            }
            row.addEventListener('click', () => addTrackToPlaylist(track, list.id));
            return row;
        }));
        choices.hidden = !customPlaylists.length;
        byId('playlist-chooser-empty').hidden = !choices.hidden;
        playlistChooser.showModal();
    }

    function filterPicker() {
        const words = normalize(playlistFilter.value).split(' ').filter(Boolean);
        let matches = 0;
        for (const { row, file } of pickerRows) {
            const fields = searchFields.get(file);
            const visible = words.every(word => fields.some(field => field.includes(word)));
            row.hidden = !visible;
            if (visible) matches++;
        }
        byId('picker-empty').hidden = matches > 0;
    }

    function updatePickedCount() {
        byId('selected-count').textContent = 'Выбрано: ' + trackCount(pickedFiles.size);
    }

    function openEditor(list, track) {
        editingId = list?.id;
        pickedFiles = new Set((list?.files || []).filter(file => trackByFile.has(file)));
        if (track) pickedFiles.add(track.file);
        byId('editor-title').textContent = list ? 'Редактировать плейлист' : 'Новый плейлист';
        playlistName.value = list?.name || '';
        playlistName.setCustomValidity('');
        playlistFilter.value = '';
        editorStatus.hidden = true;
        pickerRows = [...trackByFile.values()].map(track => {
            const row = element('label', 'track-option');
            const checkbox = element('input');
            checkbox.type = 'checkbox';
            checkbox.value = track.file;
            checkbox.checked = pickedFiles.has(track.file);
            const text = track.title + ' — ' + artistText(track);
            row.append(checkbox, element('span', null, text));
            return { row, file: track.file };
        });
        trackPicker.replaceChildren(...pickerRows.map(entry => entry.row));
        updatePickedCount();
        filterPicker();
        editor.showModal();
    }

    function initPlaylists() {
        document.querySelectorAll('[data-create-playlist]').forEach(control =>
            control.addEventListener('click', () => openEditor())
        );
        byId('edit-playlist').addEventListener('click', () => {
            const list = customPlaylists.find(item => item.id === collection.id);
            if (list) openEditor(list);
        });
        byId('create-playlist-with-track').addEventListener('click', () => {
            playlistChooser.close();
            openEditor(undefined, trackToAdd);
        });
        playlistChooser.addEventListener('cancel', event => {
            if (playlistChooser.hasAttribute('aria-busy')) event.preventDefault();
        });
        byId('cancel-playlist').addEventListener('click', () => editor.close());
        playlistFilter.addEventListener('input', filterPicker);
        playlistName.addEventListener('input', () => playlistName.setCustomValidity(''));
        trackPicker.addEventListener('change', ({ target }) => {
            if (target.checked) pickedFiles.add(target.value);
            else pickedFiles.delete(target.value);
            updatePickedCount();
        });
        playlistForm.addEventListener('submit', async event => {
            event.preventDefault();
            const name = playlistName.value.trim();
            if (!name) {
                playlistName.setCustomValidity('Введите название плейлиста');
                playlistName.reportValidity();
                return;
            }
            const saveButton = event.submitter;
            if (saveButton.disabled) return;
            saveButton.disabled = true;
            const list = {
                id: editingId || 'custom:' + crypto.getRandomValues(new Uint32Array(4)).join('-'),
                name, files: [...pickedFiles]
            };
            try {
                await rememberOnlineTracks(list.files);
                customPlaylists = await updateStorage(PLAYLISTS_KEY, customPlaylists, lists => {
                    const index = lists.findIndex(item => item.id === list.id);
                    if (index < 0) lists.push(list);
                    else lists[index] = list;
                    return lists;
                });
                editor.close();
                refreshEditedPlaylist(list);
                if (!editingId) activateTab('playlists');
                notify('Плейлист сохранён');
            } catch {
                editorStatus.textContent = 'Браузер не смог сохранить плейлист';
                editorStatus.hidden = false;
            } finally {
                saveButton.disabled = false;
            }
        });
        window.addEventListener('storage', event => {
            if (event.key === ONLINE_TRACKS_KEY || event.key === null) restoreOnlineTracks();
            if (event.key === PLAYLISTS_KEY || event.key === null) {
                customPlaylists = readStorage(PLAYLISTS_KEY, []);
                if (byId('playlists-grid').childElementCount) renderPlaylists();
            }
            if (event.key === LIKES_KEY || event.key === null) {
                refreshLikes(readStorage(LIKES_KEY, []));
            }
            if (event.key === HISTORY_KEY || event.key === null) {
                listens = readStorage(HISTORY_KEY, {});
                refreshHome();
            }
        });
    }

    const VOICE_ACTIONS = [
        { phrases: ['поставь паузу', 'пауза', 'стоп', 'останови', 'хватит', 'замолчи', 'заткнись', 'закрой рот', 'завали ебало', 'pause', 'stop'], run: () => audio.pause() },
        { phrases: ['перемешай', 'перемешать', 'шафл', 'shuffle'], run: shuffleQueue },
        { phrases: ['следующий', 'следующая', 'дальше', 'переключи', 'некст', 'next'], run: () => moveTrack(1) },
        { phrases: ['предыдущий', 'предыдущая', 'назад', 'прошлый', 'прошлая', 'previous', 'prev'], run: () => moveTrack(-1) },
        { phrases: ['прибавь', 'громче', 'увеличь', 'громкость выше', 'volume up', 'louder'], run: () => changeVolume(0.1) },
        { phrases: ['убавь', 'тише', 'уменьши', 'громкость ниже', 'volume down', 'quieter'], run: () => changeVolume(-0.1) }
    ];
    const VOICE_PLAY = /^(?:включи|включить|вруби|врубай|поставь|поставить|запусти|запустить|сыграй|играй|продолжи|play)(?: |$)/;
    const VOICE_FILLER = new Set(['трек', 'песню', 'песня', 'музыку', 'музыка', 'композицию', 'артиста', 'исполнителя', 'пожалуйста', 'давай']);

    function changeVolume(delta) {
        audio.volume = Math.min(1, Math.max(0, audio.volume + delta));
        notify('Громкость: ' + Math.round(audio.volume * 100) + '%');
    }

    function handleVoice(command) {
        const text = normalize(command).split(' ').filter(word => !VOICE_FILLER.has(word)).join(' ');
        if (!text) return;
        const action = VOICE_ACTIONS.find(item =>
            item.phrases.some(phrase => text === phrase || text.startsWith(phrase + ' ')));
        if (action) {
            action.run();
            return;
        }
        const query = text.replace(VOICE_PLAY, '').trim();
        if (!query) {
            playAudio();
            return;
        }
        const artist = bestMatch(artistQueries, query);
        const track = bestMatch(trackQueries, query, true);
        if (artist && artist.score >= (track?.score || 0)) {
            prioritizeTracks(shuffledTracks(artist.value.tracks));
            selectTrack(0, true);
        } else if (track) {
            prioritizeTracks([track.value]);
            selectTrack(0, true);
        } else {
            notify('Не удалось распознать команду или название трека');
        }
    }

    function initVoiceControl() {
        const control = byId('voice-control');
        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Recognition) {
            control.disabled = true;
            control.title = 'Голосовой помощник недоступен в этом браузере';
            return;
        }

        const recognition = new Recognition();
        recognition.lang = 'ru-RU';
        recognition.continuous = true;
        let listening = false;
        let restartTimer;

        function updateVoiceState() {
            control.setAttribute('aria-pressed', String(listening));
            control.title = listening ? 'Голосовой помощник включён' : 'Голосовой помощник выключен';
        }

        function listen() {
            if (!listening) return;
            try {
                recognition.start();
            } catch (error) {
                if (error.name === 'InvalidStateError') return;
                listening = false;
                updateVoiceState();
                notify('Не удалось запустить помощника');
            }
        }

        control.addEventListener('click', () => {
            listening = !listening;
            clearTimeout(restartTimer);
            updateVoiceState();
            if (listening) listen();
            else recognition.abort();
        });
        recognition.onstart = () => {
            if (!listening) recognition.abort();
        };
        recognition.onresult = ({ results, resultIndex }) => {
            if (!listening) return;
            for (let i = resultIndex; i < results.length; i++) {
                if (results[i].isFinal) handleVoice(results[i][0].transcript.trim());
            }
        };
        recognition.onerror = ({ error }) => {
            const messages = {
                'not-allowed': 'Разрешите доступ к микрофону',
                'service-not-allowed': 'Голосовой помощник недоступен',
                'audio-capture': 'Микрофон не найден',
                network: 'Не удалось подключиться к распознаванию речи'
            };
            if (!listening || !messages[error]) return;
            listening = false;
            clearTimeout(restartTimer);
            updateVoiceState();
            notify(messages[error]);
        };
        recognition.onend = () => {
            if (listening) restartTimer = setTimeout(listen, 400);
        };
    }

    async function initBluetoothOutput() {
        if (!audio.setSinkId || !navigator.mediaDevices?.enumerateDevices) return;
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const bluetooth = devices.find(device => device.kind === 'audiooutput' &&
                /bluetooth|\bbt\b|headset|науш|колонк|гарнитур/i.test(device.label));
            if (bluetooth) await audio.setSinkId(bluetooth.deviceId);
        } catch (error) {
            console.warn('Не удалось выбрать Bluetooth-выход', error);
        }
    }

    audio.volume = Number(volume.value);
    initVolumeControls();
    for (const tab of tabs) {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            if (tabName === 'user') {
                showQueue = false;
                renderQueue();
            }
            activateTab(tabName);
        });
    }
    playButton.addEventListener('click', () => audio.paused ? playAudio() : audio.pause());
    byId('prev').addEventListener('click', () => moveTrack(-1));
    byId('next').addEventListener('click', () => moveTrack(1));
    byId('shuffle').addEventListener('click', shuffleQueue);
    seek.addEventListener('input', () => { audio.currentTime = Number(seek.value); });
    for (const event of ['loadedmetadata', 'durationchange', 'emptied']) audio.addEventListener(event, updateProgress);
    audio.addEventListener('timeupdate', () => {
        updateProgress();
        recordListen();
    });
    for (const event of ['play', 'pause', 'ended']) audio.addEventListener(event, updatePlayButton);
    audio.addEventListener('ended', () => {
        recordListen();
        moveTrack(1, true);
    });
    audio.addEventListener('error', () => {
        updatePlayButton();
        if (audio.hasAttribute('src')) {
            const online = Audius.isTrack(queue[currentIndex]?.file);
            notify(online ? 'Трек Audius сейчас недоступен' : 'Не удалось открыть аудиофайл');
        }
    });
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
        navigator.serviceWorker.register('service-worker.js').catch(error => console.warn('Ошибка офлайн-режима', error));
    }
    renderQueue();
    byId('popular-section').addEventListener('toggle', event => {
        if (event.target.open && !byId('popular-grid').childElementCount) renderPopular();
    });
    restoreDownloads();
    initSearch();
    initPlaylists();
    initVoiceControl();
    initBluetoothOutput();
})();
