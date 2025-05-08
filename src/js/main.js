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

window.addEventListener("scroll", () => {
  const home = document.querySelector(".home");
  if (window.scrollY > 100) {
    home.classList.add("hidden");
  } else {
    home.classList.remove("hidden");
  }
});

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/gA9cR0SG1ezF0eta/scene.splinecode");
