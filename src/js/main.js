import { Application } from "@splinetool/runtime";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

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

  const canvas = document.getElementById("canvas3d");
  if (canvas) {
    const app = new Application(canvas);
    app.load("https://prod.spline.design/gA9cR0SG1ezF0eta/scene.splinecode");
  }
});
