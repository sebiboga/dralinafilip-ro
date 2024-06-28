const serviciiDiv = document.querySelector(".servicii__carusel");

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(tomorrow.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;

  console.log(minDate);
  dateInput.min = minDate;
});

function mySubmitFunction(e) {
  e.preventDefault();

  // Clear all input fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("hour").value = "";
  document.getElementById("additionalInfo").value = "";

  // Display confirmation message
  let confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.classList.add("visible");

  setTimeout(() => {
    confirmationMessage.classList.remove("visible");
  }, 4000);

  return false;
}

function closeConfirmation() {
  let confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.classList.remove("visible");
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
  const closeMenuIcon = document.querySelector(".close-menu-icon");
  const navLinksList = document.querySelector(".nav__links__list");
  const navLinks = document.querySelectorAll(".nav__links__list a");
  const logoEl = this.documentElement.querySelector(".nav-logo-container");

  function closeMenu() {
    if (window.innerWidth < 1100) {
      navLinksList.style.display = "none";
      hamburgerMenuIcon.style.display = "block";
      closeMenuIcon.style.display = "none";
    }
  }

  hamburgerMenuIcon.addEventListener("click", function () {
    navLinksList.style.display = "flex";
    hamburgerMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
  });

  closeMenuIcon.addEventListener("click", function () {
    navLinksList.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  logoEl.addEventListener("click", closeMenu);

  const navbarHeight = 68;

  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      console.log(targetElement);
      const offsetTop = targetElement.offsetTop - navbarHeight;

      console.log(offsetTop);

      // Scroll to the element
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }
  const links = document.querySelectorAll(".nav__links__list li a");

  console.log(links);
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove '#'
      scrollToElement(targetId);
    });
  });
});

const intrebariCards = document.querySelectorAll(".intrebari__card");

intrebariCards.forEach((card) => {
  const rightArrowQ = card.querySelector(".arrow-right-q");
  const downArrowQ = card.querySelector(".arrow-down-q");
  const intrebariAnswer = card.querySelector(".intrebari-answer");
  rightArrowQ.addEventListener("click", () => {
    toggleArrows(rightArrowQ, downArrowQ, intrebariAnswer);
  });

  downArrowQ.addEventListener("click", () => {
    toggleArrows(rightArrowQ, downArrowQ, intrebariAnswer);
  });
});

const toggleArrows = (rightArrow, downArrow, intrebariAnswer) => {
  rightArrow.classList.toggle("invisible");
  downArrow.classList.toggle("invisible");
  intrebariAnswer.classList.toggle("invisible");
};

// Add event listeners to each link
