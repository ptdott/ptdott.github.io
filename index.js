const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'music/a thousand years.mp3',
        displayName: 'a thousand years\'s Call',
        cover: 'picture/a thousand years.jpg',
        artist: 'Christina Perri',
    },
    {
        path: 'music/abcdefu.mp3',
        displayName: 'abcdefu',
        cover: 'picture/abcdefu.jpg',
        artist: 'GAYLE',
    },
    {
        path: 'music/All of Me.mp3',
        displayName: 'All of Me',
        cover: 'picture/All of Me.jpg',
        artist: 'John Legend',
    },
    {
        path: 'music/Alone.mp3',
        displayName: 'Alone',
        cover: 'picture/Alone.jpg',
        artist: 'Marshmello',
    },
    {
        path: 'music/As It Was.mp3',
        displayName: 'As It Was',
        cover: 'picture/As It Was.jpg',
        artist: 'Harry Styles',
    },
    {
        path: 'music/Baby.mp3',
        displayName: 'Baby',
        cover: 'picture/Baby.jpg',
        artist: 'Justin Bieber/Ludacris',
    },
    {
        path: 'music/Bad Habits.mp3',
        displayName: 'Bad Habits',
        cover: 'picture/Bad Habits.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'music/Bad Liar.mp3',
        displayName: 'Bad Liar',
        cover: 'picture/Bad Liar.jpg',
        artist: 'Imagine Dragons',
    },
    {
        path: 'music/Be Alright.mp3',
        displayName: 'Be Alright',
        cover: 'picture/Be Alright.jpg',
        artist: 'Dean Lewis',
    },
    {
        path: 'music/Beautiful Things.mp3',
        displayName: 'Beautiful Things',
        cover: 'picture/Beautiful Things.jpg',
        artist: 'Benson Boone',
    },
    {
        path: 'music/Believer.mp3',
        displayName: 'Believer',
        cover: 'picture/Believer.jpg',
        artist: 'Imagine Dragons',
    },
    {
        path: 'music/Calm Down (with Selena Gomez).mp3',
        displayName: 'Calm Down (with Selena Gomez)',
        cover: 'picture/Calm Down (with Selena Gomez).jpg',
        artist: 'Rema/Selena Gomez',
    },
    {
        path: 'music/Cheap Thrills (feat. Sean Paul).mp3',
        displayName: 'Cheap Thrills (feat. Sean Paul)',
        cover: 'picture/Cheap Thrills (feat. Sean Paul).jpg',
        artist: 'Sia/Sean Paul',
    },
    {
        path: 'music/Closer.mp3',
        displayName: 'Closer',
        cover: 'picture/Closer.jpg',
        artist: 'The Chainsmokers/Halsey',
    },
    {
        path: 'music/Counting Stars.mp3',
        displayName: 'Counting Stars',
        cover: 'picture/Counting Stars.jpg',
        artist: 'OneRepublic',
    },
    {
        path: 'music/Dance Monkey.mp3',
        displayName: 'Dance Monkey',
        cover: 'picture/Dance Monkey.jpg',
        artist: 'Tones And I',
    },
    {
        path: 'music/Dark Horse.mp3',
        displayName: 'Dark Horse',
        cover: 'picture/Dark Horse.jpg',
        artist: 'Katy Perry/Juicy J',
    },
    {
        path: 'music/Daylight.mp3',
        displayName: 'Daylight',
        cover: 'picture/Daylight.jpg',
        artist: 'David Kushner',
    },
    {
        path: 'music/death bed (coffee for your head).mp3',
        displayName: 'death bed (coffee for your head)',
        cover: 'picture/death bed (coffee for your head).jpg',
        artist: 'Powfu/beabadoobee',
    },
    {
        path: 'music/Despacito.mp3',
        displayName: 'Despacito',
        cover: 'picture/Despacito.jpg',
        artist: 'Luis Fonsi/Daddy Yankee',
    },
    {
        path: 'music/Dusk Till Dawn (feat. Sia) - Radio Edit.mp3',
        displayName: 'Dusk Till Dawn (feat. Sia) - Radio Edit',
        cover: 'picture/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg',
        artist: 'ZAYN/Sia',
    },
    {
        path: 'music/Espresso.mp3',
        displayName: 'Espresso',
        cover: 'picture/Espresso.jpg',
        artist: 'Sabrina Carpenter',
    },
    {
        path: 'music/Flowers.mp3',
        displayName: 'Flowers',
        cover: 'picture/Flowers.jpg',
        artist: 'Miley Cyrus',
    },
    {
        path: 'music/FRIENDS.mp3',
        displayName: 'FRIENDS',
        cover: 'picture/FRIENDS.jpg',
        artist: 'Marshmello/Anne-Marie',
    },
    {
        path: 'music/Ghost.mp3',
        displayName: 'Ghost',
        cover: 'picture/Ghost.jpg',
        artist: 'Justin Bieber',
    },
    {
        path: 'music/Girls Like You (feat. Cardi B) - Cardi B Version.mp3',
        displayName: 'Girls Like You (feat. Cardi B) - Cardi B Version',
        cover: 'picture/Girls Like You (feat. Cardi B) - Cardi B Version.jpg',
        artist: 'Maroon 5/Cardi B',
    },
    {
        path: 'music/golden hour.mp3',
        displayName: 'golden hour',
        cover: 'picture/golden hour.jpg',
        artist: 'JVKE',
    },
    {
        path: 'music/Grenade.mp3',
        displayName: 'Grenade',
        cover: 'picture/Grenade.jpg',
        artist: 'Bruno Mars',
    },
    {
        path: 'music/Hall of Fame (feat. will.i.am).mp3',
        displayName: 'Hall of Fame (feat. will.i.am)',
        cover: 'picture/Hall of Fame (feat. will.i.am).jpg',
        artist: 'The Script/will.i.am',
    },
    {
        path: 'music/Happier.mp3',
        displayName: 'Happier',
        cover: 'picture/Happier.jpg',
        artist: 'Marshmello/Bastille',
    },
    {
        path: 'music/Heat Waves.mp3',
        displayName: 'Heat Waves',
        cover: 'picture/Heat Waves.jpg',
        artist: 'Glass Animals',
    },
    {
        path: 'music/Heathens.mp3',
        displayName: 'Heathens',
        cover: 'picture/Heathens.jpg',
        artist: 'Twenty One Pilots',
    },
    {
        path: 'music/Hero (feat. Christina Perri).mp3',
        displayName: 'Hero (feat. Christina Perri)',
        cover: 'picture/Hero (feat. Christina Perri).jpg',
        artist: 'Cash Cash/Christina Perri',
    },
    {
        path: 'music/House of Memories.mp3',
        displayName: 'House of Memories',
        cover: 'picture/House of Memories.jpg',
        artist: 'Panic! At The Disco',
    },
    {
        path: 'music/How Do I Say Goodbye.mp3',
        displayName: 'How Do I Say Goodbye',
        cover: 'picture/How Do I Say Goodbye.jpg',
        artist: 'Dean Lewis',
    },
    {
        path: 'music/Hymn for the Weekend.mp3',
        displayName: 'Hymn for the Weekend',
        cover: 'picture/Hymn for the Weekend.jpg',
        artist: 'Coldplay',
    },
    {
        path: 'music/I Aint Worried.mp3',
        displayName: 'I Aint Worried',
        cover: 'picture/I Aint Worried.jpg',
        artist: 'OneRepublic',
    },
    {
        path: 'music/In the Name of Love.mp3',
        displayName: 'In the Name of Love',
        cover: 'picture/In the Name of Love.jpg',
        artist: 'Martin Garrix/Bebe Rexha',
    },
    {
        path: 'music/INDUSTRY BABY (feat. Jack Harlow).mp3',
        displayName: 'INDUSTRY BABY (feat. Jack Harlow)',
        cover: 'picture/INDUSTRY BABY (feat. Jack Harlow).jpg',
        artist: 'Lil Nas X/Jack Harlow',
    },
    {
        path: 'music/Into Your Arms (feat. Ava Max).mp3',
        displayName: 'Into Your Arms (feat. Ava Max)',
        cover: 'picture/Into Your Arms (feat. Ava Max).jpg',
        artist: 'Witt Lowry/Ava Max',
    },
    {
        path: 'music/Just the Way You Are.mp3',
        displayName: 'Just the Way You Are',
        cover: 'picture/Just the Way You Are.jpg',
        artist: 'Bruno Mars',
    },
    {
        path: 'music/Let Me Down Slowly.mp3',
        displayName: 'Let Me Down Slowly',
        cover: 'picture/Let Me Down Slowly.jpg',
        artist: 'Alec Benjamin',
    },
    {
        path: 'music/Let Me Love You.mp3',
        displayName: 'Let Me Love You',
        cover: 'picture/Let Me Love You.jpg',
        artist: 'DJ Snake/Justin Bieber',
    },
    {
        path: 'music/Like Im Gonna Lose You (feat. John Legend).mp3',
        displayName: 'Like Im Gonna Lose You (feat. John Legend)',
        cover: 'picture/Like Im Gonna Lose You (feat. John Legend).jpg',
        artist: 'Meghan Trainor/John Legend',
    },
    {
        path: 'music/Locked out of Heaven.mp3',
        displayName: 'Locked out of Heaven',
        cover: 'picture/Locked out of Heaven.jpg',
        artist: 'Bruno Mars',
    },
    {
        path: 'music/Love Me Like You Do.mp3',
        displayName: 'Love Me Like You Do',
        cover: 'picture/Love Me Like You Do.jpg',
        artist: 'Ellie Goulding',
    },
    {
        path: 'music/Love Yourself.mp3',
        displayName: 'Love Yourself',
        cover: 'picture/Love Yourself.jpg',
        artist: 'Justin Bieber',
    },
    {
        path: 'music/lovely (with Khalid).mp3',
        displayName: 'lovely (with Khalid)',
        cover: 'picture/lovely (with Khalid).jpg',
        artist: 'Billie Eilish/Khalid',
    },
    {
        path: 'music/Maps.mp3',
        displayName: 'Maps',
        cover: 'picture/Maps.jpg',
        artist: 'Maroon 5',
    },
    {
        path: 'music/Night Changes.mp3',
        displayName: 'Night Changes',
        cover: 'picture/Night Changes.jpg',
        artist: 'One Direction',
    },
    {
        path: 'music/Old Town Road.mp3',
        displayName: 'Old Town Road',
        cover: 'picture/Old Town Road.jpg',
        artist: 'Lil Nas X',
    },
    {
        path: 'music/Paradise.mp3',
        displayName: 'Paradise',
        cover: 'picture/Paradise.jpg',
        artist: 'Coldplay',
    },
    {
        path: 'music/Past Lives.mp3',
        displayName: 'Past Lives',
        cover: 'picture/Past Lives.jpg',
        artist: 'sapientdream/Slushii',
    },
    {
        path: 'music/Payphone.mp3',
        displayName: 'Payphone',
        cover: 'picture/Payphone.jpg',
        artist: 'Maroon 5/Wiz Khalifa',
    },
    {
        path: 'music/Perfect.mp3',
        displayName: 'Perfect',
        cover: 'picture/Perfect.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'music/Photograph.mp3',
        displayName: 'Photograph',
        cover: 'picture/Photograph.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'music/Roar.mp3',
        displayName: 'Roar',
        cover: 'picture/Roar.jpg',
        artist: 'Katy Perry',
    },
    {
        path: 'music/Rockabye (feat. Sean Paul & Anne-Marie).mp3',
        displayName: 'Rockabye (feat. Sean Paul & Anne-Marie)',
        cover: 'picture/Rockabye (feat. Sean Paul & Anne-Marie).jpg',
        artist: 'Clean Bandit/Sean Paul/Anne-Marie',
    },
    {
        path: 'music/Rude.mp3',
        displayName: 'Rude',
        cover: 'picture/Rude.jpg',
        artist: 'MAGIC!',
    },
    {
        path: 'music/Savage Love (Laxed - Siren Beat).mp3',
        displayName: 'Savage Love (Laxed - Siren Beat)',
        cover: 'picture/Savage Love (Laxed - Siren Beat).jpg',
        artist: 'Jawsh 685/Jason Derulo',
    },
    {
        path: 'music/Say You Wont Let Go.mp3',
        displayName: 'Say You Wont Let Go',
        cover: 'picture/Say You Wont Let Go.jpg',
        artist: 'James Arthur',
    },
    {
        path: 'music/See You Again (feat. Charlie Puth).mp3',
        displayName: 'See You Again (feat. Charlie Puth)',
        cover: 'picture/See You Again (feat. Charlie Puth).jpg',
        artist: 'Wiz Khalifa/Charlie Puth',
    },
    {
        path: 'music/Señorita.mp3',
        displayName: 'Señorita',
        cover: 'picture/Señorita.jpg',
        artist: 'Shawn Mendes/Camila Cabello',
    },
    {
        path: 'music/Shallow - Radio Edit.mp3',
        displayName: 'Shallow - Radio Edit',
        cover: 'picture/Shallow - Radio Edit.jpg',
        artist: 'Lady Gaga/Bradley Cooper',
    },
    {
        path: 'music/Shape of You.mp3',
        displayName: 'Shape of You',
        cover: 'picture/Shape of You.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'music/Shivers.mp3',
        displayName: 'Shivers',
        cover: 'picture/Shivers.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'music/Somebody That I Used To Know.mp3',
        displayName: 'Somebody That I Used To Know',
        cover: 'picture/Somebody That I Used To Know.jpg',
        artist: 'Gotye/Kimbra',
    },
    {
        path: 'music/Someone You Loved.mp3',
        displayName: 'Someone You Loved',
        cover: 'picture/Someone You Loved.jpg',
        artist: 'Lewis Capaldi',
    },
    {
        path: 'music/Something Just Like This.mp3',
        displayName: 'Something Just Like This',
        cover: 'picture/Something Just Like This.jpg',
        artist: 'The Chainsmokers/Coldplay',
    },
    {
        path: 'music/Sorry.mp3',
        displayName: 'Sorry',
        cover: 'picture/Sorry.jpg',
        artist: 'Justin Bieber',
    },
    {
        path: 'music/STAY (with Justin Bieber).mp3',
        displayName: 'STAY (with Justin Bieber)',
        cover: 'picture/STAY (with Justin Bieber).jpg',
        artist: 'The Kid LAROI/Justin Bieber',
    },
    {
        path: 'music/Stereo Hearts (feat. Adam Levine).mp3',
        displayName: 'Stereo Hearts (feat. Adam Levine)',
        cover: 'picture/Stereo Hearts (feat. Adam Levine).jpg',
        artist: 'Gym Class Heroes/Adam Levine',
    },
    {
        path: 'music/Stitches.mp3',
        displayName: 'Stitches',
        cover: 'picture/Stitches.jpg',
        artist: 'Shawn Mendes',
    },
    {
        path: 'music/Sugar.mp3',
        displayName: 'Sugar',
        cover: 'picture/Sugar.jpg',
        artist: 'Maroon 5',
    },
    {
        path: 'music/Sunflower.mp3',
        displayName: 'Sunflower - Spider-Man: Into the Spider-Verse',
        cover: 'picture/Sunflower.jpg',
        artist: 'Post Malone/Swae Lee',
    },
    {
        path: 'music/Sunroof.mp3',
        displayName: 'Sunroof',
        cover: 'picture/Sunroof.jpg',
        artist: 'Nicky Youre/dazy',
    },
    {
        path: 'music/Symphony (feat. Zara Larsson).mp3',
        displayName: 'Symphony (feat. Zara Larsson)',
        cover: 'picture/Symphony (feat. Zara Larsson).jpg',
        artist: 'Clean Bandit/Zara Larsson',
    },
    {
        path: 'music/Take Me To Church.mp3',
        displayName: 'Take Me To Church',
        cover: 'picture/Take Me To Church.jpg',
        artist: 'Hozier',
    },
    {
        path: 'music/Takeaway.mp3',
        displayName: 'Takeaway',
        cover: 'picture/Takeaway.jpg',
        artist: 'The Chainsmokers/ILLENIUM/Lennon Stella',
    },
    {
        path: 'music/The Lazy Song.mp3',
        displayName: 'The Lazy Song',
        cover: 'picture/The Lazy Song.jpg',
        artist: 'Bruno Mars',
    },
    {
        path: 'music/The Nights.mp3',
        displayName: 'The Nights',
        cover: 'picture/The Nights.jpg',
        artist: 'Avicii',
    },
    {
        path: 'music/There is Nothing Holding Me Back.mp3',
        displayName: 'There is Nothing Holding Me Back',
        cover: 'picture/There is Nothing Holding Me Back.jpg',
        artist: 'Shawn Mendes',
    },
    {
        path: 'music/Thinking out Loud.mp3',
        displayName: 'Thinking out Loud',
        cover: 'picture/Thinking out Loud.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'music/Timber.mp3',
        displayName: 'Timber',
        cover: 'picture/Timber.jpg',
        artist: 'Pitbull/Kesha',
    },
    {
        path: 'music/Titanium (feat. Sia).mp3',
        displayName: 'Titanium (feat. Sia)',
        cover: 'picture/Titanium (feat. Sia).jpg',
        artist: 'David Guetta/Sia',
    },
    {
        path: 'music/Treat You Better.mp3',
        displayName: 'Treat You Better',
        cover: 'picture/Treat You Better.jpg',
        artist: 'Shawn Mendes',
    },
    {
        path: 'music/Unstoppable.mp3',
        displayName: 'Unstoppable',
        cover: 'picture/Unstoppable.jpg',
        artist: 'Sia',
    },
    {
        path: 'music/Until I Found You (with Em Beihold) - Em Beihold Version.mp3',
        displayName: 'Until I Found You (with Em Beihold) - Em Beihold Version',
        cover: 'picture/Until I Found You (with Em Beihold) - Em Beihold Version.jpg',
        artist: 'Stephen Sanchez/Em Beihold',
    },
    {
        path: 'music/Viva La Vida.mp3',
        displayName: 'Viva La Vida',
        cover: 'picture/Viva La Vida.jpg',
        artist: 'Coldplay',
    },
    {
        path: 'music/Waiting For Love.mp3',
        displayName: 'Waiting For Love',
        cover: 'picture/Waiting For Love.jpg',
        artist: 'Avicii',
    },
    {
        path: 'music/Wake Me Up.mp3',
        displayName: 'Wake Me Up',
        cover: 'picture/Wake Me Up.jpg',
        artist: 'Avicii',
    },
    {
        path: 'music/We Dont Talk Anymore .mp3',
        displayName: 'We Dont Talk Anymore ',
        cover: 'picture/We Dont Talk Anymore.jpg',
        artist: 'Charlie Puth/Selena Gomez',
    },
    {
        path: 'music/When I Was Your Man.mp3',
        displayName: 'When I Was Your Man',
        cover: 'picture/When I Was Your Man.jpg',
        artist: 'Bruno Mars',
    },
    {
        path: 'music/Without You (feat. Sandro Cavazza).mp3',
        displayName: 'Without You (feat. Sandro Cavazza)',
        cover: 'picture/Without You (feat. Sandro Cavazza).jpg',
        artist: 'Avicii/Sandro Cavazza',
    },
    {
        path: 'music/7 Years.mp3',
        displayName: '7 Years',
        cover: 'picture/7 Years.jpg',
        artist: 'Lukas Graham',
    },
    {
        path: 'music/2002.mp3',
        displayName: '2002',
        cover: 'picture/2002.jpg',
        artist: 'Anne-Marie',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);