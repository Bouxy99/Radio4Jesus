playButton.addEventListener('click', () => {
    if (!isPlaying) {
        loadTrack(currentTrack);
        isPlaying = true;
        updateButtons();
    }
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    isPlaying = false;
    updateButtons();
});

previousButton.addEventListener('click', () => {
    if (currentTrack > 1) {
        loadTrack(currentTrack - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentTrack < playlistLength) {
        loadTrack(currentTrack + 1);
    }
});

audio.addEventListener('timeupdate', () => {
    if (!isDragging) {
        const progressWidth = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressWidth + '%';
    }
});

audio.addEventListener('ended', () => {
    if (currentTrack < playlistLength) {
        loadTrack(currentTrack + 1);
    } else {
        isPlaying = false; // Fin de la playlist
        updateButtons();
    }
});