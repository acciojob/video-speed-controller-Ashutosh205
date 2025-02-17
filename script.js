// Select elements
const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('[name="volume"]');
const speedSlider = document.querySelector('[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('.skip');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Toggle Play/Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Pause icon
    } else {
        video.pause();
        playButton.textContent = '►'; // Play icon
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Seek Video
function seekVideo(event) {
    const newTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

// Skip Forward/Backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Update Volume
function updateVolume() {
    video.volume = volumeSlider.value;
}

// Update Playback Speed
function updateSpeed() {
    video.playbackRate = speedSlider.value;
}

// Event Listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', seekVideo);
skipButtons.forEach(button => button.addEventListener('click', skip));
volumeSlider.addEventListener('input', updateVolume);
speedSlider.addEventListener('input', updateSpeed);
