AOS.init();
const countdownElement = document.getElementById("countdown");
const deadline = new Date("2023-04-30T15:00:00Z");

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

document.addEventListener('DOMContentLoaded', function () {

  const mentorsSection = document.getElementById("mentors");
  const modals = document.querySelectorAll('.modal');
  
  mentorsSection.addEventListener("click", (event) => {
    const button = event.target.closest(".openModal");
    if (!button) return;

    const targetModalId = button.getAttribute('data-modal-id');
    const targetModal = document.getElementById(targetModalId);
    targetModal.classList.remove('opacity-0');
    targetModal.classList.remove('pointer-events-none');
  });

  modals.forEach(modal => {
    const closeModalButton = modal.querySelector('.closeModal');
    
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('opacity-0');
      modal.classList.add('pointer-events-none');
    });
    
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.add('opacity-0');
        modal.classList.add('pointer-events-none');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navContent = document.getElementById('nav-content');
  let menuOpen = false;

  navToggle.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
    menuOpen = !menuOpen;

    // Change the menu icon to a cross when the menu is open
    if (menuOpen) {
      navToggle.innerHTML = `
        <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>`;
    } else {
      navToggle.innerHTML = `
        <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>`;
    }
  });
});
