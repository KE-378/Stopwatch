
let timer; // Timer variable
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.getElementById('display');
let startStopButton = document.getElementById('startStopButton');
let resetButton = document.getElementById('resetButton');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

function startStop() {
    if (startStopButton.textContent === 'Start') {
        startStopButton.textContent = 'Stop';
        timer = setInterval(updateTime, 1000);
    } else {
        startStopButton.textContent = 'Start';
        clearInterval(timer);
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return (time < 10) ? '0' + time : time;
}

function reset() {
    clearInterval(timer);
    startStopButton.textContent = 'Start';
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}
