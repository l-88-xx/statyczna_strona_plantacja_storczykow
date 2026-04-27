function updateClock() {
    const now = new Date();
    const clock = document.querySelector("#clock");

    if(clock){
        clock.textContent = now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);
updateClock();