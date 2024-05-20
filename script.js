const songs = [
    {
        title: "Deixa em off",
        artist: "Grupo Revelação",
        src: "SnapTik.biz - Grupo Revelação - Deixa Alagar (128 kbps).mp3",
        cover: "imagemrevelação.png"
    },
    {
        title: "Pura Adrenalina",
        artist: "Belo",
        src: "SnapTik.biz - Belo - Pura Adrenalina (Vídeo Ao Vivo) (128 kbps).mp3",
        cover: "imagembelo.png"
    },
    {
        title: "Deixa em Off",
        artist: "Turma do Pagode",
        src: "SnapTik.biz - Turma do Pagode - Deixa em Off (XV Anos Ao Vivo) (128 kbps).mp3",
        cover: "deixaemoff.png"
    } 
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Play";
    }
}
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
playButton.addEventListener('click', togglePlayPause);

audio.addEventListener('ended', nextSong);


loadSong(songs[currentSongIndex]);