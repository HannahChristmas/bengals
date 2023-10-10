// Function to handle user click
function transformToGIF() {
    const stillImage = document.getElementById('still');
    const gifRingingImage = document.getElementById('ringing');
    const audio = document.getElementById('ringing-audio');

    stillImage.style.display = 'none';
    gifRingingImage.style.display = 'block';

    audio.play();

    setTimeout(function () {
        stillImage.style.display = 'block';
        gifRingingImage.style.display = 'none';

        audio.pause();
        audio.currentTime = 0;
    }, 6000); // 6 seconds
}

const stillImage = document.getElementById('still');
stillImage.addEventListener('click', transformToGIF);


// Function to handle device shake
function handleDeviceShake(event) {
    const threshold = 15;
    const acceleration = event.accelerationIncludingGravity;
    const magnitude = Math.sqrt(
        acceleration.x * acceleration.x +
        acceleration.y * acceleration.y +
        acceleration.z * acceleration.z
    );

    if (magnitude > threshold) {
        transformToGIF();
    }
}