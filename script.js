// script.js

document.addEventListener('DOMContentLoaded', function() {
    const videoOverlay = document.getElementById('video-overlay');
    const content = document.getElementById('content');

    setTimeout(function() {
        videoOverlay.style.opacity = '0';
        videoOverlay.addEventListener('transitionend', function() {
            videoOverlay.style.display = 'none';
            content.classList.add('visible');
        }, { once: true });
    }, 3000); // Adjust the timeout duration  video length
});
