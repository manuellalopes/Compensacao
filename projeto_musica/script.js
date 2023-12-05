function playMusic(source) {
    var audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer.paused || audioPlayer.src !== source) {
        audioPlayer.src = source;
        audioPlayer.play();
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
}