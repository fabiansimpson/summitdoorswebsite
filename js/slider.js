"use strict";

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".btn--slider-left");
  const btnRight = document.querySelector(".btn--slider-right");
  let timerId;
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // functionalities
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
  };
  goToSlide(0);

  function slideTimer(time) {
    timerId = setInterval(function () {
      nextSlide();
    }, time);
  }
  slideTimer(6800);

  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    clearInterval(timerId);
    slideTimer(6800);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;
    goToSlide(curSlide);
    clearInterval(timerId);
    slideTimer(6800);
  };

  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();

    // e.key === "ArrowRight" && nextSlide();
  });
};
slider();
