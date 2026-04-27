"use strict";

const tabs = document.querySelectorAll(".tabs-link");
const tabsNavigation = document.querySelector(".tabs-nav");
const tabsContent = document.querySelectorAll(".tab-content");

function processAjaxData(urlPath) {
  console.log(document.title);
  console.log(urlPath);
  const pageTitle = document.title;
  window.history.pushState({ page: 1 }, pageTitle, urlPath);
}

tabsNavigation.addEventListener("click", function (e) {
  const clicked = e.target.closest("a");
  if (!clicked) return;
  processAjaxData(e.target.href);
  // Remove active classes
  tabs.forEach((t) => {
    t.classList.remove("tabs-link--active");
  });
  tabsContent.forEach((t) => {
    t.classList.remove("tab-content--active");
  });

  // Add active classes
  clicked.classList.add("tabs-link--active");
  document
    .querySelector(`.tab-content--${clicked.dataset.tab}`)
    .classList.add("tab-content--active");
  document.querySelector(".section--products").scrollIntoView();
  // Add an observer to make it only scroll when title is out of viewport
});

const checkForLink = function () {
  tabs.forEach((el) => {
    if (document.URL === el.href) {
      tabs[0].classList.remove("tabs-link--active");
      el.classList.add("tabs-link--active");
      tabsContent[0].classList.remove("tab-content--active");
      document
        .querySelector(`.tab-content--${el.dataset.tab}`)
        .classList.add("tab-content--active");
    }
  });
};

checkForLink();
