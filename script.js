AOS.init();
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});
const countdownElement = document.getElementById("countdown");
// The reason for setting the time to 16:30:00Z is that Tokyo is 9 hours ahead of Coordinated Universal Time (UTC), 
// so when it is 9:30 AM in Tokyo, it is 0:30 AM UTC. 
// Therefore, you need to subtract 9 hours from 9:30 AM to convert it to UTC time, which is 16:30:00 on the previous day, May 5th.
const deadline = new Date("2023-04-30T23:59:59Z"); // Set your deadline date here

function updateCountdown() {
  const now = new Date();
  const remainingTime = deadline - now;

  if (remainingTime <= 0) {
    countdownElement.innerHTML = "00 days 00:00:00";
  } else {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}日 ${hours
      .toString()}時間 ${minutes.toString()}分 ${seconds
        .toString()}秒`;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
