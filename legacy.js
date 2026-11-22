document.addEventListener('DOMContentLoaded', function () {
    // Массив всех треков; каждый трек распределён по языку и исполнителю.
    const allSongs = getLegacyTracks();

    // Массив популярных песен
    const popularSongs = allSongs.slice(0, 40);

    // Исходные карточки артистов. Списки треков строятся из общего каталога.
    const artists = [
        {
            "id": 0,
            "name": "Паллаич",
            "avatar": "https://images.genius.com/1dcdd72cc44f7130f1e0552b950145e4.1000x1000x1.png",
            "genre": ""
        },
        {
            "id": 1,
            "name": "Quavo",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 2,
            "name": "2 Chainz",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/2_Chainz_2017.jpg/640px-2_Chainz_2017.jpg",
            "genre": ""
        },
        {
            "id": 3,
            "name": "A$AP Rocky",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/ASAP_Rocky_-_Openair_Frauenfeld_2019_08.jpg/640px-ASAP_Rocky_-_Openair_Frauenfeld_2019_08.jpg",
            "genre": ""
        },
        {
            "id": 4,
            "name": "BABY BOI",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 5,
            "name": "BNYX®",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb37ac8de0bdfd8d5730874523",
            "genre": ""
        },
        {
            "id": 6,
            "name": "BUCKSHOT",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebc0084c5ea70c68ff42b73266",
            "genre": ""
        },
        {
            "id": 7,
            "name": "Big Baby Tape",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb6a862c3c0061f402e3b34642",
            "genre": ""
        },
        {
            "id": 8,
            "name": "Chris Martin",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Chris_Martin_2017_in_Hamburg.jpg/640px-Chris_Martin_2017_in_Hamburg.jpg",
            "genre": ""
        },
        {
            "id": 9,
            "name": "Destroy Lonely",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb9a3d4a707af9237b33d33e3b",
            "genre": ""
        },
        {
            "id": 10,
            "name": "Don Toliver",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Don_Toliver_2021.png/640px-Don_Toliver_2021.png",
            "genre": ""
        },
        {
            "id": 11,
            "name": "Drake",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Drake_at_The_Carter_Effect_2017_%28cropped%29.jpg/640px-Drake_at_The_Carter_Effect_2017_%28cropped%29.jpg",
            "genre": ""
        },
        {
            "id": 12,
            "name": "Druskhi",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 13,
            "name": "Dwele",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dwele_2012.jpg/640px-Dwele_2012.jpg",
            "genre": ""
        },
        {
            "id": 14,
            "name": "EsDeeKid",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebdf6f9f1b521c3f57fd336122",
            "genre": ""
        },
        {
            "id": 15,
            "name": "Future",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Future_-_Openair_Frauenfeld_2019_02.jpg/640px-Future_-_Openair_Frauenfeld_2019_02.jpg",
            "genre": ""
        },
        {
            "id": 16,
            "name": "GONE.Fludd",
            "avatar": "https://showbi.ru/upload/2020/11/18/20201118170848-51d9621b.jpg",
            "genre": ""
        },
        {
            "id": 17,
            "name": "Homixide Gang",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb2e59dedcd40b7d57bf3249b5",
            "genre": ""
        },
        {
            "id": 18,
            "name": "I am music",
            "avatar": "https://lastfm.freetls.fastly.net/i/u/770x0/a1ae3738d6b4c9ba090f2ae493c76c8d.jpg",
            "genre": ""
        },
        {
            "id": 19,
            "name": "IMG",
            "avatar": "https://i.scdn.co/image/ab67616d00001e02dfd6bfe770e5c34a636b2a72",
            "genre": ""
        },
        {
            "id": 20,
            "name": "Iann Dior",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebd69181c8b122d2125f1f0cf8",
            "genre": ""
        },
        {
            "id": 21,
            "name": "JACKBOYS",
            "avatar": "https://upload.wikimedia.org/wikipedia/en/4/46/JackBoys_-_JackBoys.png",
            "genre": ""
        },
        {
            "id": 22,
            "name": "Kanye West",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/640px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg",
            "genre": ""
        },
        {
            "id": 23,
            "name": "Ken Carson",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb3e089e47bdf860199a4b3b42",
            "genre": ""
        },
        {
            "id": 24,
            "name": "Kid Cudi",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Kid_Cudi_2010.jpg/640px-Kid_Cudi_2010.jpg",
            "genre": ""
        },
        {
            "id": 25,
            "name": "Kizaru",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebc6b0f4b6035b35920edfece0",
            "genre": ""
        },
        {
            "id": 26,
            "name": "Kodak Black",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kodak_Black_2018.png/640px-Kodak_Black_2018.png",
            "genre": ""
        },
        {
            "id": 27,
            "name": "Lil Baby",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lil_Baby_in_2020.png/640px-Lil_Baby_in_2020.png",
            "genre": ""
        },
        {
            "id": 28,
            "name": "Lil Tecca",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lil_Tecca_2019.png/640px-Lil_Tecca_2019.png",
            "genre": ""
        },
        {
            "id": 29,
            "name": "Lil Uzi Vert",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lil_Uzi_Vert_%282018%29.png/640px-Lil_Uzi_Vert_%282018%29.png",
            "genre": ""
        },
        {
            "id": 30,
            "name": "Lil Wayne",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lil_Wayne_%2823523750613%29.jpg/640px-Lil_Wayne_%2823523750613%29.jpg",
            "genre": ""
        },
        {
            "id": 31,
            "name": "M.I.A.",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/MIA_Press_2022_%28cropped%29.jpg/640px-MIA_Press_2022_%28cropped%29.jpg",
            "genre": ""
        },
        {
            "id": 32,
            "name": "MAYOT",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebedc356acc39dfc52fd4f06c1",
            "genre": ""
        },
        {
            "id": 33,
            "name": "Metro Boomin",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Metro_Boomin_2019.png/640px-Metro_Boomin_2019.png",
            "genre": ""
        },
        {
            "id": 34,
            "name": "Morgenshtern",
            "avatar": "https://ss.sport-express.ru/userfiles/materials/177/1774394/volga.jpg",
            "genre": ""
        },
        {
            "id": 35,
            "name": "Nicki Minaj",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nicki_Minaj_Vogue_2023.jpg/640px-Nicki_Minaj_Vogue_2023.jpg",
            "genre": ""
        },
        {
            "id": 36,
            "name": "Offset",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 37,
            "name": "Playboi Carti",
            "avatar": "https://i.pinimg.com/736x/bd/d2/7f/bdd27fc47b0674f3b9db0cc158e55fdf.jpg",
            "genre": ""
        },
        {
            "id": 38,
            "name": "Quavo",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Quavo_Veld_festival_2017.jpg/640px-Quavo_Veld_festival_2017.jpg",
            "genre": ""
        },
        {
            "id": 39,
            "name": "Repair Lonely",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 40,
            "name": "Rich Amiri",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebe7fd740a4a1b14f2f6f56a10",
            "genre": ""
        },
        {
            "id": 41,
            "name": "Rich The Kid",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rich_the_Kid_2018.png/640px-Rich_the_Kid_2018.png",
            "genre": ""
        },
        {
            "id": 42,
            "name": "Superheaven",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb37ac8de0bdfd8d5730874523",
            "genre": ""
        },
        {
            "id": 43,
            "name": "THE SCOTTS",
            "avatar": "https://upload.wikimedia.org/wikipedia/en/0/07/The_Scotts_-_The_Scotts.png",
            "genre": ""
        },
        {
            "id": 44,
            "name": "TWXN",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebf915acb1ea01b164ee30975d",
            "genre": ""
        },
        {
            "id": 45,
            "name": "The Weeknd",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_Weeknd_Cannes_2023.png/640px-The_Weeknd_Cannes_2023.png",
            "genre": ""
        },
        {
            "id": 46,
            "name": "Travis Scott",
            "avatar": "https://app.hiphopdx.com/wp-content/uploads/2024/09/travis-scott-sparks-new-album-excitement.jpg?w=1200",
            "genre": ""
        },
        {
            "id": 47,
            "name": "Ty Dolla $ign",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ty_Dolla_Sign_2018.png/640px-Ty_Dolla_Sign_2018.png",
            "genre": ""
        },
        {
            "id": 48,
            "name": "Void",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb8d61a005421acb06b875da19",
            "genre": ""
        },
        {
            "id": 49,
            "name": "XXXTENTACION",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Xxxtentacion_%28cropped%29.jpg/640px-Xxxtentacion_%28cropped%29.jpg",
            "genre": ""
        },
        {
            "id": 50,
            "name": "Yeat",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Yeat_-_The_Fonda_2023_%2853231064164%29_%28cropped%29.jpg/640px-Yeat_-_The_Fonda_2023_%2853231064164%29_%28cropped%29.jpg",
            "genre": ""
        },
        {
            "id": 51,
            "name": "Young Thug",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Young_Thug_-_Openair_Frauenfeld_2019_20.jpg/640px-Young_Thug_-_Openair_Frauenfeld_2019_20.jpg",
            "genre": ""
        },
        {
            "id": 52,
            "name": "ech0",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 53,
            "name": "fakemink",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 54,
            "name": "void",
            "avatar": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 55,
            "name": "Еврогей",
            "avatar": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 56,
            "name": "Натура",
            "avatar": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        },
        {
            "id": 57,
            "name": "Нурминский",
            "avatar": "https://i.scdn.co/image/ab6761610000e5eb0e0a679f1437508b2cb76c9d",
            "genre": ""
        },
        {
            "id": 58,
            "name": "Платина",
            "avatar": "https://i.scdn.co/image/ab6761610000e5ebf16b8ce97a77910d08d3fa40",
            "genre": ""
        },
        {
            "id": 59,
            "name": "Серёга",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Seryoga_KingRing.jpg/640px-Seryoga_KingRing.jpg",
            "genre": ""
        },
        {
            "id": 60,
            "name": "Тимати",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Timati%2C_2017.jpg/640px-Timati%2C_2017.jpg",
            "genre": ""
        },
        {
            "id": 61,
            "name": "Элджей",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Allj2018.jpg/640px-Allj2018.jpg",
            "genre": ""
        },
        {
            "id": 62,
            "name": "Ямаш",
            "avatar": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
            "genre": ""
        }
    ];

    const playlists = [];

    // Элементы DOM
    const LANGUAGE_LABELS = {
        en: 'Английский',
        ru: 'Русский',
        mixed: 'Смешанный'
    };
    const DEFAULT_ARTIST_AVATAR = 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80';

    function normalizeText(text) {
        return String(text || '')
            .toLowerCase()
            .normalize('NFKD')
            .replace(/ё/g, 'е')
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function inferLanguage(song) {
        const raw = `${song.title || ''} ${song.artist || ''} ${song.url || ''}`;
        return /[а-яё]/i.test(raw) ? 'ru' : 'en';
    }

    function getSongKey(song) {
        return song.id || song.url || `${song.title}-${song.artist}`;
    }

    function uniqueSongs(songs) {
        const seen = new Set();

        return songs.filter(song => {
            const key = getSongKey(song);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    function splitArtistNames(artistText) {
        return String(artistText || 'Неизвестный артист')
            .split(/\s*(?:,|&|\/|\+|\bfeat\.?\b|\bft\.?\b|\bfeaturing\b|\band\b|;)\s*/i)
            .map(name => name.trim())
            .filter(Boolean);
    }

    function normalizeSongLibrary() {
        allSongs.forEach(song => {
            song.language = song.language || inferLanguage(song);
            song.performers = splitArtistNames(song.artist);
        });
    }

    function buildGeneratedArtists() {
        const metaByName = new Map();

        artists.forEach(artist => {
            metaByName.set(normalizeText(artist.name), artist);
        });

        const artistsByName = new Map();

        allSongs.forEach(song => {
            song.performers.forEach(name => {
                const key = normalizeText(name);
                const existingMeta = metaByName.get(key);

                if (!artistsByName.has(key)) {
                    artistsByName.set(key, {
                        id: artistsByName.size + 1,
                        name,
                        avatar: existingMeta?.avatar || DEFAULT_ARTIST_AVATAR,
                        genre: existingMeta?.genre || LANGUAGE_LABELS[song.language] || '',
                        songs: []
                    });
                }

                artistsByName.get(key).songs.push(song);
            });
        });

        return [...artistsByName.values()]
            .map(artist => ({
                ...artist,
                songs: uniqueSongs(artist.songs)
            }))
            .sort((firstArtist, secondArtist) => {
                const songCountDifference = secondArtist.songs.length - firstArtist.songs.length;
                return songCountDifference || firstArtist.name.localeCompare(secondArtist.name, 'ru');
            });
    }

    function buildGeneratedPlaylists() {
        const playlistsByLanguage = new Map();

        allSongs.forEach(song => {
            const language = song.language || inferLanguage(song);
            if (!playlistsByLanguage.has(language)) {
                playlistsByLanguage.set(language, []);
            }
            playlistsByLanguage.get(language).push(song);
        });

        const languagePlaylists = [...playlistsByLanguage.entries()].map(([language, songs], index) => ({
            id: `language-${language}`,
            name: `${LANGUAGE_LABELS[language] || language} треки`,
            cover: index % 2 === 0
                ? 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80'
                : 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
            songs: uniqueSongs(songs)
        }));

        const artistPlaylists = artists.map(artist => ({
            id: `artist-${normalizeText(artist.name)}`,
            name: artist.name,
            cover: artist.avatar || DEFAULT_ARTIST_AVATAR,
            songs: uniqueSongs(artist.songs)
        }));

        return [
            {
                id: 'all-tracks',
                name: 'Все треки',
                cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80',
                songs: uniqueSongs(allSongs)
            },
            ...languagePlaylists,
            ...artistPlaylists
        ];
    }

    function mergePlaylists(generatedPlaylists, curatedPlaylists) {
        const seen = new Set();

        return [...generatedPlaylists, ...curatedPlaylists]
            .map(playlistData => ({
                ...playlistData,
                songs: uniqueSongs(playlistData.songs || [])
            }))
            .filter(playlistData => {
                const key = normalizeText(playlistData.name);
                if (seen.has(key)) return false;
                seen.add(key);
                return playlistData.songs.length > 0;
            });
    }

    function buildFixedPlaylists() {
        const englishSongs = allSongs.filter(song => song.language === 'en');
        const russianSongs = allSongs.filter(song => song.language === 'ru');
        const chillSongs = allSongs.filter(song => {
            const text = normalizeText(`${song.title} ${song.artist} ${song.url}`);
            return ['chill', 'dream', 'garden', 'ночь', 'night', 'homecoming', 'long time', 'dark thoughts', 'ratherlife']
                .some(keyword => text.includes(normalizeText(keyword)));
        });
        const yamashSongs = allSongs.filter(song =>
            (song.performers || splitArtistNames(song.artist)).some(name => normalizeText(name) === normalizeText('Ямаш'))
        );

        return [
            {
                id: 'eng',
                name: 'English mix',
                cover: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
                songs: uniqueSongs(englishSongs)
            },
            {
                id: 'ru',
                name: 'Ru микс',
                cover: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
                songs: uniqueSongs(russianSongs)
            },
            {
                id: 'mix-chill',
                name: 'Mix chill',
                cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80',
                songs: uniqueSongs(chillSongs.length ? chillSongs : allSongs.slice(0, 25))
            },
            {
                id: 'yamash-hit',
                name: 'Ямаш хит',
                cover: DEFAULT_ARTIST_AVATAR,
                songs: uniqueSongs(yamashSongs)
            }
        ].filter(playlistData => playlistData.songs.length > 0);
    }

    normalizeSongLibrary();
    artists.splice(0, artists.length, ...buildGeneratedArtists());
    playlists.splice(0, playlists.length, ...buildFixedPlaylists());

    const playPauseBtn = document.getElementById('play-pause');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const shuffleBtn = document.getElementById('shuffle');
    const volumeSlider = document.getElementById('volume');
    const progressBar = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const albumArt = document.getElementById('album-art');
    const playlistEl = document.getElementById('playlist');
    const artistsGrid = document.getElementById('artists-grid');
    const popularGridEl = document.getElementById('popular-grid');
    const playlistsGrid = document.getElementById('playlists-grid');
    const visualizer = document.getElementById('visualizer');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const audioPlayer = document.getElementById('audio-player');
    const voiceControlBtn = document.getElementById('voice-control');
    const voiceControlText = document.getElementById('voice-control-text');
    const voiceRoutingNote = document.getElementById('voice-routing-note');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchStatus = document.getElementById('search-status');

    // Текущее состояние
    let isPlaying = false;
    let currentSongIndex = 0;
    let visualizerBars = [];
    let playlist = [];
    const MUSIC_CACHE_NAME = 'music-v2';
    const DOWNLOADED_TRACKS_KEY = 'downloadedTracks';
    const downloadedTrackUrls = new Set(JSON.parse(localStorage.getItem(DOWNLOADED_TRACKS_KEY) || '[]'));

    // Установка громкости по умолчанию 10%
    volumeSlider.value = 0.1;
    audioPlayer.volume = 0.1;

    function getTabContentId(tabName) {
        return tabName === 'user' ? 'user-playlist' : `${tabName}-tab`;
    }

    function activateTab(tabName) {
        const tab = document.querySelector(`.tab[data-tab="${tabName}"]`);
        const content = document.getElementById(getTabContentId(tabName));

        if (!tab || !content) return;

        tabs.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');
        content.classList.add('active');
    }

    // Переключение вкладок
    tabs.forEach(tab => {
        tab.addEventListener('click', () => activateTab(tab.dataset.tab));
    });

    // Инициализация визуализатора
    function initVisualizer() {
        visualizer.innerHTML = '';
        visualizerBars = [];

        for (let i = 0; i < 40; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            // Начальная высота с учетом плавности
            bar.style.height = `${Math.random() * 80 + 20}px`;
            bar.style.transition = `height ${UPDATE_INTERVAL / 1000}s ease-out, opacity ${UPDATE_INTERVAL / 1000}s ease-out`;
            visualizer.appendChild(bar);
            visualizerBars.push(bar);
        }

        // Сбрасываем время последнего обновления
        lastUpdateTime = 0;
    }

    // Обновление визуализатора
    let lastUpdateTime = 0;
    const UPDATE_INTERVAL = 300; // Интервал в миллисекундах (реже = больше значение)

    function updateVisualizer(timestamp) {
        if (!isPlaying) return;

        // Обновляем только если прошло достаточно времени
        if (timestamp - lastUpdateTime > UPDATE_INTERVAL) {
            lastUpdateTime = timestamp;

            visualizerBars.forEach(bar => {
                const newHeight = Math.random() * 80 + 20;
                bar.style.height = `${newHeight}px`;
                bar.style.opacity = 0.7 + Math.random() * 0.3;
            });
        }

        requestAnimationFrame(updateVisualizer);
    }

    // Загрузка песни
    function loadSong(index) {
        if (playlist.length === 0) return;

        const song = playlist[index];
        songTitle.textContent = song.title || "Неизвестный трек";
        songArtist.textContent = song.artist || "Неизвестный исполнитель";

        // Обновление обложки
        if (song.cover) {
            albumArt.innerHTML = `
                                <img src="${song.cover}" alt="${song.title}">
                                <div class="overlay">
                                    <i class="fas fa-play"></i>
                                </div>
                            `;
        } else {
            albumArt.innerHTML = `
                                <i class="fas fa-music"></i>
                                <div class="overlay">
                                    <i class="fas fa-play"></i>
                                </div>
                            `;
        }

        // Установка источника аудио
        audioPlayer.src = song.url;
        audioPlayer.load();

        // Обновление активного элемента плейлиста
        document.querySelectorAll('.playlist-item').forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Воспроизведение, если плеер был включен
        if (isPlaying) {
            audioPlayer.play().catch(e => console.error("Ошибка воспроизведения:", e));
        }
    }

    // Воспроизведение/пауза
    function togglePlay() {
        if (playlist.length === 0) {
            alert("Пожалуйста, выберите трек из плейлиста!");
            return;
        }

        isPlaying = !isPlaying;

        if (isPlaying) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            audioPlayer.play().catch(e => console.error("Ошибка воспроизведения:", e));
            updateVisualizer();
        } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            audioPlayer.pause();
        }
    }

    // Предыдущая песня
    function prevSong() {
        if (playlist.length === 0) return;

        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = playlist.length - 1;
        }
        loadSong(currentSongIndex);
    }

    // Следующая песня
    function nextSong() {
        if (playlist.length === 0) return;

        currentSongIndex++;
        if (currentSongIndex > playlist.length - 1) {
            currentSongIndex = 0;
        }
        loadSong(currentSongIndex);
    }

    // Обновление прогресс-бара
    function shufflePlaylist() {
        const hadPlaylist = playlist.length > 0;

        if (playlist.length === 0) {
            playlist = [...allSongs];
        }

        const currentSong = playlist[currentSongIndex];
        const hasCurrentSong = hadPlaylist && Boolean(currentSong);
        const currentSongKey = currentSong ? getSongKey(currentSong) : null;
        const songsToShuffle = currentSong
            ? playlist.filter(song => getSongKey(song) !== currentSongKey)
            : [...playlist];

        for (let i = songsToShuffle.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [songsToShuffle[i], songsToShuffle[randomIndex]] = [songsToShuffle[randomIndex], songsToShuffle[i]];
        }

        playlist = currentSong ? [currentSong, ...songsToShuffle] : songsToShuffle;
        currentSongIndex = 0;

        playlistEl.innerHTML = '';
        generateUserPlaylist();

        if (!hasCurrentSong) {
            loadSong(currentSongIndex);
        }

        showNotification('Треки перемешаны');
    }

    function updateProgress(e) {
        if (playlist.length === 0) return;

        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;

        // Расчет нового времени
        const newTime = (clickX / width) * duration;
        audioPlayer.currentTime = newTime;
    }

    // Обновление времени
    function updateTime() {
        // Обновляем текущее время
        const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
        const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;

        // Обновляем длительность
        const durationMinutes = Math.floor(audioPlayer.duration / 60);
        const durationSeconds = Math.floor(audioPlayer.duration % 60);
        durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;

        // Обновляем прогресс-бар
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    // Установка громкости
    function setVolume() {
        audioPlayer.volume = volumeSlider.value;
    }

    function changeVolumeByVoice(delta) {
        const currentVolume = Number(audioPlayer.volume || volumeSlider.value || 0);
        const nextVolume = Math.min(1, Math.max(0, currentVolume + delta));
        audioPlayer.volume = nextVolume;
        volumeSlider.value = String(nextVolume);
        showNotification(`Громкость: ${Math.round(nextVolume * 100)}%`);
    }

    // Генерация плейлистов
    function getSearchableSongText(song) {
        const fileName = safeDecodeURIComponent((song.url || '').split('/').pop() || '')
            .replace(/\.(mp3|wav|ogg|m4a|mov|mp4)$/i, '');

        return [
            song.title,
            song.artist,
            fileName,
            ...(song.performers || [])
        ].map(normalizeText).filter(Boolean);
    }

    function safeDecodeURIComponent(value) {
        try {
            return decodeURIComponent(value);
        } catch {
            return value;
        }
    }

    function scoreSongMatch(song, query) {
        const normalizedQuery = normalizeText(query);
        if (!normalizedQuery) return 0;

        const queryTokens = normalizedQuery.split(' ').filter(Boolean);
        let bestScore = 0;

        getSearchableSongText(song).forEach(field => {
            if (field === normalizedQuery) bestScore = Math.max(bestScore, 1000);
            if (field.startsWith(normalizedQuery)) bestScore = Math.max(bestScore, 850);
            if (field.includes(normalizedQuery)) bestScore = Math.max(bestScore, 700);
            if (normalizedQuery.includes(field) && field.length > 2) bestScore = Math.max(bestScore, 620);

            const fieldTokens = field.split(' ');
            const matchedTokens = queryTokens.filter(token =>
                fieldTokens.some(fieldToken => fieldToken === token || fieldToken.startsWith(token) || fieldToken.includes(token))
            ).length;

            if (matchedTokens > 0) {
                bestScore = Math.max(bestScore, 220 + matchedTokens * 120);
            }
        });

        return bestScore;
    }

    function findBestSongMatch(query) {
        return allSongs
            .map(song => ({
                song,
                score: scoreSongMatch(song, query)
            }))
            .sort((first, second) => second.score - first.score)[0];
    }

    function addSongToPlaylistStart(song, shouldPlay = false) {
        if (!song) return false;

        playlist = playlist.filter(item => getSongKey(item) !== getSongKey(song));
        playlist.unshift(song);
        currentSongIndex = 0;
        playlistEl.innerHTML = '';
        generateUserPlaylist();
        loadSong(currentSongIndex);
        activateTab('user');

        if (shouldPlay && !isPlaying) {
            togglePlay();
        }

        return true;
    }

    function shuffledSongs(songs) {
        const result = [...songs];

        for (let index = result.length - 1; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
        }

        return result;
    }

    function scoreArtistMatch(artist, query) {
        const normalizedQuery = normalizeText(query);
        const normalizedName = normalizeText(artist?.name);

        if (!normalizedQuery || !normalizedName) return 0;
        if (normalizedName === normalizedQuery) return 1000;
        if (normalizedName.startsWith(normalizedQuery)) return 850;
        if (normalizedQuery.startsWith(normalizedName)) return 820;
        if (normalizedName.includes(normalizedQuery)) return 700;
        if (normalizedQuery.includes(normalizedName)) return 680;

        const queryTokens = normalizedQuery.split(' ').filter(Boolean);
        const nameTokens = normalizedName.split(' ').filter(Boolean);
        const matchedTokens = queryTokens.filter(token =>
            nameTokens.some(nameToken => nameToken === token || nameToken.startsWith(token) || token.startsWith(nameToken))
        ).length;

        return matchedTokens > 0 ? 240 + matchedTokens * 140 : 0;
    }

    function findBestArtistMatch(query) {
        return artists
            .map(artist => ({
                artist,
                score: scoreArtistMatch(artist, query)
            }))
            .sort((first, second) => second.score - first.score || second.artist.songs.length - first.artist.songs.length)[0];
    }

    function addArtistSongsToPlaylistStart(artist, shouldPlay = false) {
        if (!artist?.songs?.length) return false;

        const artistSongs = shuffledSongs(uniqueSongs(artist.songs));
        const artistSongKeys = new Set(artistSongs.map(getSongKey));
        playlist = [
            ...artistSongs,
            ...playlist.filter(song => !artistSongKeys.has(getSongKey(song)))
        ];
        currentSongIndex = 0;
        playlistEl.innerHTML = '';
        generateUserPlaylist();
        loadSong(currentSongIndex);
        activateTab('user');

        if (shouldPlay && !isPlaying) {
            togglePlay();
        }

        return true;
    }

    function searchAndPromoteTrack(query, shouldPlay = false) {
        const bestMatch = findBestSongMatch(query);

        if (!bestMatch || bestMatch.score < 220) {
            if (searchStatus) {
                searchStatus.textContent = 'Трек не найден. Попробуй другое название.';
            }
            showNotification('Трек не найден');
            return null;
        }

        addSongToPlaylistStart(bestMatch.song, shouldPlay);

        if (searchStatus) {
            searchStatus.textContent = `Лучшее совпадение: ${bestMatch.song.title} - ${bestMatch.song.artist}`;
        }

        showNotification(`Найден трек: ${bestMatch.song.title}`);
        return bestMatch.song;
    }

    function isTrackDownloaded(song) {
        return downloadedTrackUrls.has(song.url);
    }

    function saveDownloadedTracks() {
        localStorage.setItem(DOWNLOADED_TRACKS_KEY, JSON.stringify([...downloadedTrackUrls]));
    }

    function updateDownloadButtons() {
        document.querySelectorAll('[data-download-url]').forEach(button => {
            const isDownloaded = downloadedTrackUrls.has(button.dataset.downloadUrl);
            button.classList.toggle('downloaded', isDownloaded);
            button.title = isDownloaded ? 'Трек загружен' : 'Загрузить трек';
            button.setAttribute('aria-label', button.title);
            button.innerHTML = isDownloaded ? '<i class="fas fa-check"></i>' : '<i class="fas fa-download"></i>';
        });
    }

    async function downloadTrack(song) {
        if (!song?.url) return;

        if (!('caches' in window)) {
            showNotification('Браузер не поддерживает локальное кеширование треков');
            return;
        }

        try {
            showNotification(`Загружаю: ${song.title}`);
            const cache = await caches.open(MUSIC_CACHE_NAME);
            const response = await fetch(song.url, { cache: 'reload' });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            await cache.put(song.url, response.clone());
            downloadedTrackUrls.add(song.url);
            saveDownloadedTracks();
            updateDownloadButtons();
            showNotification(`Трек загружен: ${song.title}`);
        } catch (error) {
            console.error('Не удалось загрузить трек:', error);
            showNotification('Не удалось загрузить трек');
        }
    }

    function initSearch() {
        if (!searchInput || !searchButton) return;
        let searchTimer = null;
        let lastPromotedQuery = '';

        const runSearch = () => {
            const query = searchInput.value.trim();
            if (!query) {
                if (searchStatus) searchStatus.textContent = '';
                return;
            }

            const song = searchAndPromoteTrack(query);
            if (song) {
                lastPromotedQuery = normalizeText(query);
            }
        };

        searchButton.addEventListener('click', runSearch);
        searchInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                runSearch();
            }
        });
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            const bestMatch = findBestSongMatch(query);
            clearTimeout(searchTimer);

            if (!query) {
                if (searchStatus) searchStatus.textContent = '';
                lastPromotedQuery = '';
                return;
            }

            if (searchStatus) {
                searchStatus.textContent = bestMatch && bestMatch.score >= 220
                    ? `Нашел: ${bestMatch.song.title} - ${bestMatch.song.artist}`
                    : 'Ищу совпадение...';
            }

            searchTimer = setTimeout(() => {
                const normalizedQuery = normalizeText(searchInput.value);
                if (normalizedQuery.length < 2 || normalizedQuery === lastPromotedQuery) return;

                const song = searchAndPromoteTrack(searchInput.value);
                if (song) {
                    lastPromotedQuery = normalizedQuery;
                }
            }, 350);
        });
    }

    function initServiceWorker() {
        if (!('serviceWorker' in navigator)) return;

        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                registration.update().catch(() => {});

                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }

                registration.addEventListener('updatefound', () => {
                    const worker = registration.installing;
                    if (!worker) return;

                    worker.addEventListener('statechange', () => {
                        if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                            worker.postMessage({ type: 'SKIP_WAITING' });
                        }
                    });
                });
            })
            .catch(error => {
                console.warn('Service worker не зарегистрирован:', error);
            });
    }

    function generatePlaylists() {
        playlists.forEach(playlist => {
            const playlistCard = document.createElement('div');
            playlistCard.className = 'playlist-item-card';
            playlistCard.innerHTML = `
                                <div class="cover">
                                    <img src="${playlist.cover}" alt="${playlist.name}">
                                </div>
                                <div class="name">${playlist.name}</div>
                                <div class="count">${playlist.songs.length} треков</div>
                            `;

            playlistCard.addEventListener('click', () => {
                loadPlaylist(playlist);
            });

            playlistsGrid.appendChild(playlistCard);
        });
    }

    // Генерация списка артистов
    function generateArtistsList() {
        const artistsBySongCount = [...artists].sort((firstArtist, secondArtist) => {
            const songCountDifference = secondArtist.songs.length - firstArtist.songs.length;

            if (songCountDifference !== 0) {
                return songCountDifference;
            }

            return firstArtist.name.localeCompare(secondArtist.name, 'ru');
        });

        artistsBySongCount.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.innerHTML = `
                            <div class="avatar">
                                ${artist.avatar ?
                    `<img src="${artist.avatar}" alt="${artist.name}">` :
                    `<i class="fas fa-user"></i>`}
                            </div>
                            <div class="name">${artist.name}</div>
                            <div class="genre">${artist.genre}</div>
                            <div class="songs">${artist.songs.length} треков</div>
                        `;

            // Добавляем обработчик клика на артиста
            artistCard.addEventListener('click', () => {
                addArtistSongsToPlaylist(artist);
            });

            artistsGrid.appendChild(artistCard);
        });
    }

    // Функция добавления треков артиста в плейлист
    function addArtistSongsToPlaylist(artist) {
        // Очищаем текущий плейлист
        playlist = [];

        // Добавляем все треки артиста
        artist.songs.forEach(song => {
            playlist.push(song);
        });

        // Обновляем отображение плейлиста
        playlistEl.innerHTML = '';
        generateUserPlaylist();

        // Устанавливаем первую песню как текущую
        currentSongIndex = 0;
        loadSong(currentSongIndex);

        // Переключаемся на вкладку "Ваша музыка"
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        document.querySelector('.tab[data-tab="user"]').classList.add('active');
        document.getElementById('user-playlist').classList.add('active');

        // Начинаем воспроизведение


        // Показываем уведомление
        showNotification(`Добавлены треки артиста: ${artist.name}`);
    }



    // Загрузка плейлиста
    function loadPlaylist(playlistData) {
        // Очищаем текущий плейлист
        playlist = [];

        // Добавляем все песни из выбранного плейлиста
        playlistData.songs.forEach(song => {
            playlist.push({
                ...song,
                cover: playlistData.cover
            });
        });

        // Обновляем отображение плейлиста
        playlistEl.innerHTML = '';
        generateUserPlaylist();

        // Устанавливаем первую песню как текущую
        currentSongIndex = 0;
        loadSong(currentSongIndex);

        // Переключаемся на вкладку "Ваша музыка"
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        document.querySelector('.tab[data-tab="user"]').classList.add('active');
        document.getElementById('user-playlist').classList.add('active');

        // Начинаем воспроизведение


        // Показываем уведомление
        showNotification(`Загружен плейлист: ${playlistData.name}`);
    }

    // Генерация популярного плейлиста
    function generatePopularPlaylist() {
        popularSongs.forEach((song) => {
            // Для сетки популярной музыки
            const songCard = document.createElement('div');
            songCard.className = 'popular-song';
            songCard.innerHTML = `
                                <div class="cover">
                                    ${song.cover ? `<img src="${song.cover}" alt="${song.title}">` : '<i class="fas fa-music"></i>'}
                                    <div class="overlay">
                                        <i class="fas fa-play"></i>
                                    </div>
                                </div>
                                <div class="title">${song.title}</div>
                                <div class="artist">${song.artist}</div>
                                <div class="track-meta">
                                    <span>${LANGUAGE_LABELS[song.language] || song.language || ''}</span>
                                    <span>${song.duration}</span>
                                </div>
                                <div class="track-actions">
                                    <button class="track-download-btn ${isTrackDownloaded(song) ? 'downloaded' : ''}" data-download-url="${song.url}" title="${isTrackDownloaded(song) ? 'Трек загружен' : 'Загрузить трек'}" aria-label="${isTrackDownloaded(song) ? 'Трек загружен' : 'Загрузить трек'}">
                                        <i class="fas ${isTrackDownloaded(song) ? 'fa-check' : 'fa-download'}"></i>
                                    </button>
                                    <div class="play-btn">
                                        <i class="fas fa-play"></i>
                                    </div>
                                </div>
                            `;

            songCard.querySelector('.track-download-btn').addEventListener('click', function (e) {
                e.stopPropagation();
                downloadTrack(song);
            });

            songCard.querySelector('.play-btn').addEventListener('click', function (e) {
                e.stopPropagation();
                addSongToPlaylist(song);
            });

            popularGridEl.appendChild(songCard);
        });
    }

    // Добавление песни в плейлист
    function addSongToPlaylist(song) {
        // Проверяем, есть ли песня уже в плейлисте
        const songExists = playlist.some(s => getSongKey(s) === getSongKey(song));

        if (!songExists) {
            playlist.push(song);

            // Обновляем плейлист
            playlistEl.innerHTML = '';
            generateUserPlaylist();
        }

        // Устанавливаем текущую песню
        currentSongIndex = playlist.findIndex(s => getSongKey(s) === getSongKey(song));
        loadSong(currentSongIndex);

        // Начинаем воспроизведение
        if (!isPlaying) {
            togglePlay();
        }

        // Показываем уведомление
        showNotification(`Добавлен трек: ${song.title}`);
    }

    // Генерация пользовательского плейлиста
    function generateUserPlaylist() {
        playlist.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'playlist-item';
            if (index === currentSongIndex) {
                li.classList.add('active');
            }

            li.innerHTML = `
                                <div class="play-icon">
                                    <i class="fas fa-music"></i>
                                </div>
                                <div class="song-details">
                                    <div class="title">${song.title}</div>
                                    <div class="artist">${song.artist}</div>
                                </div>
                                <div class="song-extra">
                                    <span class="language">${LANGUAGE_LABELS[song.language] || song.language || ''}</span>
                                    <span class="duration">${song.duration}</span>
                                    <button class="track-download-btn ${isTrackDownloaded(song) ? 'downloaded' : ''}" data-download-url="${song.url}" title="${isTrackDownloaded(song) ? 'Трек загружен' : 'Загрузить трек'}" aria-label="${isTrackDownloaded(song) ? 'Трек загружен' : 'Загрузить трек'}">
                                        <i class="fas ${isTrackDownloaded(song) ? 'fa-check' : 'fa-download'}"></i>
                                    </button>
                                </div>
                            `;

            li.querySelector('.track-download-btn').addEventListener('click', event => {
                event.stopPropagation();
                downloadTrack(song);
            });

            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                if (!isPlaying) {
                    togglePlay();
                }
            });

            playlistEl.appendChild(li);
        });
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        requestAnimationFrame(() => notification.classList.add('show'));

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }

    function normalizeVoiceText(text) {
        return String(text || '')
            .toLowerCase()
            .replace(/ё/g, 'е')
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function findSongByVoiceQuery(query) {
        const normalizedQuery = normalizeVoiceText(query);
        if (!normalizedQuery) return null;

        return allSongs.find(song => {
            const title = normalizeVoiceText(song.title);
            const artist = normalizeVoiceText(song.artist);
            const fileName = normalizeVoiceText(
                decodeURIComponent((song.url || '').split('/').pop() || '').replace(/\.(mp3|wav|ogg|m4a|mov)$/i, '')
            );

            return title.includes(normalizedQuery) ||
                normalizedQuery.includes(title) ||
                artist.includes(normalizedQuery) ||
                fileName.includes(normalizedQuery);
        });
    }

    function playSongFromLibrary(song) {
        if (!song) return;

        playlist = [...allSongs];
        playlistEl.innerHTML = '';
        currentSongIndex = playlist.findIndex(item => item.url === song.url);
        if (currentSongIndex < 0) currentSongIndex = 0;

        generateUserPlaylist();
        loadSong(currentSongIndex);

        if (!isPlaying) {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }

        audioPlayer.play().catch(error => {
            console.error('Ошибка воспроизведения:', error);
            showNotification('Браузер заблокировал автозапуск. Нажмите Play и повторите команду.');
        });
    }

    function handleVoiceCommand(commandText) {
        const command = normalizeVoiceText(commandText);
        if (!command) return;

        if (command.includes('след') || command.includes('next')) {
            nextSong();
            showNotification('Следующий трек');
            return;
        }

        if (command.includes('пред') || command.includes('назад') || command.includes('previous')) {
            prevSong();
            showNotification('Предыдущий трек');
            return;
        }

        if (command.includes('пауза') || command.includes('pause') || command.includes('стоп')) {
            if (isPlaying) togglePlay();
            showNotification('Пауза');
            return;
        }

        if (command.includes('включ') || command.includes('play') || command.includes('играй')) {
            const query = command
                .replace(/^(включи|включить|поставь|поставить|сыграй|играй|play)\s+/i, '')
                .replace(/\b(трек|песню|музыку)\b/gi, '')
                .trim();
            const song = findSongByVoiceQuery(query);

            if (song) {
                playSongFromLibrary(song);
                showNotification(`Включаю: ${song.title}`);
            } else if (playlist.length > 0) {
                if (!isPlaying) togglePlay();
                showNotification('Воспроизведение');
            } else {
                showNotification('Не нашёл трек. Попробуйте назвать его точнее.');
            }
            return;
        }

        const song = findSongByVoiceQuery(command);
        if (song) {
            playSongFromLibrary(song);
            showNotification(`Включаю: ${song.title}`);
            return;
        }

        showNotification('Не понял команду. Попробуйте: «включи Sky», «следующий» или «пауза».');
    }

    function normalizeVoiceText(text) {
        return normalizeText(text);
    }

    const VOICE_COMMANDS = {
        next: ['следующий трек', 'следующий', 'следующая', 'дальше', 'переключи', 'некст', 'некст трек', 'next', 'next track'],
        prev: ['предыдущий трек', 'предыдущий', 'предыдущая', 'назад', 'прошлый', 'прошлая', 'previous', 'prev'],
        pause: ['пауза', 'поставь паузу', 'стоп', 'останови', 'хватит', 'замолчи', 'заткнись', 'закрой рот', 'завали ебало', 'pause', 'stop'],
        play: ['включи', 'включить', 'включи трек', 'включить трек', 'вруби', 'врубай', 'поставь', 'поставить', 'поставь трек', 'поставить трек', 'поставь песню', 'поставить песню', 'запусти', 'запустить', 'запусти трек', 'запустить трек', 'сыграй', 'играй', 'продолжи', 'play'],
        shuffle: ['перемешай', 'перемешай треки', 'перемешать', 'шафл', 'shuffle'],
        volumeUp: ['прибавь', 'прибавь громкость', 'сделай громче', 'громче', 'увеличь громкость', 'громкость выше', 'volume up', 'louder'],
        volumeDown: ['убавь', 'убавь громкость', 'сделай тише', 'тише', 'уменьши громкость', 'громкость ниже', 'volume down', 'quieter']
    };

    const VOICE_FILLER_WORDS = [
        'трек',
        'песню',
        'песня',
        'музыку',
        'музыка',
        'композицию',
        'пожалуйста',
        'давай'
    ];

    function hasVoicePhrase(command, phrases) {
        return phrases.some(phrase => {
            const normalizedPhrase = normalizeVoiceText(phrase);
            return command === normalizedPhrase || command.includes(normalizedPhrase);
        });
    }

    function stripVoiceCommand(command, phrases) {
        let query = ` ${command} `;

        phrases
            .map(normalizeVoiceText)
            .sort((first, second) => second.length - first.length)
            .forEach(phrase => {
                query = query.replace(` ${phrase} `, ' ');
            });

        VOICE_FILLER_WORDS.forEach(word => {
            query = query.replace(new RegExp(`\\b${normalizeVoiceText(word)}\\b`, 'g'), ' ');
        });

        return query.replace(/\s+/g, ' ').trim();
    }

    function findSongByVoiceQuery(query) {
        const bestMatch = findBestSongMatch(query);
        return bestMatch && bestMatch.score >= 220 ? bestMatch.song : null;
    }

    function playSongFromLibrary(song) {
        if (!song) return;

        addSongToPlaylistStart(song);

        if (!isPlaying) {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }

        audioPlayer.play().catch(error => {
            console.error('Ошибка воспроизведения:', error);
            showNotification('Браузер заблокировал автозапуск. Нажми Play и повтори команду.');
        });
    }

    function playArtistFromLibrary(artist) {
        if (!artist) return;

        addArtistSongsToPlaylistStart(artist);

        if (!isPlaying) {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }

        audioPlayer.play().catch(error => {
            console.error('Ошибка воспроизведения:', error);
            showNotification('Браузер заблокировал автозапуск. Нажми Play и повтори команду.');
        });
    }

    function handleVoiceCommand(commandText) {
        const command = normalizeVoiceText(commandText);
        if (!command) return;

        const isVolumeUpCommand = ['прибавь', 'громче', 'увеличь', 'volume up', 'louder', 'громкость выше']
            .some(phrase => command.includes(phrase));
        const isVolumeDownCommand = ['убавь', 'тише', 'уменьши', 'volume down', 'quieter', 'громкость ниже']
            .some(phrase => command.includes(phrase));

        if (isVolumeUpCommand) {
            changeVolumeByVoice(0.1);
            return;
        }

        if (isVolumeDownCommand) {
            changeVolumeByVoice(-0.1);
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.shuffle)) {
            shufflePlaylist();
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.next)) {
            nextSong();
            showNotification('Следующий трек');
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.prev)) {
            prevSong();
            showNotification('Предыдущий трек');
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.volumeUp)) {
            changeVolumeByVoice(0.1);
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.volumeDown)) {
            changeVolumeByVoice(-0.1);
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.play)) {
            const query = stripVoiceCommand(command, VOICE_COMMANDS.play);
            const artistMatch = query ? findBestArtistMatch(query) : null;
            const song = query ? findSongByVoiceQuery(query) : null;

            if (artistMatch && artistMatch.score >= 650) {
                playArtistFromLibrary(artistMatch.artist);
                showNotification(`Включаю артиста: ${artistMatch.artist.name}`);
            } else if (song) {
                playSongFromLibrary(song);
                showNotification(`Включаю: ${song.title}`);
            } else if (playlist.length > 0) {
                if (!isPlaying) togglePlay();
                showNotification('Воспроизведение');
            } else {
                showNotification('Не нашел трек. Попробуй назвать его точнее.');
            }
            return;
        }

        if (hasVoicePhrase(command, VOICE_COMMANDS.pause)) {
            if (isPlaying) togglePlay();
            showNotification('Пауза');
            return;
        }

        const artistMatch = findBestArtistMatch(command);
        if (artistMatch && artistMatch.score >= 650) {
            playArtistFromLibrary(artistMatch.artist);
            showNotification(`Включаю артиста: ${artistMatch.artist.name}`);
            return;
        }

        const song = findSongByVoiceQuery(command);
        if (song) {
            playSongFromLibrary(song);
            showNotification(`Включаю: ${song.title}`);
            return;
        }

        showNotification('Не понял команду. Попробуй: "включи Sky", "следующий" или "пауза".');
    }

    function updateVoiceRoutingNote(message, isWarning = false) {
        if (!voiceRoutingNote) return;

        voiceRoutingNote.textContent = message;
        voiceRoutingNote.classList.toggle('warning', isWarning);
    }

    function isBluetoothOutputDevice(device) {
        return device.kind === 'audiooutput' && /bluetooth|bt|headset|науш|колонк|гарнитур/i.test(device.label || '');
    }

    async function initBluetoothAudioOutput() {
        const defaultMessage = 'Bluetooth используется только для вывода музыки. Команды говорите в микрофон телефона.';
        updateVoiceRoutingNote(defaultMessage);

        if (!audioPlayer || typeof audioPlayer.setSinkId !== 'function') {
            updateVoiceRoutingNote(`${defaultMessage} Если звук пошел не в Bluetooth, выберите Bluetooth как устройство вывода в настройках телефона.`, true);
            return;
        }

        if (!navigator.mediaDevices || typeof navigator.mediaDevices.enumerateDevices !== 'function') {
            updateVoiceRoutingNote(`${defaultMessage} Браузер не дал список аудиоустройств.`, true);
            return;
        }

        try {
            let devices = await navigator.mediaDevices.enumerateDevices();
            let bluetoothOutput = devices.find(isBluetoothOutputDevice);

            if (!bluetoothOutput) {
                updateVoiceRoutingNote('Bluetooth-выход не найден. Подключите Bluetooth и выберите его для звука; команды говорите в микрофон телефона.', true);
                return;
            }

            await audioPlayer.setSinkId(bluetoothOutput.deviceId);
            updateVoiceRoutingNote(`Музыка выводится через Bluetooth: ${bluetoothOutput.label}. Команды слушает микрофон телефона.`);
        } catch (error) {
            console.warn('Не удалось настроить Bluetooth-вывод:', error);
            updateVoiceRoutingNote('Не удалось автоматически выбрать Bluetooth-вывод. Выберите Bluetooth в настройках телефона, команды говорите в микрофон телефона.', true);
        }
    }

    function initVoiceControl() {
        if (!voiceControlBtn || !voiceControlText) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            voiceControlBtn.disabled = true;
            voiceControlText.textContent = 'Помощник недоступен';
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'ru-RU';
        recognition.continuous = true;
        recognition.interimResults = true;

        let shouldKeepListening = false;
        let isRecognitionRunning = false;
        let restartTimer = null;

        function updateVoiceButton(active, text) {
            voiceControlBtn.classList.toggle('active', active);
            voiceControlBtn.setAttribute('aria-pressed', String(active));
            voiceControlText.textContent = text;
        }

        function stopListening(showMessage = true) {
            shouldKeepListening = false;
            clearTimeout(restartTimer);
            updateVoiceButton(false, 'Включить помощника');

            if (isRecognitionRunning) {
                recognition.stop();
            }

            if (showMessage) {
                showNotification('Голосовое управление выключено.');
            }
        }

        function startListening(showMessage = false) {
            if (!shouldKeepListening || isRecognitionRunning) {
                return;
            }

            try {
                recognition.start();
                updateVoiceButton(true, 'Запуск помощника...');

                if (showMessage) {
                    showNotification('Разрешите микрофон, если браузер спросит. Помощник запускается...');
                }
            } catch (error) {
                if (error && error.name === 'InvalidStateError') {
                    return;
                }

                console.error('Не удалось запустить голосовое управление:', error);
                stopListening(false);
                showNotification('Не удалось запустить помощника. Попробуйте нажать кнопку ещё раз.');
            }
        }

        voiceControlBtn.addEventListener('click', () => {
            if (shouldKeepListening || isRecognitionRunning) {
                stopListening();
                return;
            }

            shouldKeepListening = true;
            startListening(true);
        });

        recognition.onstart = () => {
            isRecognitionRunning = true;
            updateVoiceButton(true, 'Помощник слушает');
        };

        recognition.onresult = event => {
            let transcript = '';
            let finalTranscript = '';

            for (let index = event.resultIndex; index < event.results.length; index++) {
                const result = event.results[index];
                transcript += result[0].transcript;

                if (result.isFinal) {
                    finalTranscript += result[0].transcript;
                }
            }

            if (transcript.trim()) {
                updateVoiceButton(true, `Слышу: ${transcript.trim()}`);
            }

            if (finalTranscript.trim()) {
                handleVoiceCommand(finalTranscript.trim());
            }
        };

        recognition.onerror = event => {
            if (event.error === 'not-allowed') {
                shouldKeepListening = false;
                updateVoiceButton(false, 'Разрешите микрофон');
                showNotification('Разрешите доступ к микрофону в браузере.');
                return;
            }

            if (event.error === 'audio-capture') {
                shouldKeepListening = false;
                updateVoiceButton(false, 'Микрофон не найден');
                showNotification('Микрофон не найден или занят другим приложением.');
                return;
            }

            if (event.error === 'no-speech') {
                updateVoiceButton(true, 'Помощник слушает');
            } else if (event.error !== 'no-speech') {
                console.warn('Ошибка голосового управления:', event.error);
            }
        };

        recognition.onend = () => {
            isRecognitionRunning = false;

            if (!shouldKeepListening) {
                updateVoiceButton(false, 'Включить помощника');
                return;
            }

            updateVoiceButton(true, 'Помощник слушает');
            clearTimeout(restartTimer);
            restartTimer = setTimeout(() => startListening(false), 400);
        };
    }

    // Инициализация
    function init() {
        initServiceWorker();
        initVisualizer();
        generatePlaylists();
        generateArtistsList();
        generatePopularPlaylist();
        generateUserPlaylist();
        initBluetoothAudioOutput();
        initVoiceControl();
        initSearch();
        updateDownloadButtons();

        // Добавляем обработчик для кнопки play/pause
        playPauseBtn.addEventListener('click', togglePlay);

        // Обработчики событий
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        shuffleBtn?.addEventListener('click', shufflePlaylist);
        volumeSlider.addEventListener('input', setVolume);
        progressContainer.addEventListener('click', updateProgress);
        audioPlayer.addEventListener('timeupdate', updateTime);
        audioPlayer.addEventListener('ended', nextSong);

        // Загрузка первой песни при наличии
        if (playlist.length > 0) {
            loadSong(currentSongIndex);
        }
    }

    init();
});
