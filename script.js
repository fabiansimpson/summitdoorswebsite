"use strict";

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
      if (!sectionEl) return;
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const bodyEl = document.querySelector("body");
const sectionHeroEl = document.querySelector("header");
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

//if it's already visible on pageload, add special class to get transition anyway
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

////////////////////////////////////////////////////////
// Open and close navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
