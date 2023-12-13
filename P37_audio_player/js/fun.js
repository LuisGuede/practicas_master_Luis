
// Capturo mi audio
document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('./audio/bamboleo.mp3');

    // Capturo mis botones
    document.getElementById('playBtn').addEventListener('click', playPauseAudio);
    document.getElementById('stopBtn').addEventListener('click', stopAudio);
    document.getElementById('rewindBtn').addEventListener('click', rewindAudio);

    // funcion de mis botones
    function playPauseAudio() {
        if (audio.paused) {
            audio.play();
            playBtn.src = 'img/play_on.svg';
} 
        else {
            audio.pause();
            playBtn.src = 'img/play.svg';
        }
    }

    function stopAudio() {
        audio.pause();
        audio.currentTime = 0;
    }

    function rewindAudio() {
        audio.currentTime -= 0;
    }

});