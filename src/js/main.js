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
