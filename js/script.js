"use strict";
// Smooth scrolling animation
// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     //scroll back to top, just #
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.remove("nav-open");
//   });
// });

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      // const headerEl = document.querySelector("#header");
      // headerEl.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     console.log(ent);
//     if (ent.isIntersecting === false) headerEl.classList.add("sticky-bg");
//     else if (ent.isIntersecting === true)
//       headerEl.classList.remove("sticky-bg");
//   },
//   {
//     // inside of the browser window
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   },
// );

// obs.observe(sectionHeroEl);
const bodyEl = document.querySelector("body");
const sectionHeroEl = document.querySelector(".js-hero-el");
// const btnEl = document.querySelector(".btn-get-an-estimate--fixed");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) bodyEl.classList.add("show-btn");
    else if (ent.isIntersecting === true) bodyEl.classList.remove("show-btn");
  },
  {
    root: null,
    treshold: 0,
    // rootMargin: "-96px",
  },
);

// obs.observe(sectionHeroEl)
obs.observe(sectionHeroEl);

////////////////////////////////
// Lifecycle DOM Events
////////////////////////////////
// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log("HTML parsed and DOM tree built!", e);
// });
// window.addEventListener("load", function (e) {
//   console.log("Page fully loaded!", e);
// });

const allSubHeaders = document.querySelectorAll(".subheading");

const revealSubHeader = function (entries, observer) {
  // For every element we looped over, we do another forEach loop to make sure the element in view is shown.
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("element--hidden");
    observer.unobserve(entry.target);
  });
};

// set up the revealsubheader. Is called upon from the forEach.
const subHeaderObserver = new IntersectionObserver(revealSubHeader, {
  root: null,
  treshold: 0.15,
  // rootMargin: "-100px",
});

//loop over all the elements we want to observe
allSubHeaders.forEach(function (subHeader) {
  // set up every obverver
  subHeaderObserver.observe(subHeader);
  //add all the element hidden classes in javscript so that users without javascript still see the elements
  subHeader.classList.add("element--hidden");
});
