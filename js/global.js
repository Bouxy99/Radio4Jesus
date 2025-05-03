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
let remix = false;

const playlist = {
    1: { id: 1, name: "Trouver son amour", file: "audio/Trouver_son_amour.mp3", date:'2025-03-21', remix:"audio/remix/Trouver_son_amour_REMIX.mp3" },
    2: { id: 2, name: "Psaumes 33", file: "audio/Psaumes_33.mp3", date:'2025-03-28' },
    3: { id: 3, name: "Les murs tombent", file: "audio/Les_murs_tombent.mp3", date:'2025-04-06' },
    4: { id: 4, name: "Un horizon meilleur", file: "audio/Un_horizon_meilleur.mp3", date:'2025-04-14', remix:"audio/remix/Un_horizon_meilleur_REMIX.mp3" },
    5: { id: 5, name: "Dieu si grand", file: "audio/Dieu_si_grand.mp3", date:'2025-04-18' },
    6: { id: 6, name: "Toujours près de moi", file: "audio/Toujours_pres_de_moi.mp3", date:'2025-04-26' }
}

const playlist_remix = {
    1: { id: 1.1, name: "Trouver son amour", file: "audio/remix/Trouver_son_amour_REMIX.mp3", date:'2025-05-01' },
    2: { id: 2.1, name: "Psaumes 33", file: "audio/remix/Psaumes_33_REMIX.mp3", date:'2025-05-04' },
    3: { id: 4.1, name: "Un horizon meilleur", file: "audio/remix/Un_horizon_meilleur_REMIX.mp3", date:'2025-05-01' }
}

let activePlaylist = playlist;
let playlistLength = Object.keys(activePlaylist).length;

// Ajouter les éléments de la playlist dynamiquement
function addPlaylistElement(pl) {
	playlistElement.innerHTML = "";
	for (let index in pl) {
		index = parseFloat(index);
		const li = document.createElement('li');
		li.classList.add('playlist-item');
		li.textContent = pl[index].name;

		if (pl[index].file) {
			li.addEventListener('click', () => loadTrack(index));
		};

		playlistElement.appendChild(li);
	}
}

addPlaylistElement(activePlaylist);