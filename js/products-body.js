"use strict";
// const heroEl = document.querySelector(".js-hero-el");
// const productsMenu = document.querySelector(".products-menu");

// const makeMenuFixed = function (entries) {
//   const [entrie] = entries;
//   console.log(entrie);
// if (entrie.isIntersecting) {
//   productsMenu.classList.add("fixed-menu");
// } else if (productsMenu.classList.contains("fixed-menu")) {
//   // productsMenu.classList.add("bottom-menu");
//   productsMenu.classList.remove("fixed-menu");
// }
// if (
//   productsBody.isIntersecting === false &&
//   )
// ) {
// } else if (productsBody.isIntersecting === true) {
// }
// };

// set up the revealsubheader. Is called upon from the forEach.
// const productsBodyObserver = new IntersectionObserver(makeMenuFixed, {
//   root: null,
// rootMargin: "100% 0px 0px 0px",
// threshold: 1,
// root: document.querySelector(".products-menu"),
// rootMargin: "-100px",
// });

// productsBodyObserver.observe(heroEl);

// console.log(productsBodyObserver);

// console.log(
//   "current sticky pos:",
//   currStickyPos,
//   "\n",
//   "el top: ",
//   productsBody.getBoundingClientRect().top,
//   "\n pageyoffset:",
//   window.pageYOffset,
// );

// console.log(productsBody.getBoundingClientRect().bottom, "\n");

// console.log(productsBody.getBoundingClientRect().y);

window.onscroll = function () {
  const productsBody = document.querySelector(".products-body");
  const stickyMenu = document.querySelector(".side-menu");
  const sectionEl = document.querySelector("#architectural_services");
  // const headerHeight = document.querySelector("header");
  const productsBodyHeight =
    productsBody.getBoundingClientRect().bottom -
    (stickyMenu.getBoundingClientRect().height + 64);

  const currStickyPos =
    productsBody.getBoundingClientRect().top + window.pageYOffset;
  console.log(currStickyPos);
  if (
    window.pageYOffset > currStickyPos &&
    window.pageYOffset < productsBodyHeight
  ) {
    // stickyMenu.style.position("fi");
    stickyMenu.style.top = stickyMenu.getBoundingClientRect().top;
  } else {
    stickyMenu.classList.remove("fixed-menu");
  }
};

// const rect = productsBody.getBoundingClientRect();
// console.log(rect);
// window.addEventListener("scroll", function () {
// console.log("bla");
// console.log("Within scroll", rect);
// });
