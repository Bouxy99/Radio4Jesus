function downloadFile() {
    const hyperlink = document.createElement('a');
    hyperlink.href = activePlaylist[currentTrack].file;
    hyperlink.target = '_blank';
    hyperlink.download = activePlaylist[currentTrack].name + '.mp3';

    const mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    hyperlink.dispatchEvent(mouseEvent);
    (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);
}