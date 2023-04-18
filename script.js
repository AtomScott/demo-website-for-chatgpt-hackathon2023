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
const deadline = new Date("2023-05-02T00:00:00"); // Set your deadline date here

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
