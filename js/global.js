const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const playlistElement = document.getElementById('playlist');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

let currentTrack = 1;
let isPlaying = false;
let isDragging = false;

const playlist = {
    1: { id: 1, name: "Trouver son amour", file: "audio/Trouver_son_amour.mp3", date:'2025-03-21' },
    2: { id: 2, name: "Psaumes 33", file: "audio/Psaumes_33.mp3", date:'2025-03-28' }
}

const playlistLength = Object.keys(playlist).length;

// Ajouter les éléments de la playlist dynamiquement
for (let index in playlist) {
    index = parseInt(index);
    const li = document.createElement('li');
    li.classList.add('playlist-item');
    li.textContent = playlist[index].name;
    li.addEventListener('click', () => loadTrack(index));
    playlistElement.appendChild(li);
}