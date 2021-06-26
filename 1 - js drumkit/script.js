/**
 * script.js
 * contains the keybindings that make the audio run in js drumkit
 * TODO: figure out shorter/more elegant code for audio rewind
 */

/*event listener for when a key is pressed*/
window.addEventListener('keydown', a => {

    if (a.key=="a") {
        let audio = document.querySelector('#clap');
        if (!audio) return; //stops function
        audio.currentTime = 0; //rewinds to beginning of sound
        audio.play();

    } else if (a.key=="s") {
        let audio = document.querySelector('#hihat');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } else if (a.key=="d") {
        let audio = document.querySelector('#kick');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } else if (a.key=="f") {
        let audio = document.querySelector('#openhat');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } else if (a.key=="g") {
        let audio = document.querySelector('#boom');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } else if (a.key=="h") {
        let audio = document.querySelector('#ride');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        
    } else if (a.key=="j") {
        let audio = document.querySelector('#snare');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } else if (a.key=="k") {
        let audio = document.querySelector('#tom');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } else if (a.key=="l") {
        document.querySelector('#tink').play();
    }
});

let gridItem = document.querySelector('.grid-item');

document.addEventListener('keydown', function () {
    this.classList.toggle('selected');
});