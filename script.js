//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let currentAudio = null;

sounds.forEach(sound => {
	const button = [...document.querySelectorAll(".btn")]
		.find(btn => btn.innerText === sound);

	const audio = new Audio(`.sounds/${sound}.mp3`);

	button.addEventListener("click", () => {
		if(currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}

		currentAudio = audio;
		audio.play();
	});
});

document.querySelector(".stop").addEventListener("click", () => {
	if(currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
});