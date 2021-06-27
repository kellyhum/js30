/**
 * script.js
 * used to calculate time and control animations in js clock
 */

const timeAnimation = () => {
    //declaring variables
    let currentDate = new Date(), //current date
        hours = currentDate.getHours(), //corresponding hours in a 24 hour format
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds(),
        hourDeg = (hours*30) + 90, //converting hours to degrees by multiplying by 30, add 90 for correct position on screen
        minDeg = (minutes*6) + 90,
        secDeg = (seconds*6) + 90;

    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minDeg}deg)`;
    document.querySelector('.sec-hand').style.transform = `rotate(${secDeg}deg)`;
}

setInterval(timeAnimation, 1000);

