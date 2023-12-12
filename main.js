var count = document.getElementById('count');
const start = document.getElementById('btn-start');
const stop = document.getElementById('btn-stop');
const restart = document.getElementById('btn-restart');

let intervalID = null;
let counter = 0;

start.addEventListener('click', () => {
    intervalID = setInterval(() => {
        counter++;
        let minutes = Math.floor(counter / 60);
        let seconds = counter % 60;
        count.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(intervalID);
});

restart.addEventListener('click', () => {
    clearInterval(intervalID);
    counter = 0;
    count.textContent = '0:00';
});

