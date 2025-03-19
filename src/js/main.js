document.addEventListener("DOMContentLoaded", () => {
  var burger = document.querySelector(".burger");
  var burgerArrow = document.querySelector(".burger-arrow");

  burgerArrow.addEventListener("click", () => {
    burger.classList.toggle("closed");
    burgerArrow.classList.toggle("active");
  });
});
