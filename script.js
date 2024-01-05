const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');

// Data final do contador | Utilizando meses com nome em Inglês
const release = "01 Dec 2024"

function CountDown() {
    const releaseDate = new Date(release);
    const today = new Date();

    const totalSeconds = (releaseDate - today) / 1000;

    const finalDay = Math.floor(totalSeconds / 60 / 60 / 24);
    const finalHour = Math.floor(totalSeconds / 60 / 60) % 24;
    const finalMinute = Math.floor(totalSeconds / 60) % 60;
    const finalSecond = Math.floor(totalSeconds) % 60;

    day.innerHTML = formatDate(finalDay);
    hour.innerHTML = formatDate(finalHour);
    minute.innerHTML = formatDate(finalMinute);
    second.innerHTML = formatDate(finalSecond);
}

function formatDate(date) {
    return date < 10 ? `0${date}` : date;
}

CountDown();
// Atualizar o contador durante 1 segundo sempre que a função estiver sendo executada.
setInterval(CountDown, 1000);