var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay);
	video.loop = false;
	console.log('loop is set to ' + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.volume);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime += 10;
	console.log(video.currentTime);
	if (video.currentTime >= 67.40333) {
		video.currentTime = 0;
		console.log("video ended");
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted === false) {
		this.innerHTML = "Unmute";
		video.muted = true;
	}
	else {
		this.innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Slide");
	console.log((video.volume*100)+'%');
	video.volume = this.value/100;
	console.log((video.volume*100)+'%');
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("new school");
	video.classList.remove("oldSchool");
});

