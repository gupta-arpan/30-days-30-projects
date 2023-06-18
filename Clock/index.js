const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setTime() {
    const now = new Date;
    // seconds
    const seconds = now.getSeconds();
    if (seconds === 0) {
        secondHand.style.transition = "all 0s";
    }
    const secondsDegrees = ((seconds / 60) * 360)+ 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //minutes
    const minutes = now.getMinutes();
    if (minutes === 0) {
      minuteHand.style.transition = "all 0s";
    }
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    //hours
    const hours = now.getHours();
    if (hours === 0 || hours === 12) {
      hourHand.style.transition = "all 0s";
    }
    const hourDegrees = (hours * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setTime, 1000);