// Function to transform the image into a GIF
function transformToGIF() {
    const stillImage = document.getElementById('still');
    const gifGriddyImage = document.getElementById('griddy');
    const audio = document.getElementById('ringing-audio');

    // Hide the still image
    stillImage.style.display = 'none';

    // Show the GIF image
    gifGriddyImage.style.display = 'block';

    // Play the bell audio
    audio.play();

    setTimeout(function () {
        // Show the original image
        stillImage.style.display = 'block';

        // Hide the GIF image
        gifGriddyImage.style.display = 'none';

        // Pause and reset the audio
        audio.pause();
        audio.currentTime = 0;
    }, 6000); // 6 seconds
}

// Add a click event listener to the image with the ID "still"
const stillImage = document.getElementById('still');
stillImage.addEventListener('click', transformToGIF);



// Function to handle device shake
function handleDeviceShake(event) {
    // Check if acceleration data exceeds a threshold
    const threshold = 15; // Adjust this threshold as needed
    const acceleration = event.accelerationIncludingGravity;
    const magnitude = Math.sqrt(
        acceleration.x * acceleration.x +
        acceleration.y * acceleration.y +
        acceleration.z * acceleration.z
    );

    if (magnitude > threshold) {
        alert("Shake it up!");
    }
}

// Add a devicemotion event listener to detect shaking
if ('DeviceMotionEvent' in window) {
    // Browser supports the devicemotion event
    window.addEventListener('devicemotion', handleDeviceShake);
} else {
    // Browser does not support the devicemotion event
    alert("Nope!");
}