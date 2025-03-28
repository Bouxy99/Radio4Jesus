function loadTrack(trackIndex) {
    currentTrack = trackIndex;
    audio.src = playlist[trackIndex].file;
    audio.load();
    audio.play();
    isPlaying = true;
    updateButtons();
    updatePlaylistDisplay();
}

function updateButtons() {
    if (isPlaying) {
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    } else {
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    }
}

function updatePlaylistDisplay() {
    document.querySelectorAll('.playlist-item').forEach((item, index) => {
        item.classList.toggle('playing', index+1 === currentTrack);
    });
}

function updateAudioTime(e) {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const clickPosition = (offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = clickPosition;
    const progressWidth = (audio.currentTime / audio.duration) * 100;
    progress.style.width = progressWidth + '%';
}

updatePlaylistDisplay();