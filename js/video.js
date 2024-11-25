var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("AutoPlay is set to", video.autoplay);
	console.log("Loop is set to", video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate*=0.9;
	console.log("New speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate/=0.9;
	console.log("New speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	if (video.currentTime < video.duration-10){
		video.currentTime = video.currentTime + 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		this.innerHTML = "Unmute"
		console.log("Video is Muted")
	}
	else{
		video.muted = true;
		this.innerHTML = "Mute"
		console.log("Video is Unmuted")
	}
	
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%";
	console.log("New Volume is", video.volume);
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style");
	video.classList.remove("oldSchool");
});