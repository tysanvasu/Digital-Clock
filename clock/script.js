let hrs = document.getElementById("hour");
let min = document.getElementById("minutes");
let sec = document.getElementById("second");
setInterval(() => {

    let time = new Date();
    hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();

    min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
}, 1000)


