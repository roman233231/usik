let endTime = localStorage.getItem("usykEndTime");

if (!endTime) {
  const now = new Date().getTime();
  endTime = now + 10 * 60 * 1000; // 10 хвилин
  localStorage.setItem("usykEndTime", endTime);
}

function updateTimer() {
  const now = new Date().getTime();
  let distance = endTime - now;

  if (distance <= 0) {
    // Встановлюємо всі цифри в 0
    const digits = document.querySelectorAll("#timer .time-box");
    digits.forEach(d => d.textContent = "0");
    clearInterval(timerInterval);
    return;
  }

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const minStr = String(minutes).padStart(2, "0");
  const secStr = String(seconds).padStart(2, "0");

  // Встановлюємо цифри по спану
  const digits = document.querySelectorAll("#timer .time-box");
  digits[0].textContent = "0";      // години (00)
  digits[1].textContent = "0";      
  digits[2].textContent = minStr[0];
  digits[3].textContent = minStr[1];
  digits[4].textContent = secStr[0];
  digits[5].textContent = secStr[1];
}


const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// лічильник місць
let spots = localStorage.getItem("usykSpots") || 97;
document.getElementById("spots-btn").textContent = spots;

setInterval(() => {
  if (spots > 3) {
    spots--;
    document.getElementById("spots-btn").textContent = spots;
    localStorage.setItem("usykSpots", spots);
  }
}, 5000);

// поява
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("main").classList.add("visible");
});
