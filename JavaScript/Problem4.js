// Session
let sessionTime = document.getElementById("session_time");
sessionTime.innerHTML = "0";

// Session length
let lengthItem = document.querySelector(".length_item");

// Update the session length based on the sessionTime
lengthItem.innerHTML = sessionTime.textContent;

// Session length buttons
let lengthItemInc = document.getElementById("length_item_inc");
let lengthItemDec = document.getElementById("length_item_dec");

lengthItemInc.addEventListener("click", () => {
    sessionTime.innerHTML = (parseInt(sessionTime.innerHTML) + 5).toString();
    lengthItem.innerHTML = sessionTime.textContent;
});

lengthItemDec.addEventListener("click", () => {
    let currentTime = parseInt(sessionTime.innerHTML);
    if (currentTime > 0) {
        sessionTime.innerHTML = (currentTime - 5).toString();
        lengthItem.innerHTML = sessionTime.textContent;
    }
});

// Break length
let breakItem = document.querySelector(".break_item");
breakItem.innerHTML = "0";

// Break length buttons
let breakItemInc = document.getElementById("break_item_inc");
let breakItemDec = document.getElementById("break_item_dec");

breakItemInc.addEventListener("click", () => {
    breakItem.innerHTML = (parseInt(breakItem.innerHTML) + 5).toString();
});

breakItemDec.addEventListener("click", () => {
    let currentBreakTime = parseInt(breakItem.innerHTML);
    if (currentBreakTime > 0) {
        breakItem.innerHTML = (currentBreakTime - 5).toString();
    }
});

// Button
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let intervalId;

startButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (parseInt(sessionTime.innerHTML) > 0) {
            sessionTime.innerHTML = (parseInt(sessionTime.innerHTML) - 1).toString();
        }
    }, 1000);
});

resetButton.addEventListener("click", () => {
    sessionTime.innerHTML = "0";
    lengthItem.innerHTML = "0";
    breakItem.innerHTML = "0";
    clearInterval(intervalId);
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
});
