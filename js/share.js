// Fonction pour récupérer les paramètres de l'URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}
const params = getUrlParams();

// Activer la musique de l'argument "play"
if (params.shared) {
    idShared = parseInt(params.shared);
    if (idShared <= playlistLength) {
        currentTrack = parseInt(idShared);
        updatePlaylistDisplay();
    };
}