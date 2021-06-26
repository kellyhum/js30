/**
 * script.js
 * contains the keybindings that make the audio run in js drumkit
 * TODO: rewrite program into my own version
 */

const playSound = (a) => {
    const audio = document.querySelector(`audio[data-letter="${a.key}"]`); //selects specific audio elements
    const item = document.querySelector(`.grid-item[data-letter="${a.key}"]`); //selects specific grid item element
    if (!audio) return; //breaks code
    audio.currentTime = 0; //reverts audio file back to 0:00
    audio.play(); //plays audio files
    
    item.classList.toggle('selected'); //toggles class
}

window.addEventListener('keydown', playSound); //event listener for keypresses