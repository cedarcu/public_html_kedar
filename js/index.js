var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

var muteButton = document.getElementById("mu");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

muteButton.addEventListener("click", function() {
if (!vid.muted) {
  vid.muted = true;
  muteButton.innerHTML = "silenced";
    } else {
		vid.muted = false;
  muteButton.innerHTML = "silence";
   }
})