document.addEventListener('DOMContentLoaded', function () {
            // Массив всех треков; каждый трек распределён по языку и исполнителю.
            const allSongs = [
                {
                                "id": 1,
                                "title": "2000",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/2000.mp3",
                                "language": "en"
                },
                {
                                "id": 2,
                                "title": "24song",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/24song.mp3",
                                "language": "en"
                },
                {
                                "id": 3,
                                "title": "3500",
                                "artist": "Travis Scott, Future, 2 Chainz",
                                "duration": "--:--",
                                "url": "music/3500.mp3",
                                "language": "en"
                },
                {
                                "id": 4,
                                "title": "4 Raws",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/4 Raws.mp3",
                                "language": "ru"
                },
                {
                                "id": 5,
                                "title": "4X4",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/4X4.mp3",
                                "language": "en"
                },
                {
                                "id": 6,
                                "title": "5% TNT",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/5% TNT.mp3",
                                "language": "en"
                },
                {
                                "id": 7,
                                "title": "Trunks",
                                "artist": "A$AP Rocky",
                                "duration": "--:--",
                                "url": "music/A$AP Rocky - Trunks.mp3",
                                "language": "en"
                },
                {
                                "id": 8,
                                "title": "abu_dhabi_vabu",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/abu_dhabi_vabu.mp3",
                                "language": "ru"
                },
                {
                                "id": 9,
                                "title": "Инопланетянин",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/alien.mp3",
                                "language": "ru"
                },
                {
                                "id": 10,
                                "title": "Ameli",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/ameli.mp3",
                                "language": "ru"
                },
                {
                                "id": 11,
                                "title": "ARISTOCRAT",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/ARISTOCRAT.mp3",
                                "language": "ru"
                },
                {
                                "id": 12,
                                "title": "bebebe",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/bebebe.mp3",
                                "language": "ru"
                },
                {
                                "id": 13,
                                "title": "GO AGAIN (feat. Superheaven)",
                                "artist": "BNYX®, Yeat, Superheaven",
                                "duration": "--:--",
                                "url": "music/BNYX®, Yeat, Superheaven - GO AGAIN (feat. Superheaven).mp3",
                                "language": "en"
                },
                {
                                "id": 14,
                                "title": "FEVER",
                                "artist": "BUCKSHOT, fakemink",
                                "duration": "--:--",
                                "url": "music/BUCKSHOT feat. fakemink - FEVER.mp3",
                                "language": "en"
                },
                {
                                "id": 15,
                                "title": "butterfly effect",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/butterfly effect.mp3",
                                "language": "en"
                },
                {
                                "id": 16,
                                "title": "Bystro",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/bystro.mp3",
                                "language": "ru"
                },
                {
                                "id": 17,
                                "title": "Cadillac",
                                "artist": "Morgenshtern, Элджей",
                                "duration": "--:--",
                                "url": "music/Cadillac.mp3",
                                "language": "ru"
                },
                {
                                "id": 18,
                                "title": "CARNIVAL",
                                "artist": "Kanye West, Ty Dolla $ign, Rich The Kid, Playboi Carti",
                                "duration": "--:--",
                                "url": "music/carnival.mp3",
                                "language": "en"
                },
                {
                                "id": 19,
                                "title": "champain",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/champain.mp3",
                                "language": "en"
                },
                {
                                "id": 20,
                                "title": "chernyy bumer",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/chernyy bumer.mp3",
                                "language": "ru"
                },
                {
                                "id": 21,
                                "title": "chetyre ukrainki",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/chetyre ukrainki.mp3",
                                "language": "ru"
                },
                {
                                "id": 22,
                                "title": "CHILL",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/CHILL.mp3",
                                "language": "ru"
                },
                {
                                "id": 23,
                                "title": "COCAINE NOSE (Extended Intro)",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/COCAINE NOSE (Extended Intro).mp3",
                                "language": "en"
                },
                {
                                "id": 24,
                                "title": "СОК",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/COK.mp3",
                                "language": "ru"
                },
                {
                                "id": 25,
                                "title": "crank master",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/crank master.mp3",
                                "language": "en"
                },
                {
                                "id": 26,
                                "title": "crash",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/crash.mp3",
                                "language": "en"
                },
                {
                                "id": 27,
                                "title": "Cristal",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/cristal.mp3",
                                "language": "ru"
                },
                {
                                "id": 28,
                                "title": "Cristal & МОЁТ",
                                "artist": "Morgenshtern, Элджей",
                                "duration": "--:--",
                                "url": "music/cristal_.mp3",
                                "language": "ru"
                },
                {
                                "id": 29,
                                "title": "Cristal",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/cristal_mayot.mp3",
                                "language": "ru"
                },
                {
                                "id": 30,
                                "title": "dark thought",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/dark thought.mp3",
                                "language": "en"
                },
                {
                                "id": 31,
                                "title": "SYRUP SIPPIN'",
                                "artist": "Destroy Lonely",
                                "duration": "--:--",
                                "url": "music/Destroy Lonely - SYRUP SIPPIN'.mp3",
                                "language": "en"
                },
                {
                                "id": 32,
                                "title": "DINERO",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/DINERO.mp3",
                                "language": "ru"
                },
                {
                                "id": 33,
                                "title": "do it all",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/do it all.mp3",
                                "language": "en"
                },
                {
                                "id": 34,
                                "title": "dom",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/dom.mp3",
                                "language": "ru"
                },
                {
                                "id": 35,
                                "title": "KRYPTONITE",
                                "artist": "Don Toliver",
                                "duration": "--:--",
                                "url": "music/Don Toliver - KRYPTONITE.mp3",
                                "language": "en"
                },
                {
                                "id": 36,
                                "title": "DREAM GARDEN",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/DREAM GARDEN.mp3",
                                "language": "ru"
                },
                {
                                "id": 37,
                                "title": "Drugoy",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/drugoy.mp3",
                                "language": "ru"
                },
                {
                                "id": 38,
                                "title": "Dulo",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/dulo.mp3",
                                "language": "ru"
                },
                {
                                "id": 39,
                                "title": "el problema",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/el problema.mp3",
                                "language": "en"
                },
                {
                                "id": 40,
                                "title": "Century",
                                "artist": "EsDeeKid",
                                "duration": "--:--",
                                "url": "music/EsDeeKid - Century.mp3",
                                "language": "en"
                },
                {
                                "id": 41,
                                "title": "EVIL JORDAN",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/evil jordan.mp3",
                                "language": "en"
                },
                {
                                "id": 42,
                                "title": "FE!N",
                                "artist": "Travis Scott, Playboi Carti",
                                "duration": "--:--",
                                "url": "music/fein.mp3",
                                "language": "en"
                },
                {
                                "id": 43,
                                "title": "Fell In Luv",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/fell in love.mp3",
                                "language": "en"
                },
                {
                                "id": 44,
                                "title": "Flashing Lights",
                                "artist": "Kanye West, Dwele",
                                "duration": "--:--",
                                "url": "music/Flashing Lights.mp3",
                                "language": "en"
                },
                {
                                "id": 45,
                                "title": "fomdj",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/fomdj.mp3",
                                "language": "en"
                },
                {
                                "id": 46,
                                "title": "FRANCHISE",
                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                "duration": "--:--",
                                "url": "music/FRANCHISE.mov",
                                "language": "en"
                },
                {
                                "id": 47,
                                "title": "FRANCHISE",
                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                "duration": "--:--",
                                "url": "music/franchise.mp3",
                                "language": "en"
                },
                {
                                "id": 48,
                                "title": "FRANCHISE",
                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                "duration": "--:--",
                                "url": "music/franchise2.mp3",
                                "language": "en"
                },
                {
                                "id": 49,
                                "title": "Fuk Sumn",
                                "artist": "Kanye West, Ty Dolla $ign, Playboi Carti, Travis Scott",
                                "duration": "--:--",
                                "url": "music/fuk sumn.mp3",
                                "language": "en"
                },
                {
                                "id": 50,
                                "title": "LIL DEMON",
                                "artist": "Future",
                                "duration": "--:--",
                                "url": "music/Future - LIL DEMON.mp3",
                                "language": "en"
                },
                {
                                "id": 51,
                                "title": "go crazy",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/go crazy.mp3",
                                "language": "en"
                },
                {
                                "id": 52,
                                "title": "Go Off",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/Go Off.mp3",
                                "language": "en"
                },
                {
                                "id": 53,
                                "title": "goosebumps",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/Goosebumps.mp3",
                                "language": "en"
                },
                {
                                "id": 54,
                                "title": "gta",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/gta.mp3",
                                "language": "en"
                },
                {
                                "id": 55,
                                "title": "Head Shot ",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Head Shot .mp3",
                                "language": "ru"
                },
                {
                                "id": 56,
                                "title": "HIGHEST IN THE ROOM",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/HIGHEST IN THE ROOM.mp3",
                                "language": "en"
                },
                {
                                "id": 57,
                                "title": "Homecoming",
                                "artist": "Kanye West, Chris Martin",
                                "duration": "--:--",
                                "url": "music/homecoming.mp3",
                                "language": "en"
                },
                {
                                "id": 58,
                                "title": "AddXcts (1)",
                                "artist": "Homixide Gang",
                                "duration": "--:--",
                                "url": "music/Homixide Gang - AddXcts (1).mp3",
                                "language": "en"
                },
                {
                                "id": 59,
                                "title": "hyaena",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/hyaena.mp3",
                                "language": "en"
                },
                {
                                "id": 60,
                                "title": "Travis Scott - No Sleep Ft. Playboi Carti",
                                "artist": "I am music",
                                "duration": "--:--",
                                "url": "music/I am music - Travis Scott - No Sleep Ft. Playboi Carti.mp3",
                                "language": "en"
                },
                {
                                "id": 61,
                                "title": "ICE",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/ice.mp3",
                                "language": "ru"
                },
                {
                                "id": 62,
                                "title": "4TH DIMENSION",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - 4TH DIMENSION.mp3",
                                "language": "en"
                },
                {
                                "id": 63,
                                "title": "DON'T KNOW!",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - DON'T KNOW!.mp3",
                                "language": "en"
                },
                {
                                "id": 64,
                                "title": "HOMICIDE",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - HOMICIDE.mp3",
                                "language": "en"
                },
                {
                                "id": 65,
                                "title": "HOW YOU FEEL_",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - HOW YOU FEEL_.mp3",
                                "language": "en"
                },
                {
                                "id": 66,
                                "title": "POWER",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - POWER.mp3",
                                "language": "en"
                },
                {
                                "id": 67,
                                "title": "PURPOSE",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - PURPOSE.mp3",
                                "language": "en"
                },
                {
                                "id": 68,
                                "title": "THE KARDASHIANS",
                                "artist": "IMG",
                                "duration": "--:--",
                                "url": "music/IMG - THE KARDASHIANS.mp3",
                                "language": "en"
                },
                {
                                "id": 69,
                                "title": "JACKBOYS",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/JACKBOYS.mp3",
                                "language": "en"
                },
                {
                                "id": 70,
                                "title": "Fighting My Demons",
                                "artist": "Ken Carson",
                                "duration": "--:--",
                                "url": "music/Ken Carson - Fighting My Demons.mp3",
                                "language": "en"
                },
                {
                                "id": 71,
                                "title": "KICKED OUT",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/KICKED OUT.mp3",
                                "language": "en"
                },
                {
                                "id": 72,
                                "title": "Leck",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/leck.mp3",
                                "language": "ru"
                },
                {
                                "id": 73,
                                "title": "Ligala sosa",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Ligala sosa.mp3",
                                "language": "ru"
                },
                {
                                "id": 74,
                                "title": "Stuff (featuring Travis Scott)",
                                "artist": "Lil Baby",
                                "duration": "--:--",
                                "url": "music/Lil Baby - Stuff (featuring Travis Scott).mp3",
                                "language": "en"
                },
                {
                                "id": 75,
                                "title": "Boys Don’t Cry",
                                "artist": "Lil Tecca",
                                "duration": "--:--",
                                "url": "music/Lil Tecca - Boys Don’t Cry.mp3",
                                "language": "en"
                },
                {
                                "id": 76,
                                "title": "Break The Bank",
                                "artist": "Lil Uzi Vert & Playboi Carti",
                                "duration": "--:--",
                                "url": "music/Lil Uzi Vert & Playboi Carti - Break The Bank.mp3",
                                "language": "en"
                },
                {
                                "id": 77,
                                "title": "Location",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/location.mp3",
                                "language": "en"
                },
                {
                                "id": 78,
                                "title": "lollipop",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/lollipop.mp3",
                                "language": "en"
                },
                {
                                "id": 79,
                                "title": "Long Time",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/long time.mp3",
                                "language": "en"
                },
                {
                                "id": 80,
                                "title": "LV Sandals",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/LV Sandals.mp3",
                                "language": "en"
                },
                {
                                "id": 81,
                                "title": "Trance",
                                "artist": "Metro Boomin, Travis Scott & Young Thug",
                                "duration": "--:--",
                                "url": "music/Metro Boomin, Travis Scott & Young Thug - Trance.mp3",
                                "language": "en"
                },
                {
                                "id": 82,
                                "title": "Magnolia",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/mognolia.mp3",
                                "language": "en"
                },
                {
                                "id": 83,
                                "title": "navalnyy lyokha",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/navalnyy lyokha.mp3",
                                "language": "ru"
                },
                {
                                "id": 84,
                                "title": "Nightcrawler",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/Nightcrawler.mp3",
                                "language": "en"
                },
                {
                                "id": 85,
                                "title": "no face",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/no face.mp3",
                                "language": "en"
                },
                {
                                "id": 86,
                                "title": "Nominalo",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/nominalo.mp3",
                                "language": "ru"
                },
                {
                                "id": 87,
                                "title": "novaya volna",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/novaya volna.mp3",
                                "language": "ru"
                },
                {
                                "id": 88,
                                "title": "novyy meren",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/novyy meren.mp3",
                                "language": "ru"
                },
                {
                                "id": 89,
                                "title": "ona-ono",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/ona-ono.mp3",
                                "language": "ru"
                },
                {
                                "id": 90,
                                "title": "OUT WEST",
                                "artist": "JACKBOYS, Travis Scott, Young Thug",
                                "duration": "--:--",
                                "url": "music/out west.mp3",
                                "language": "en"
                },
                {
                                "id": 91,
                                "title": "Over",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/over.mp3",
                                "language": "en"
                },
                {
                                "id": 92,
                                "title": "pablo",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/pablo.mp3",
                                "language": "ru"
                },
                {
                                "id": 93,
                                "title": "Papin Tank",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/papin tank.mp3",
                                "language": "ru"
                },
                {
                                "id": 94,
                                "title": "Phantom",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/Phantom.mp3",
                                "language": "en"
                },
                {
                                "id": 95,
                                "title": "PHILLY",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/PHILLY.mp3",
                                "language": "en"
                },
                {
                                "id": 96,
                                "title": "photo",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/photo.mp3",
                                "language": "en"
                },
                {
                                "id": 97,
                                "title": "WASSUP_RATCHET ft. Lil Baby",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/Playboi Carti - WASSUP_RATCHET ft. Lil Baby.mp3",
                                "language": "en"
                },
                {
                                "id": 98,
                                "title": "Manage",
                                "artist": "Playboi Carti, Lil Uzi Vert",
                                "duration": "--:--",
                                "url": "music/Playboi Carti, Lil Uzi Vert - Manage.mp3",
                                "language": "en"
                },
                {
                                "id": 99,
                                "title": "Pochemu",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/pochemu.mp3",
                                "language": "ru"
                },
                {
                                "id": 100,
                                "title": "Poke It Out",
                                "artist": "Playboi Carti, Nicki Minaj",
                                "duration": "--:--",
                                "url": "music/Poke it out.mp3",
                                "language": "en"
                },
                {
                                "id": 101,
                                "title": "pososi",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/pososi.mp3",
                                "language": "ru"
                },
                {
                                "id": 102,
                                "title": "Poydet",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/poydet.mp3",
                                "language": "ru"
                },
                {
                                "id": 103,
                                "title": "PROBLEM CHILD",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/PROBLEM CHILD.mp3",
                                "language": "en"
                },
                {
                                "id": 104,
                                "title": "Rampage Song",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/Rampage Song.mp3",
                                "language": "en"
                },
                {
                                "id": 105,
                                "title": "ratatatata",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/ratatatata.mp3",
                                "language": "ru"
                },
                {
                                "id": 106,
                                "title": "ratherlife",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/ratherlife.mp3",
                                "language": "en"
                },
                {
                                "id": 107,
                                "title": "retro rev",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/retro rev.mp3",
                                "language": "ru"
                },
                {
                                "id": 108,
                                "title": "AINT NOTHING",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - AINT NOTHING.mp3",
                                "language": "en"
                },
                {
                                "id": 109,
                                "title": "Brick Brick",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - Brick Brick.mp3",
                                "language": "en"
                },
                {
                                "id": 110,
                                "title": "Dirty Money",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - Dirty Money.mp3",
                                "language": "en"
                },
                {
                                "id": 111,
                                "title": "Flex N Finesse",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - Flex N Finesse.mp3",
                                "language": "en"
                },
                {
                                "id": 112,
                                "title": "I WANT EVERYTHING",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - I WANT EVERYTHING.mp3",
                                "language": "en"
                },
                {
                                "id": 113,
                                "title": "ILLUMINATI",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - ILLUMINATI.mp3",
                                "language": "en"
                },
                {
                                "id": 114,
                                "title": "In & Out",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - In & Out.mp3",
                                "language": "en"
                },
                {
                                "id": 115,
                                "title": "ONE CALL",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - ONE CALL.mp3",
                                "language": "en"
                },
                {
                                "id": 116,
                                "title": "OUTTA THERE",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - OUTTA THERE.mp3",
                                "language": "en"
                },
                {
                                "id": 117,
                                "title": "Paranoid",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - Paranoid.mp3",
                                "language": "en"
                },
                {
                                "id": 118,
                                "title": "SAME OLD ME",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - SAME OLD ME.mp3",
                                "language": "en"
                },
                {
                                "id": 119,
                                "title": "So Long",
                                "artist": "Rich Amiri",
                                "duration": "--:--",
                                "url": "music/Rich Amiri - So Long.mp3",
                                "language": "en"
                },
                {
                                "id": 120,
                                "title": "Riley",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/Riley.mp3",
                                "language": "en"
                },
                {
                                "id": 121,
                                "title": "san laran",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/san laran.mp3",
                                "language": "ru"
                },
                {
                                "id": 122,
                                "title": "Sauce!",
                                "artist": "XXXTENTACION",
                                "duration": "--:--",
                                "url": "music/Sauce!.mp3",
                                "language": "en"
                },
                {
                                "id": 123,
                                "title": "sdp interlude (OG)",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/sdp interlude (OG).mp3",
                                "language": "en"
                },
                {
                                "id": 124,
                                "title": "SHOW",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/show.mp3",
                                "language": "ru"
                },
                {
                                "id": 125,
                                "title": "shyne",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/shyne.mp3",
                                "language": "en"
                },
                {
                                "id": 126,
                                "title": "SICKO MODE",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/SICKO MODE.mp3",
                                "language": "en"
                },
                {
                                "id": 127,
                                "title": "Sky",
                                "artist": "Playboi Carti",
                                "duration": "--:--",
                                "url": "music/sky.mp3",
                                "language": "en"
                },
                {
                                "id": 128,
                                "title": "SOME MORE",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/SOME MORE.mp3",
                                "language": "en"
                },
                {
                                "id": 129,
                                "title": "SOULCALIBUR LUV",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/SOULCALIBUR LUV.mp3",
                                "language": "ru"
                },
                {
                                "id": 130,
                                "title": "SS",
                                "artist": "Ken Carson",
                                "duration": "--:--",
                                "url": "music/ss.mp3",
                                "language": "en"
                },
                {
                                "id": 131,
                                "title": "STARGAZING",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/STARGAZING.mp3",
                                "language": "en"
                },
                {
                                "id": 132,
                                "title": "Telescope",
                                "artist": "TWXN",
                                "duration": "--:--",
                                "url": "music/telescope.mp3",
                                "language": "en"
                },
                {
                                "id": 133,
                                "title": "THE SCOTTS",
                                "artist": "THE SCOTTS, Travis Scott, Kid Cudi",
                                "duration": "--:--",
                                "url": "music/The Scotts.mp3",
                                "language": "en"
                },
                {
                                "id": 134,
                                "title": "Toosie Slide",
                                "artist": "Drake",
                                "duration": "--:--",
                                "url": "music/Toosie slide.mp3",
                                "language": "en"
                },
                {
                                "id": 135,
                                "title": "ESCAPE PLAN",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/Travi$ Scott - ESCAPE PLAN.mp3",
                                "language": "en"
                },
                {
                                "id": 136,
                                "title": "CHAMPAIN & VACAY",
                                "artist": "Travis Scott & Don Toliver",
                                "duration": "--:--",
                                "url": "music/Travis Scott & Don Toliver - CHAMPAIN & VACAY.mp3",
                                "language": "en"
                },
                {
                                "id": 137,
                                "title": "OUTSIDE",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/Travis Scott - OUTSIDE.mp3",
                                "language": "en"
                },
                {
                                "id": 138,
                                "title": "THANK GOD",
                                "artist": "Travis Scott",
                                "duration": "--:--",
                                "url": "music/Travis Scott - THANK GOD.mp3",
                                "language": "en"
                },
                {
                                "id": 139,
                                "title": "Type Shit",
                                "artist": "Future, Metro Boomin, Travis Scott, Playboi Carti",
                                "duration": "--:--",
                                "url": "music/Type Shit.mp3",
                                "language": "en"
                },
                {
                                "id": 140,
                                "title": "UFO LUV",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/UFO LUV.mp3",
                                "language": "ru"
                },
                {
                                "id": 141,
                                "title": "Veselaya Pesnya",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/veselaya pesnya.mp3",
                                "language": "ru"
                },
                {
                                "id": 142,
                                "title": "ON MY OWN",
                                "artist": "void, BABY BOI",
                                "duration": "--:--",
                                "url": "music/void, BABY BOI - ON MY OWN.mp3",
                                "language": "en"
                },
                {
                                "id": 143,
                                "title": "FOR RICHIE",
                                "artist": "void, Druskhi",
                                "duration": "--:--",
                                "url": "music/void, Druskhi - FOR RICHIE.mp3",
                                "language": "en"
                },
                {
                                "id": 144,
                                "title": "OBSESSED",
                                "artist": "void, ech0",
                                "duration": "--:--",
                                "url": "music/void, ech0 - OBSESSED.mp3",
                                "language": "en"
                },
                {
                                "id": 145,
                                "title": "Blast Off",
                                "artist": "Void, Repair Lonely",
                                "duration": "--:--",
                                "url": "music/Void, Repair Lonely - Blast Off.mp3",
                                "language": "en"
                },
                {
                                "id": 146,
                                "title": "Wassup",
                                "artist": "Lil Uzi Vert, Future",
                                "duration": "--:--",
                                "url": "music/Wassup.mp3",
                                "language": "en"
                },
                {
                                "id": 147,
                                "title": "WATAFUK",
                                "artist": "Morgenshtern",
                                "duration": "--:--",
                                "url": "music/WATAFUK.mp3",
                                "language": "ru"
                },
                {
                                "id": 148,
                                "title": "Watch This",
                                "artist": "Lil Uzi Vert",
                                "duration": "--:--",
                                "url": "music/watch this.mp3",
                                "language": "en"
                },
                {
                                "id": 149,
                                "title": "what u need",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/what u need.mp3",
                                "language": "en"
                },
                {
                                "id": 150,
                                "title": "ya kogda-nibud uydu",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/ya kogda-nibud uydu.mp3",
                                "language": "en"
                },
                {
                                "id": 151,
                                "title": "BË QUIET (Feat. Kodak Black)",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - BË QUIET (Feat. Kodak Black).mp3",
                                "language": "en"
                },
                {
                                "id": 152,
                                "title": "Flawlëss (Feat. Lil Uzi Vert)",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - Flawlëss (Feat. Lil Uzi Vert).mp3",
                                "language": "en"
                },
                {
                                "id": 153,
                                "title": "FLYTROOP",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - FLYTROOP.mp3",
                                "language": "en"
                },
                {
                                "id": 154,
                                "title": "GEEK TIMË",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - GEEK TIMË.mp3",
                                "language": "en"
                },
                {
                                "id": 155,
                                "title": "My wrist (feat. Young Thug)",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - My wrist (feat. Young Thug).mp3",
                                "language": "en"
                },
                {
                                "id": 156,
                                "title": "No morë talk",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - No morë talk.mp3",
                                "language": "en"
                },
                {
                                "id": 157,
                                "title": "ORCHESTRATË",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - ORCHESTRATË.mp3",
                                "language": "en"
                },
                {
                                "id": 158,
                                "title": "Tell Më",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - Tell Më.mp3",
                                "language": "en"
                },
                {
                                "id": 159,
                                "title": "U Should Know",
                                "artist": "Yeat",
                                "duration": "--:--",
                                "url": "music/Yeat - U Should Know.mp3",
                                "language": "en"
                },
                {
                                "id": 160,
                                "title": "5BRAZY",
                                "artist": "Yeat feat. Quavo",
                                "duration": "--:--",
                                "url": "music/Yeat feat. Quavo - 5BRAZY.mp3",
                                "language": "en"
                },
                {
                                "id": 161,
                                "title": "Made It On Our Own",
                                "artist": "Yeat, EsDeeKid",
                                "duration": "--:--",
                                "url": "music/Yeat, EsDeeKid - Made It On Our Own.mp3",
                                "language": "en"
                },
                {
                                "id": 162,
                                "title": "Your Turn",
                                "artist": "Разные английские исполнители",
                                "duration": "--:--",
                                "url": "music/Your Turn.mp3",
                                "language": "en"
                },
                {
                                "id": 163,
                                "title": "ZEZE",
                                "artist": "Kodak Black, Travis Scott, Offset",
                                "duration": "--:--",
                                "url": "music/ZEZE.mp3",
                                "language": "en"
                },
                {
                                "id": 164,
                                "title": "ауди",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/ауди.mp3",
                                "language": "ru"
                },
                {
                                "id": 165,
                                "title": "ауф",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/ауф.mp3",
                                "language": "ru"
                },
                {
                                "id": 166,
                                "title": "Бандана",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Бандана.mp3",
                                "language": "ru"
                },
                {
                                "id": 167,
                                "title": "Бассок",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Бассок.mp3",
                                "language": "ru"
                },
                {
                                "id": 168,
                                "title": "блядская натура",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/блядская натура.mp3",
                                "language": "ru"
                },
                {
                                "id": 169,
                                "title": "Валентина",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Валентина.mp3",
                                "language": "ru"
                },
                {
                                "id": 170,
                                "title": "валим",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/валим.mp3",
                                "language": "ru"
                },
                {
                                "id": 171,
                                "title": "Веном",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Веном.mp3",
                                "language": "ru"
                },
                {
                                "id": 172,
                                "title": "Виновата сама",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Виновата сама.mp3",
                                "language": "ru"
                },
                {
                                "id": 173,
                                "title": "Внутри",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/Внутри.mp3",
                                "language": "ru"
                },
                {
                                "id": 174,
                                "title": "Гоблин",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Гоблин.mp3",
                                "language": "ru"
                },
                {
                                "id": 175,
                                "title": "до сих пор",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/до сих пор.mp3",
                                "language": "ru"
                },
                {
                                "id": 176,
                                "title": "киллер",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/киллер.mp3",
                                "language": "ru"
                },
                {
                                "id": 177,
                                "title": "мент",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/мент.mp3",
                                "language": "ru"
                },
                {
                                "id": 178,
                                "title": "моих мыслях",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/моих мыслях.mp3",
                                "language": "ru"
                },
                {
                                "id": 179,
                                "title": "мотылек",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/мотылек.mp3",
                                "language": "ru"
                },
                {
                                "id": 180,
                                "title": "мы пидоры",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/мы пидоры.mp3",
                                "language": "ru"
                },
                {
                                "id": 181,
                                "title": "На грязном",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/На грязном.mp3",
                                "language": "ru"
                },
                {
                                "id": 182,
                                "title": "на память",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/на память.mp3",
                                "language": "ru"
                },
                {
                                "id": 183,
                                "title": "не надо",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/не надо.mp3",
                                "language": "ru"
                },
                {
                                "id": 184,
                                "title": "ночь",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/ночь.mp3",
                                "language": "ru"
                },
                {
                                "id": 185,
                                "title": "Плохая Сука",
                                "artist": "GONE.Fludd",
                                "duration": "--:--",
                                "url": "music/Плохая Сука.mp3",
                                "language": "ru"
                },
                {
                                "id": 186,
                                "title": "Сердце для шалав",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Сердце для шалав.mp3",
                                "language": "ru"
                },
                {
                                "id": 187,
                                "title": "Случайна",
                                "artist": "Разные русские исполнители",
                                "duration": "--:--",
                                "url": "music/Случайна.mp3",
                                "language": "ru"
                },
                {
                                "id": 188,
                                "title": "снег",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/снег.mp3",
                                "language": "ru"
                },
                {
                                "id": 189,
                                "title": "ты",
                                "artist": "MAYOT",
                                "duration": "--:--",
                                "url": "music/ты.mp3",
                                "language": "ru"
                }
];

            // Массив популярных песен
            const popularSongs = allSongs.slice(0, 40);

            // Массив артистов с их треками
            const artists = [
                {
                                "id": 1,
                                "name": "A$AP Rocky",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 7,
                                                                "title": "Trunks",
                                                                "artist": "A$AP Rocky",
                                                                "duration": "--:--",
                                                                "url": "music/A$AP Rocky - Trunks.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 2,
                                "name": "BNYX®, Yeat, Superheaven",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 13,
                                                                "title": "GO AGAIN (feat. Superheaven)",
                                                                "artist": "BNYX®, Yeat, Superheaven",
                                                                "duration": "--:--",
                                                                "url": "music/BNYX®, Yeat, Superheaven - GO AGAIN (feat. Superheaven).mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 3,
                                "name": "BUCKSHOT, fakemink",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 14,
                                                                "title": "FEVER",
                                                                "artist": "BUCKSHOT, fakemink",
                                                                "duration": "--:--",
                                                                "url": "music/BUCKSHOT feat. fakemink - FEVER.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 4,
                                "name": "Destroy Lonely",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 31,
                                                                "title": "SYRUP SIPPIN'",
                                                                "artist": "Destroy Lonely",
                                                                "duration": "--:--",
                                                                "url": "music/Destroy Lonely - SYRUP SIPPIN'.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 5,
                                "name": "Don Toliver",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 35,
                                                                "title": "KRYPTONITE",
                                                                "artist": "Don Toliver",
                                                                "duration": "--:--",
                                                                "url": "music/Don Toliver - KRYPTONITE.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 6,
                                "name": "Drake",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 134,
                                                                "title": "Toosie Slide",
                                                                "artist": "Drake",
                                                                "duration": "--:--",
                                                                "url": "music/Toosie slide.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 7,
                                "name": "EsDeeKid",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 40,
                                                                "title": "Century",
                                                                "artist": "EsDeeKid",
                                                                "duration": "--:--",
                                                                "url": "music/EsDeeKid - Century.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 8,
                                "name": "Future",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 50,
                                                                "title": "LIL DEMON",
                                                                "artist": "Future",
                                                                "duration": "--:--",
                                                                "url": "music/Future - LIL DEMON.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 9,
                                "name": "Future, Metro Boomin, Travis Scott, Playboi Carti",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 139,
                                                                "title": "Type Shit",
                                                                "artist": "Future, Metro Boomin, Travis Scott, Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/Type Shit.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 10,
                                "name": "GONE.Fludd",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 9,
                                                                "title": "Инопланетянин",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/alien.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 22,
                                                                "title": "CHILL",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/CHILL.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 24,
                                                                "title": "СОК",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/COK.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 36,
                                                                "title": "DREAM GARDEN",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/DREAM GARDEN.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 129,
                                                                "title": "SOULCALIBUR LUV",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/SOULCALIBUR LUV.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 140,
                                                                "title": "UFO LUV",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/UFO LUV.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 185,
                                                                "title": "Плохая Сука",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/Плохая Сука.mp3",
                                                                "language": "ru"
                                                }
                                ]
                },
                {
                                "id": 11,
                                "name": "Homixide Gang",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 58,
                                                                "title": "AddXcts (1)",
                                                                "artist": "Homixide Gang",
                                                                "duration": "--:--",
                                                                "url": "music/Homixide Gang - AddXcts (1).mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 12,
                                "name": "I am music",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 60,
                                                                "title": "Travis Scott - No Sleep Ft. Playboi Carti",
                                                                "artist": "I am music",
                                                                "duration": "--:--",
                                                                "url": "music/I am music - Travis Scott - No Sleep Ft. Playboi Carti.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 13,
                                "name": "IMG",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 62,
                                                                "title": "4TH DIMENSION",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - 4TH DIMENSION.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 63,
                                                                "title": "DON'T KNOW!",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - DON'T KNOW!.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 64,
                                                                "title": "HOMICIDE",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - HOMICIDE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 65,
                                                                "title": "HOW YOU FEEL_",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - HOW YOU FEEL_.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 66,
                                                                "title": "POWER",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - POWER.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 67,
                                                                "title": "PURPOSE",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - PURPOSE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 68,
                                                                "title": "THE KARDASHIANS",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - THE KARDASHIANS.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 14,
                                "name": "JACKBOYS, Travis Scott, Young Thug",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 90,
                                                                "title": "OUT WEST",
                                                                "artist": "JACKBOYS, Travis Scott, Young Thug",
                                                                "duration": "--:--",
                                                                "url": "music/out west.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 15,
                                "name": "Kanye West, Chris Martin",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 57,
                                                                "title": "Homecoming",
                                                                "artist": "Kanye West, Chris Martin",
                                                                "duration": "--:--",
                                                                "url": "music/homecoming.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 16,
                                "name": "Kanye West, Dwele",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 44,
                                                                "title": "Flashing Lights",
                                                                "artist": "Kanye West, Dwele",
                                                                "duration": "--:--",
                                                                "url": "music/Flashing Lights.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 17,
                                "name": "Kanye West, Ty Dolla $ign, Playboi Carti, Travis Scott",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 49,
                                                                "title": "Fuk Sumn",
                                                                "artist": "Kanye West, Ty Dolla $ign, Playboi Carti, Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/fuk sumn.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 18,
                                "name": "Kanye West, Ty Dolla $ign, Rich The Kid, Playboi Carti",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 18,
                                                                "title": "CARNIVAL",
                                                                "artist": "Kanye West, Ty Dolla $ign, Rich The Kid, Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/carnival.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 19,
                                "name": "Ken Carson",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 70,
                                                                "title": "Fighting My Demons",
                                                                "artist": "Ken Carson",
                                                                "duration": "--:--",
                                                                "url": "music/Ken Carson - Fighting My Demons.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 130,
                                                                "title": "SS",
                                                                "artist": "Ken Carson",
                                                                "duration": "--:--",
                                                                "url": "music/ss.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 20,
                                "name": "Kodak Black, Travis Scott, Offset",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 163,
                                                                "title": "ZEZE",
                                                                "artist": "Kodak Black, Travis Scott, Offset",
                                                                "duration": "--:--",
                                                                "url": "music/ZEZE.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 21,
                                "name": "Lil Baby",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 74,
                                                                "title": "Stuff (featuring Travis Scott)",
                                                                "artist": "Lil Baby",
                                                                "duration": "--:--",
                                                                "url": "music/Lil Baby - Stuff (featuring Travis Scott).mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 22,
                                "name": "Lil Tecca",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 75,
                                                                "title": "Boys Don’t Cry",
                                                                "artist": "Lil Tecca",
                                                                "duration": "--:--",
                                                                "url": "music/Lil Tecca - Boys Don’t Cry.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 23,
                                "name": "Lil Uzi Vert",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 148,
                                                                "title": "Watch This",
                                                                "artist": "Lil Uzi Vert",
                                                                "duration": "--:--",
                                                                "url": "music/watch this.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 24,
                                "name": "Lil Uzi Vert & Playboi Carti",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 76,
                                                                "title": "Break The Bank",
                                                                "artist": "Lil Uzi Vert & Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/Lil Uzi Vert & Playboi Carti - Break The Bank.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 25,
                                "name": "Lil Uzi Vert, Future",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 146,
                                                                "title": "Wassup",
                                                                "artist": "Lil Uzi Vert, Future",
                                                                "duration": "--:--",
                                                                "url": "music/Wassup.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 26,
                                "name": "MAYOT",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 16,
                                                                "title": "Bystro",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/bystro.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 29,
                                                                "title": "Cristal",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/cristal_mayot.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 37,
                                                                "title": "Drugoy",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/drugoy.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 38,
                                                                "title": "Dulo",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/dulo.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 86,
                                                                "title": "Nominalo",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/nominalo.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 93,
                                                                "title": "Papin Tank",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/papin tank.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 99,
                                                                "title": "Pochemu",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/pochemu.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 102,
                                                                "title": "Poydet",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/poydet.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 141,
                                                                "title": "Veselaya Pesnya",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/veselaya pesnya.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 164,
                                                                "title": "ауди",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/ауди.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 173,
                                                                "title": "Внутри",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/Внутри.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 175,
                                                                "title": "до сих пор",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/до сих пор.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 176,
                                                                "title": "киллер",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/киллер.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 178,
                                                                "title": "моих мыслях",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/моих мыслях.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 179,
                                                                "title": "мотылек",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/мотылек.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 181,
                                                                "title": "На грязном",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/На грязном.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 182,
                                                                "title": "на память",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/на память.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 183,
                                                                "title": "не надо",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/не надо.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 184,
                                                                "title": "ночь",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/ночь.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 188,
                                                                "title": "снег",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/снег.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 189,
                                                                "title": "ты",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/ты.mp3",
                                                                "language": "ru"
                                                }
                                ]
                },
                {
                                "id": 27,
                                "name": "Metro Boomin, Travis Scott & Young Thug",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 81,
                                                                "title": "Trance",
                                                                "artist": "Metro Boomin, Travis Scott & Young Thug",
                                                                "duration": "--:--",
                                                                "url": "music/Metro Boomin, Travis Scott & Young Thug - Trance.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 28,
                                "name": "Morgenshtern",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 10,
                                                                "title": "Ameli",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/ameli.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 11,
                                                                "title": "ARISTOCRAT",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/ARISTOCRAT.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 27,
                                                                "title": "Cristal",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/cristal.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 32,
                                                                "title": "DINERO",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/DINERO.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 61,
                                                                "title": "ICE",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/ice.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 72,
                                                                "title": "Leck",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/leck.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 124,
                                                                "title": "SHOW",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/show.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 147,
                                                                "title": "WATAFUK",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/WATAFUK.mp3",
                                                                "language": "ru"
                                                }
                                ]
                },
                {
                                "id": 29,
                                "name": "Morgenshtern, Элджей",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 17,
                                                                "title": "Cadillac",
                                                                "artist": "Morgenshtern, Элджей",
                                                                "duration": "--:--",
                                                                "url": "music/Cadillac.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 28,
                                                                "title": "Cristal & МОЁТ",
                                                                "artist": "Morgenshtern, Элджей",
                                                                "duration": "--:--",
                                                                "url": "music/cristal_.mp3",
                                                                "language": "ru"
                                                }
                                ]
                },
                {
                                "id": 30,
                                "name": "Playboi Carti",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 23,
                                                                "title": "COCAINE NOSE (Extended Intro)",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/COCAINE NOSE (Extended Intro).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 41,
                                                                "title": "EVIL JORDAN",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/evil jordan.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 43,
                                                                "title": "Fell In Luv",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/fell in love.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 77,
                                                                "title": "Location",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/location.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 79,
                                                                "title": "Long Time",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/long time.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 82,
                                                                "title": "Magnolia",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/mognolia.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 91,
                                                                "title": "Over",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/over.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 97,
                                                                "title": "WASSUP_RATCHET ft. Lil Baby",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/Playboi Carti - WASSUP_RATCHET ft. Lil Baby.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 127,
                                                                "title": "Sky",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/sky.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 31,
                                "name": "Playboi Carti, Lil Uzi Vert",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 98,
                                                                "title": "Manage",
                                                                "artist": "Playboi Carti, Lil Uzi Vert",
                                                                "duration": "--:--",
                                                                "url": "music/Playboi Carti, Lil Uzi Vert - Manage.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 32,
                                "name": "Playboi Carti, Nicki Minaj",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 100,
                                                                "title": "Poke It Out",
                                                                "artist": "Playboi Carti, Nicki Minaj",
                                                                "duration": "--:--",
                                                                "url": "music/Poke it out.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 33,
                                "name": "Rich Amiri",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 108,
                                                                "title": "AINT NOTHING",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - AINT NOTHING.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 109,
                                                                "title": "Brick Brick",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Brick Brick.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 110,
                                                                "title": "Dirty Money",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Dirty Money.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 111,
                                                                "title": "Flex N Finesse",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Flex N Finesse.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 112,
                                                                "title": "I WANT EVERYTHING",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - I WANT EVERYTHING.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 113,
                                                                "title": "ILLUMINATI",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - ILLUMINATI.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 114,
                                                                "title": "In & Out",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - In & Out.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 115,
                                                                "title": "ONE CALL",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - ONE CALL.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 116,
                                                                "title": "OUTTA THERE",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - OUTTA THERE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 117,
                                                                "title": "Paranoid",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Paranoid.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 118,
                                                                "title": "SAME OLD ME",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - SAME OLD ME.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 119,
                                                                "title": "So Long",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - So Long.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 34,
                                "name": "THE SCOTTS, Travis Scott, Kid Cudi",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 133,
                                                                "title": "THE SCOTTS",
                                                                "artist": "THE SCOTTS, Travis Scott, Kid Cudi",
                                                                "duration": "--:--",
                                                                "url": "music/The Scotts.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 35,
                                "name": "TWXN",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 132,
                                                                "title": "Telescope",
                                                                "artist": "TWXN",
                                                                "duration": "--:--",
                                                                "url": "music/telescope.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 36,
                                "name": "Travis Scott",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 5,
                                                                "title": "4X4",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/4X4.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 53,
                                                                "title": "goosebumps",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Goosebumps.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 56,
                                                                "title": "HIGHEST IN THE ROOM",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/HIGHEST IN THE ROOM.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 84,
                                                                "title": "Nightcrawler",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Nightcrawler.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 123,
                                                                "title": "sdp interlude (OG)",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/sdp interlude (OG).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 126,
                                                                "title": "SICKO MODE",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/SICKO MODE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 131,
                                                                "title": "STARGAZING",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/STARGAZING.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 135,
                                                                "title": "ESCAPE PLAN",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Travi$ Scott - ESCAPE PLAN.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 137,
                                                                "title": "OUTSIDE",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Travis Scott - OUTSIDE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 138,
                                                                "title": "THANK GOD",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Travis Scott - THANK GOD.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 37,
                                "name": "Travis Scott & Don Toliver",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 136,
                                                                "title": "CHAMPAIN & VACAY",
                                                                "artist": "Travis Scott & Don Toliver",
                                                                "duration": "--:--",
                                                                "url": "music/Travis Scott & Don Toliver - CHAMPAIN & VACAY.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 38,
                                "name": "Travis Scott, Future, 2 Chainz",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 3,
                                                                "title": "3500",
                                                                "artist": "Travis Scott, Future, 2 Chainz",
                                                                "duration": "--:--",
                                                                "url": "music/3500.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 39,
                                "name": "Travis Scott, Playboi Carti",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 42,
                                                                "title": "FE!N",
                                                                "artist": "Travis Scott, Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/fein.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 40,
                                "name": "Travis Scott, Young Thug, M.I.A.",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 46,
                                                                "title": "FRANCHISE",
                                                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                                                "duration": "--:--",
                                                                "url": "music/FRANCHISE.mov",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 47,
                                                                "title": "FRANCHISE",
                                                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                                                "duration": "--:--",
                                                                "url": "music/franchise.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 48,
                                                                "title": "FRANCHISE",
                                                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                                                "duration": "--:--",
                                                                "url": "music/franchise2.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 41,
                                "name": "Void, Repair Lonely",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 145,
                                                                "title": "Blast Off",
                                                                "artist": "Void, Repair Lonely",
                                                                "duration": "--:--",
                                                                "url": "music/Void, Repair Lonely - Blast Off.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 42,
                                "name": "XXXTENTACION",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 122,
                                                                "title": "Sauce!",
                                                                "artist": "XXXTENTACION",
                                                                "duration": "--:--",
                                                                "url": "music/Sauce!.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 43,
                                "name": "Yeat",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 151,
                                                                "title": "BË QUIET (Feat. Kodak Black)",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - BË QUIET (Feat. Kodak Black).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 152,
                                                                "title": "Flawlëss (Feat. Lil Uzi Vert)",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - Flawlëss (Feat. Lil Uzi Vert).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 153,
                                                                "title": "FLYTROOP",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - FLYTROOP.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 154,
                                                                "title": "GEEK TIMË",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - GEEK TIMË.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 155,
                                                                "title": "My wrist (feat. Young Thug)",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - My wrist (feat. Young Thug).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 156,
                                                                "title": "No morë talk",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - No morë talk.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 157,
                                                                "title": "ORCHESTRATË",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - ORCHESTRATË.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 158,
                                                                "title": "Tell Më",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - Tell Më.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 159,
                                                                "title": "U Should Know",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - U Should Know.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 44,
                                "name": "Yeat feat. Quavo",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 160,
                                                                "title": "5BRAZY",
                                                                "artist": "Yeat feat. Quavo",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat feat. Quavo - 5BRAZY.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 45,
                                "name": "Yeat, EsDeeKid",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 161,
                                                                "title": "Made It On Our Own",
                                                                "artist": "Yeat, EsDeeKid",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat, EsDeeKid - Made It On Our Own.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 46,
                                "name": "void, BABY BOI",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 142,
                                                                "title": "ON MY OWN",
                                                                "artist": "void, BABY BOI",
                                                                "duration": "--:--",
                                                                "url": "music/void, BABY BOI - ON MY OWN.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 47,
                                "name": "void, Druskhi",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 143,
                                                                "title": "FOR RICHIE",
                                                                "artist": "void, Druskhi",
                                                                "duration": "--:--",
                                                                "url": "music/void, Druskhi - FOR RICHIE.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 48,
                                "name": "void, ech0",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 144,
                                                                "title": "OBSESSED",
                                                                "artist": "void, ech0",
                                                                "duration": "--:--",
                                                                "url": "music/void, ech0 - OBSESSED.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 49,
                                "name": "Разные английские исполнители",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 1,
                                                                "title": "2000",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/2000.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 2,
                                                                "title": "24song",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/24song.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 6,
                                                                "title": "5% TNT",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/5% TNT.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 15,
                                                                "title": "butterfly effect",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/butterfly effect.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 19,
                                                                "title": "champain",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/champain.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 25,
                                                                "title": "crank master",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/crank master.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 26,
                                                                "title": "crash",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/crash.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 30,
                                                                "title": "dark thought",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/dark thought.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 33,
                                                                "title": "do it all",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/do it all.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 39,
                                                                "title": "el problema",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/el problema.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 45,
                                                                "title": "fomdj",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/fomdj.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 51,
                                                                "title": "go crazy",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/go crazy.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 52,
                                                                "title": "Go Off",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Go Off.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 54,
                                                                "title": "gta",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/gta.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 59,
                                                                "title": "hyaena",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/hyaena.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 69,
                                                                "title": "JACKBOYS",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/JACKBOYS.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 71,
                                                                "title": "KICKED OUT",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/KICKED OUT.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 78,
                                                                "title": "lollipop",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/lollipop.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 80,
                                                                "title": "LV Sandals",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/LV Sandals.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 85,
                                                                "title": "no face",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/no face.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 94,
                                                                "title": "Phantom",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Phantom.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 95,
                                                                "title": "PHILLY",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/PHILLY.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 96,
                                                                "title": "photo",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/photo.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 103,
                                                                "title": "PROBLEM CHILD",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/PROBLEM CHILD.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 104,
                                                                "title": "Rampage Song",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Rampage Song.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 106,
                                                                "title": "ratherlife",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ratherlife.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 120,
                                                                "title": "Riley",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Riley.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 125,
                                                                "title": "shyne",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/shyne.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 128,
                                                                "title": "SOME MORE",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/SOME MORE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 149,
                                                                "title": "what u need",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/what u need.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 150,
                                                                "title": "ya kogda-nibud uydu",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ya kogda-nibud uydu.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 162,
                                                                "title": "Your Turn",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Your Turn.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 50,
                                "name": "Разные русские исполнители",
                                "avatar": "",
                                "genre": "",
                                "songs": [
                                                {
                                                                "id": 4,
                                                                "title": "4 Raws",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/4 Raws.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 8,
                                                                "title": "abu_dhabi_vabu",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/abu_dhabi_vabu.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 12,
                                                                "title": "bebebe",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/bebebe.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 20,
                                                                "title": "chernyy bumer",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/chernyy bumer.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 21,
                                                                "title": "chetyre ukrainki",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/chetyre ukrainki.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 34,
                                                                "title": "dom",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/dom.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 55,
                                                                "title": "Head Shot ",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Head Shot .mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 73,
                                                                "title": "Ligala sosa",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Ligala sosa.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 83,
                                                                "title": "navalnyy lyokha",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/navalnyy lyokha.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 87,
                                                                "title": "novaya volna",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/novaya volna.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 88,
                                                                "title": "novyy meren",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/novyy meren.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 89,
                                                                "title": "ona-ono",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ona-ono.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 92,
                                                                "title": "pablo",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/pablo.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 101,
                                                                "title": "pososi",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/pososi.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 105,
                                                                "title": "ratatatata",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ratatatata.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 107,
                                                                "title": "retro rev",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/retro rev.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 121,
                                                                "title": "san laran",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/san laran.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 165,
                                                                "title": "ауф",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ауф.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 166,
                                                                "title": "Бандана",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Бандана.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 167,
                                                                "title": "Бассок",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Бассок.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 168,
                                                                "title": "блядская натура",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/блядская натура.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 169,
                                                                "title": "Валентина",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Валентина.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 170,
                                                                "title": "валим",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/валим.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 171,
                                                                "title": "Веном",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Веном.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 172,
                                                                "title": "Виновата сама",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Виновата сама.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 174,
                                                                "title": "Гоблин",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Гоблин.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 177,
                                                                "title": "мент",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/мент.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 180,
                                                                "title": "мы пидоры",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/мы пидоры.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 186,
                                                                "title": "Сердце для шалав",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Сердце для шалав.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 187,
                                                                "title": "Случайна",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Случайна.mp3",
                                                                "language": "ru"
                                                }
                                ]
                }
];

            const playlists = [
                {
                                "id": 1,
                                "name": "English mix",
                                "cover": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
                                "songs": [
                                                {
                                                                "id": 1,
                                                                "title": "2000",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/2000.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 2,
                                                                "title": "24song",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/24song.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 3,
                                                                "title": "3500",
                                                                "artist": "Travis Scott, Future, 2 Chainz",
                                                                "duration": "--:--",
                                                                "url": "music/3500.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 5,
                                                                "title": "4X4",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/4X4.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 6,
                                                                "title": "5% TNT",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/5% TNT.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 7,
                                                                "title": "Trunks",
                                                                "artist": "A$AP Rocky",
                                                                "duration": "--:--",
                                                                "url": "music/A$AP Rocky - Trunks.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 13,
                                                                "title": "GO AGAIN (feat. Superheaven)",
                                                                "artist": "BNYX®, Yeat, Superheaven",
                                                                "duration": "--:--",
                                                                "url": "music/BNYX®, Yeat, Superheaven - GO AGAIN (feat. Superheaven).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 14,
                                                                "title": "FEVER",
                                                                "artist": "BUCKSHOT, fakemink",
                                                                "duration": "--:--",
                                                                "url": "music/BUCKSHOT feat. fakemink - FEVER.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 15,
                                                                "title": "butterfly effect",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/butterfly effect.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 18,
                                                                "title": "CARNIVAL",
                                                                "artist": "Kanye West, Ty Dolla $ign, Rich The Kid, Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/carnival.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 19,
                                                                "title": "champain",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/champain.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 23,
                                                                "title": "COCAINE NOSE (Extended Intro)",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/COCAINE NOSE (Extended Intro).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 25,
                                                                "title": "crank master",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/crank master.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 26,
                                                                "title": "crash",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/crash.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 30,
                                                                "title": "dark thought",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/dark thought.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 31,
                                                                "title": "SYRUP SIPPIN'",
                                                                "artist": "Destroy Lonely",
                                                                "duration": "--:--",
                                                                "url": "music/Destroy Lonely - SYRUP SIPPIN'.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 33,
                                                                "title": "do it all",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/do it all.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 35,
                                                                "title": "KRYPTONITE",
                                                                "artist": "Don Toliver",
                                                                "duration": "--:--",
                                                                "url": "music/Don Toliver - KRYPTONITE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 39,
                                                                "title": "el problema",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/el problema.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 40,
                                                                "title": "Century",
                                                                "artist": "EsDeeKid",
                                                                "duration": "--:--",
                                                                "url": "music/EsDeeKid - Century.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 41,
                                                                "title": "EVIL JORDAN",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/evil jordan.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 42,
                                                                "title": "FE!N",
                                                                "artist": "Travis Scott, Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/fein.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 43,
                                                                "title": "Fell In Luv",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/fell in love.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 44,
                                                                "title": "Flashing Lights",
                                                                "artist": "Kanye West, Dwele",
                                                                "duration": "--:--",
                                                                "url": "music/Flashing Lights.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 45,
                                                                "title": "fomdj",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/fomdj.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 46,
                                                                "title": "FRANCHISE",
                                                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                                                "duration": "--:--",
                                                                "url": "music/FRANCHISE.mov",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 47,
                                                                "title": "FRANCHISE",
                                                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                                                "duration": "--:--",
                                                                "url": "music/franchise.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 48,
                                                                "title": "FRANCHISE",
                                                                "artist": "Travis Scott, Young Thug, M.I.A.",
                                                                "duration": "--:--",
                                                                "url": "music/franchise2.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 49,
                                                                "title": "Fuk Sumn",
                                                                "artist": "Kanye West, Ty Dolla $ign, Playboi Carti, Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/fuk sumn.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 50,
                                                                "title": "LIL DEMON",
                                                                "artist": "Future",
                                                                "duration": "--:--",
                                                                "url": "music/Future - LIL DEMON.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 51,
                                                                "title": "go crazy",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/go crazy.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 52,
                                                                "title": "Go Off",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Go Off.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 53,
                                                                "title": "goosebumps",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Goosebumps.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 54,
                                                                "title": "gta",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/gta.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 56,
                                                                "title": "HIGHEST IN THE ROOM",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/HIGHEST IN THE ROOM.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 57,
                                                                "title": "Homecoming",
                                                                "artist": "Kanye West, Chris Martin",
                                                                "duration": "--:--",
                                                                "url": "music/homecoming.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 58,
                                                                "title": "AddXcts (1)",
                                                                "artist": "Homixide Gang",
                                                                "duration": "--:--",
                                                                "url": "music/Homixide Gang - AddXcts (1).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 59,
                                                                "title": "hyaena",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/hyaena.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 60,
                                                                "title": "Travis Scott - No Sleep Ft. Playboi Carti",
                                                                "artist": "I am music",
                                                                "duration": "--:--",
                                                                "url": "music/I am music - Travis Scott - No Sleep Ft. Playboi Carti.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 62,
                                                                "title": "4TH DIMENSION",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - 4TH DIMENSION.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 63,
                                                                "title": "DON'T KNOW!",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - DON'T KNOW!.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 64,
                                                                "title": "HOMICIDE",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - HOMICIDE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 65,
                                                                "title": "HOW YOU FEEL_",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - HOW YOU FEEL_.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 66,
                                                                "title": "POWER",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - POWER.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 67,
                                                                "title": "PURPOSE",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - PURPOSE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 68,
                                                                "title": "THE KARDASHIANS",
                                                                "artist": "IMG",
                                                                "duration": "--:--",
                                                                "url": "music/IMG - THE KARDASHIANS.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 69,
                                                                "title": "JACKBOYS",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/JACKBOYS.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 70,
                                                                "title": "Fighting My Demons",
                                                                "artist": "Ken Carson",
                                                                "duration": "--:--",
                                                                "url": "music/Ken Carson - Fighting My Demons.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 71,
                                                                "title": "KICKED OUT",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/KICKED OUT.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 74,
                                                                "title": "Stuff (featuring Travis Scott)",
                                                                "artist": "Lil Baby",
                                                                "duration": "--:--",
                                                                "url": "music/Lil Baby - Stuff (featuring Travis Scott).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 75,
                                                                "title": "Boys Don’t Cry",
                                                                "artist": "Lil Tecca",
                                                                "duration": "--:--",
                                                                "url": "music/Lil Tecca - Boys Don’t Cry.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 76,
                                                                "title": "Break The Bank",
                                                                "artist": "Lil Uzi Vert & Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/Lil Uzi Vert & Playboi Carti - Break The Bank.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 77,
                                                                "title": "Location",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/location.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 78,
                                                                "title": "lollipop",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/lollipop.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 79,
                                                                "title": "Long Time",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/long time.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 80,
                                                                "title": "LV Sandals",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/LV Sandals.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 81,
                                                                "title": "Trance",
                                                                "artist": "Metro Boomin, Travis Scott & Young Thug",
                                                                "duration": "--:--",
                                                                "url": "music/Metro Boomin, Travis Scott & Young Thug - Trance.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 82,
                                                                "title": "Magnolia",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/mognolia.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 84,
                                                                "title": "Nightcrawler",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Nightcrawler.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 85,
                                                                "title": "no face",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/no face.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 90,
                                                                "title": "OUT WEST",
                                                                "artist": "JACKBOYS, Travis Scott, Young Thug",
                                                                "duration": "--:--",
                                                                "url": "music/out west.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 91,
                                                                "title": "Over",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/over.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 94,
                                                                "title": "Phantom",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Phantom.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 95,
                                                                "title": "PHILLY",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/PHILLY.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 96,
                                                                "title": "photo",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/photo.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 97,
                                                                "title": "WASSUP_RATCHET ft. Lil Baby",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/Playboi Carti - WASSUP_RATCHET ft. Lil Baby.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 98,
                                                                "title": "Manage",
                                                                "artist": "Playboi Carti, Lil Uzi Vert",
                                                                "duration": "--:--",
                                                                "url": "music/Playboi Carti, Lil Uzi Vert - Manage.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 100,
                                                                "title": "Poke It Out",
                                                                "artist": "Playboi Carti, Nicki Minaj",
                                                                "duration": "--:--",
                                                                "url": "music/Poke it out.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 103,
                                                                "title": "PROBLEM CHILD",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/PROBLEM CHILD.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 104,
                                                                "title": "Rampage Song",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Rampage Song.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 106,
                                                                "title": "ratherlife",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ratherlife.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 108,
                                                                "title": "AINT NOTHING",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - AINT NOTHING.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 109,
                                                                "title": "Brick Brick",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Brick Brick.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 110,
                                                                "title": "Dirty Money",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Dirty Money.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 111,
                                                                "title": "Flex N Finesse",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Flex N Finesse.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 112,
                                                                "title": "I WANT EVERYTHING",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - I WANT EVERYTHING.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 113,
                                                                "title": "ILLUMINATI",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - ILLUMINATI.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 114,
                                                                "title": "In & Out",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - In & Out.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 115,
                                                                "title": "ONE CALL",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - ONE CALL.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 116,
                                                                "title": "OUTTA THERE",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - OUTTA THERE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 117,
                                                                "title": "Paranoid",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - Paranoid.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 118,
                                                                "title": "SAME OLD ME",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - SAME OLD ME.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 119,
                                                                "title": "So Long",
                                                                "artist": "Rich Amiri",
                                                                "duration": "--:--",
                                                                "url": "music/Rich Amiri - So Long.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 120,
                                                                "title": "Riley",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Riley.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 122,
                                                                "title": "Sauce!",
                                                                "artist": "XXXTENTACION",
                                                                "duration": "--:--",
                                                                "url": "music/Sauce!.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 123,
                                                                "title": "sdp interlude (OG)",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/sdp interlude (OG).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 125,
                                                                "title": "shyne",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/shyne.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 126,
                                                                "title": "SICKO MODE",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/SICKO MODE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 127,
                                                                "title": "Sky",
                                                                "artist": "Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/sky.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 128,
                                                                "title": "SOME MORE",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/SOME MORE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 130,
                                                                "title": "SS",
                                                                "artist": "Ken Carson",
                                                                "duration": "--:--",
                                                                "url": "music/ss.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 131,
                                                                "title": "STARGAZING",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/STARGAZING.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 132,
                                                                "title": "Telescope",
                                                                "artist": "TWXN",
                                                                "duration": "--:--",
                                                                "url": "music/telescope.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 133,
                                                                "title": "THE SCOTTS",
                                                                "artist": "THE SCOTTS, Travis Scott, Kid Cudi",
                                                                "duration": "--:--",
                                                                "url": "music/The Scotts.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 134,
                                                                "title": "Toosie Slide",
                                                                "artist": "Drake",
                                                                "duration": "--:--",
                                                                "url": "music/Toosie slide.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 135,
                                                                "title": "ESCAPE PLAN",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Travi$ Scott - ESCAPE PLAN.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 136,
                                                                "title": "CHAMPAIN & VACAY",
                                                                "artist": "Travis Scott & Don Toliver",
                                                                "duration": "--:--",
                                                                "url": "music/Travis Scott & Don Toliver - CHAMPAIN & VACAY.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 137,
                                                                "title": "OUTSIDE",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Travis Scott - OUTSIDE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 138,
                                                                "title": "THANK GOD",
                                                                "artist": "Travis Scott",
                                                                "duration": "--:--",
                                                                "url": "music/Travis Scott - THANK GOD.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 139,
                                                                "title": "Type Shit",
                                                                "artist": "Future, Metro Boomin, Travis Scott, Playboi Carti",
                                                                "duration": "--:--",
                                                                "url": "music/Type Shit.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 142,
                                                                "title": "ON MY OWN",
                                                                "artist": "void, BABY BOI",
                                                                "duration": "--:--",
                                                                "url": "music/void, BABY BOI - ON MY OWN.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 143,
                                                                "title": "FOR RICHIE",
                                                                "artist": "void, Druskhi",
                                                                "duration": "--:--",
                                                                "url": "music/void, Druskhi - FOR RICHIE.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 144,
                                                                "title": "OBSESSED",
                                                                "artist": "void, ech0",
                                                                "duration": "--:--",
                                                                "url": "music/void, ech0 - OBSESSED.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 145,
                                                                "title": "Blast Off",
                                                                "artist": "Void, Repair Lonely",
                                                                "duration": "--:--",
                                                                "url": "music/Void, Repair Lonely - Blast Off.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 146,
                                                                "title": "Wassup",
                                                                "artist": "Lil Uzi Vert, Future",
                                                                "duration": "--:--",
                                                                "url": "music/Wassup.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 148,
                                                                "title": "Watch This",
                                                                "artist": "Lil Uzi Vert",
                                                                "duration": "--:--",
                                                                "url": "music/watch this.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 149,
                                                                "title": "what u need",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/what u need.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 150,
                                                                "title": "ya kogda-nibud uydu",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ya kogda-nibud uydu.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 151,
                                                                "title": "BË QUIET (Feat. Kodak Black)",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - BË QUIET (Feat. Kodak Black).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 152,
                                                                "title": "Flawlëss (Feat. Lil Uzi Vert)",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - Flawlëss (Feat. Lil Uzi Vert).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 153,
                                                                "title": "FLYTROOP",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - FLYTROOP.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 154,
                                                                "title": "GEEK TIMË",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - GEEK TIMË.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 155,
                                                                "title": "My wrist (feat. Young Thug)",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - My wrist (feat. Young Thug).mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 156,
                                                                "title": "No morë talk",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - No morë talk.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 157,
                                                                "title": "ORCHESTRATË",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - ORCHESTRATË.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 158,
                                                                "title": "Tell Më",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - Tell Më.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 159,
                                                                "title": "U Should Know",
                                                                "artist": "Yeat",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat - U Should Know.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 160,
                                                                "title": "5BRAZY",
                                                                "artist": "Yeat feat. Quavo",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat feat. Quavo - 5BRAZY.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 161,
                                                                "title": "Made It On Our Own",
                                                                "artist": "Yeat, EsDeeKid",
                                                                "duration": "--:--",
                                                                "url": "music/Yeat, EsDeeKid - Made It On Our Own.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 162,
                                                                "title": "Your Turn",
                                                                "artist": "Разные английские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Your Turn.mp3",
                                                                "language": "en"
                                                },
                                                {
                                                                "id": 163,
                                                                "title": "ZEZE",
                                                                "artist": "Kodak Black, Travis Scott, Offset",
                                                                "duration": "--:--",
                                                                "url": "music/ZEZE.mp3",
                                                                "language": "en"
                                                }
                                ]
                },
                {
                                "id": 2,
                                "name": "Ru микс",
                                "cover": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
                                "songs": [
                                                {
                                                                "id": 4,
                                                                "title": "4 Raws",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/4 Raws.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 8,
                                                                "title": "abu_dhabi_vabu",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/abu_dhabi_vabu.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 9,
                                                                "title": "Инопланетянин",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/alien.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 10,
                                                                "title": "Ameli",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/ameli.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 11,
                                                                "title": "ARISTOCRAT",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/ARISTOCRAT.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 12,
                                                                "title": "bebebe",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/bebebe.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 16,
                                                                "title": "Bystro",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/bystro.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 17,
                                                                "title": "Cadillac",
                                                                "artist": "Morgenshtern, Элджей",
                                                                "duration": "--:--",
                                                                "url": "music/Cadillac.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 20,
                                                                "title": "chernyy bumer",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/chernyy bumer.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 21,
                                                                "title": "chetyre ukrainki",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/chetyre ukrainki.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 22,
                                                                "title": "CHILL",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/CHILL.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 24,
                                                                "title": "СОК",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/COK.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 27,
                                                                "title": "Cristal",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/cristal.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 28,
                                                                "title": "Cristal & МОЁТ",
                                                                "artist": "Morgenshtern, Элджей",
                                                                "duration": "--:--",
                                                                "url": "music/cristal_.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 29,
                                                                "title": "Cristal",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/cristal_mayot.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 32,
                                                                "title": "DINERO",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/DINERO.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 34,
                                                                "title": "dom",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/dom.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 36,
                                                                "title": "DREAM GARDEN",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/DREAM GARDEN.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 37,
                                                                "title": "Drugoy",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/drugoy.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 38,
                                                                "title": "Dulo",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/dulo.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 55,
                                                                "title": "Head Shot ",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Head Shot .mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 61,
                                                                "title": "ICE",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/ice.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 72,
                                                                "title": "Leck",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/leck.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 73,
                                                                "title": "Ligala sosa",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Ligala sosa.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 83,
                                                                "title": "navalnyy lyokha",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/navalnyy lyokha.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 86,
                                                                "title": "Nominalo",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/nominalo.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 87,
                                                                "title": "novaya volna",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/novaya volna.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 88,
                                                                "title": "novyy meren",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/novyy meren.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 89,
                                                                "title": "ona-ono",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ona-ono.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 92,
                                                                "title": "pablo",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/pablo.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 93,
                                                                "title": "Papin Tank",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/papin tank.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 99,
                                                                "title": "Pochemu",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/pochemu.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 101,
                                                                "title": "pososi",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/pososi.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 102,
                                                                "title": "Poydet",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/poydet.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 105,
                                                                "title": "ratatatata",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ratatatata.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 107,
                                                                "title": "retro rev",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/retro rev.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 121,
                                                                "title": "san laran",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/san laran.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 124,
                                                                "title": "SHOW",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/show.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 129,
                                                                "title": "SOULCALIBUR LUV",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/SOULCALIBUR LUV.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 140,
                                                                "title": "UFO LUV",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/UFO LUV.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 141,
                                                                "title": "Veselaya Pesnya",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/veselaya pesnya.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 147,
                                                                "title": "WATAFUK",
                                                                "artist": "Morgenshtern",
                                                                "duration": "--:--",
                                                                "url": "music/WATAFUK.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 164,
                                                                "title": "ауди",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/ауди.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 165,
                                                                "title": "ауф",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/ауф.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 166,
                                                                "title": "Бандана",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Бандана.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 167,
                                                                "title": "Бассок",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Бассок.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 168,
                                                                "title": "блядская натура",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/блядская натура.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 169,
                                                                "title": "Валентина",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Валентина.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 170,
                                                                "title": "валим",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/валим.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 171,
                                                                "title": "Веном",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Веном.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 172,
                                                                "title": "Виновата сама",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Виновата сама.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 173,
                                                                "title": "Внутри",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/Внутри.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 174,
                                                                "title": "Гоблин",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Гоблин.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 175,
                                                                "title": "до сих пор",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/до сих пор.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 176,
                                                                "title": "киллер",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/киллер.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 177,
                                                                "title": "мент",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/мент.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 178,
                                                                "title": "моих мыслях",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/моих мыслях.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 179,
                                                                "title": "мотылек",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/мотылек.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 180,
                                                                "title": "мы пидоры",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/мы пидоры.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 181,
                                                                "title": "На грязном",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/На грязном.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 182,
                                                                "title": "на память",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/на память.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 183,
                                                                "title": "не надо",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/не надо.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 184,
                                                                "title": "ночь",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/ночь.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 185,
                                                                "title": "Плохая Сука",
                                                                "artist": "GONE.Fludd",
                                                                "duration": "--:--",
                                                                "url": "music/Плохая Сука.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 186,
                                                                "title": "Сердце для шалав",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Сердце для шалав.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 187,
                                                                "title": "Случайна",
                                                                "artist": "Разные русские исполнители",
                                                                "duration": "--:--",
                                                                "url": "music/Случайна.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 188,
                                                                "title": "снег",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/снег.mp3",
                                                                "language": "ru"
                                                },
                                                {
                                                                "id": 189,
                                                                "title": "ты",
                                                                "artist": "MAYOT",
                                                                "duration": "--:--",
                                                                "url": "music/ты.mp3",
                                                                "language": "ru"
                                                }
                                ]
                }
];

            // Элементы DOM
            const playPauseBtn = document.getElementById('play-pause');
            const prevBtn = document.getElementById('prev');
            const nextBtn = document.getElementById('next');
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

            // Текущее состояние
            let isPlaying = false;
            let currentSongIndex = 0;
            let visualizerBars = [];
            let playlist = [];

            // Установка громкости по умолчанию 10%
            volumeSlider.value = 0.1;
            audioPlayer.volume = 0.1;

            // Переключение вкладок
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Удаляем активный класс у всех вкладок
                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));

                    // Добавляем активный класс текущей вкладке
                    tab.classList.add('active');
                    document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
                });
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

            // Генерация плейлистов
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
                artists.forEach(artist => {
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
                                <div class="duration">${song.duration}</div>
                                <div style="display: flex; justify-content: flex-end; margin-top: 15px;">
                                    <div class="play-btn">
                                        <i class="fas fa-play"></i>
                                    </div>
                                </div>
                            `;

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
                const songExists = playlist.some(s => s.id === song.id);

                if (!songExists) {
                    playlist.push(song);

                    // Обновляем плейлист
                    playlistEl.innerHTML = '';
                    generateUserPlaylist();
                }

                // Устанавливаем текущую песню
                currentSongIndex = playlist.findIndex(s => s.id === song.id);
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
                                <div class="duration">${song.duration}</div>
                            `;

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

            // Инициализация
            function init() {
                initVisualizer();
                generatePlaylists();
                generateArtistsList();
                generatePopularPlaylist();
                generateUserPlaylist();

                // Добавляем обработчик для кнопки play/pause
                playPauseBtn.addEventListener('click', togglePlay);

                // Обработчики событий
                prevBtn.addEventListener('click', prevSong);
                nextBtn.addEventListener('click', nextSong);
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
