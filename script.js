function displayTimeAndDay() {
    const date = new Date();
    const Day = date.toUTCString().split(' ')[0];
    const Time = date.toUTCString().split(' ')[4];

    document.getElementById("Day").innerHTML = Day;
    document.getElementById("time").innerHTML = Time;
}

displayTimeAndDay();

setInterval(displayTimeAndDay, 1000);