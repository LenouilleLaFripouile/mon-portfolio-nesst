document.addEventListener("DOMContentLoaded", () => {
  var burger = document.querySelector(".burger");
  var burgerArrow = document.querySelector(".burger-arrow");

  burgerArrow.addEventListener("click", () => {
    burger.classList.toggle("closed");
    burgerArrow.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var videoCards = document.querySelectorAll(".video-card");

  var observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pop-animation");
        }
      });
    },
    { threshold: 0.7 } // Déclenche l'animation à 70% de visibilité
  );

  videoCards.forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".photo-collection1");
  let scrollAmount = 0;
  let scrollSpeed = 2; // Vitesse de déplacement
  let maxScroll = carousel.scrollWidth / 2; // Scroll infini

  function autoScroll() {
    if (scrollAmount >= maxScroll) {
      scrollAmount = 0; // Reset pour un effet infini
    } else {
      scrollAmount += scrollSpeed;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll(); // Lance l’animation
});
