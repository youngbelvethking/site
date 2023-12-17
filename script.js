document.getElementById('videoModal').style.display = 'none';

function openVideoModal() {
    document.getElementById('videoModal').style.display = 'flex';
    document.getElementById('videoPlayer').play();
}

function closeVideoModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoPlayer').pause();
}

document.getElementById('videoButton').addEventListener('click', openVideoModal);