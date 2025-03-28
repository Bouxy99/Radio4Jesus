// Gérer le glissement (slider) et les interactions tactiles
progressBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateAudioTime(e);
});

progressBar.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateAudioTime(e.touches[0]);
});

window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateAudioTime(e);
    }
});

window.addEventListener('touchmove', (e) => {
    if (isDragging) {
        updateAudioTime(e.touches[0]);
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        audio.play(); // Reprendre la lecture après le glissement
    }
});

window.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;
        audio.play(); // Reprendre la lecture après le glissement
    }
});