document.addEventListener("DOMContentLoaded", () => {
  // --- BURGER ---
  const burger = document.querySelector(".burger");
  const burgerArrow = document.querySelector(".burger-arrow");

  if (burger && burgerArrow) {
    burgerArrow.addEventListener("click", () => {
      burger.classList.toggle("closed");
      burgerArrow.classList.toggle("active");
    });
  }

  // --- POP ANIMATION ---
  const videoComps = document.querySelectorAll(".video-comp");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target.querySelector(".video-card");
          const glow = entry.target.querySelector(".video-glow");

          if (card) card.classList.add("pop-animation");
          if (glow) glow.classList.add("pop-animation");
        }
      });
    },
    { threshold: 0.7 } // Apparition à 70% visible
  );

  videoComps.forEach((comp) => observer.observe(comp));
});

import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/gA9cR0SG1ezF0eta/scene.splinecode");
