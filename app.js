// Target DOM element
const video = document.getElementById('video')
const playButton = document.getElementById('play')
const stopButton = document.getElementById('stop')
const progressBar = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Function for playing video on clicking effect
function togglehandleStatus() {
    if (video.paused) {
        video.play();
      var icon = document.querySelector('i');
      icon.classList.toggle('fa-pause');
    } else {
    video.pause();
    var icon = document.querySelector('i');
    icon.classList.toggle('fa-pause');
    playButton.classList.remove("playing");
    }
}

// Function to stop video
function stopVideo(){
    video.currentTime=0;
    video.pause()
}

function updateTimestamp(){
    progressBar.value = (video.currentTime/video.duration) * 100;

    // We use this for minuetes in the duration of the video
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins)
    }
    // We use this for seconds in the duration of the video
    let secs =  Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs)
    }
    // Updating timestamp inner HTML content
    timestamp.innerHTML = `${mins}:${secs}`
}

// This video is used to set Progress of the video
function setVideoProgress(){
    video.currentTime = (+progressBar.value*video.duration) / 100;
}

// Targeting Video
video.addEventListener('click', togglehandleStatus)
video.addEventListener('timeupdate',updateTimestamp)

// Events
playButton.addEventListener('click', togglehandleStatus)
stopButton.addEventListener('click', stopVideo)
progressBar.addEventListener('change', setVideoProgress)