//your JS code here. If required.

const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const soundName = button.innerText;
		const audio = document.getElementById(soundName);
		
		if(currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}

		currentAudio = audio;
		audio.play();
	});
});

stopBtn.addEventListener("click", () => {
	if(currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
});