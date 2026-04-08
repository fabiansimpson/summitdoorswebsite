"use strict";

function includeHTML(includeComponent) {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute(includeComponent);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute(includeComponent);
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
includeHTML("include-header");
includeHTML("include-footer");

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
