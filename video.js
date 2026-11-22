(() => {
    const franchise = TRACKS.find(track => track.file === 'franchise.mp3');
    const demos = [
        { ...franchise, url: 'music/' + encodeURIComponent(franchise.file) },
        { title: 'Пример аудио', artists: ['SoundHelix'],
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
    ];

    const byId = id => document.getElementById(id);
    const audio = byId('demo-audio');
    const video = byId('demo-video');
    const mode = byId('demo-mode');
    const status = byId('demo-status');
    let active = audio;
    let index = 0;

    function play(media) {
        media.play().catch(error => {
            if (error.name !== 'AbortError' && media === active) status.textContent = 'Не удалось начать воспроизведение';
        });
    }

    function load(offset = 0, autoplay = false) {
        index = (index + offset + demos.length) % demos.length;
        const demo = demos[index];
        byId('demo-title').textContent = demo.title;
        byId('demo-artist').textContent = demo.artists.join(', ');
        status.textContent = '';
        audio.src = demo.url;
        if (active === video && video.readyState) video.currentTime = 0;
        if (autoplay) play(active);
    }

    mode.addEventListener('click', () => {
        const wasPlaying = !active.paused;
        active.pause();
        active.hidden = true;
        active = active === audio ? video : audio;
        active.hidden = false;
        mode.textContent = active === video ? 'Слушать аудио' : 'Смотреть клип';
        status.textContent = '';
        if (wasPlaying) play(active);
    });

    byId('demo-prev').addEventListener('click', () => load(-1, !active.paused));
    byId('demo-next').addEventListener('click', () => load(1, !active.paused));

    for (const media of [audio, video]) {
        media.volume = 0.1;
        media.addEventListener('ended', () => { if (media === active) load(1, true); });
        media.addEventListener('error', () => {
            if (media === active) status.textContent = 'Файл не удалось открыть';
        });
    }
    load();
})();
