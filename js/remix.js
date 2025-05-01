function changeMode(checkbox) {
	originalStyle = document.getElementById("originalStyle");
	remixStyle = document.getElementById("remixStyle");
	modeType = document.getElementById("modeType");

	if (checkbox.checked) {
		originalStyle.disabled = true;
		remixStyle.disabled = false;
		modeType.innerHTML = "REMIX"
		activePlaylist = playlist_remix;
	} else {
		originalStyle.disabled = false;
		remixStyle.disabled = true;
		modeType.innerHTML = "ORIGINAL"
		activePlaylist = playlist;
	};

	audio.pause();
    isPlaying = false;
    updateButtons();
	audio.currentTime = 0;
	addPlaylistElement(activePlaylist);
	playlistLength = Object.keys(activePlaylist).length;
}