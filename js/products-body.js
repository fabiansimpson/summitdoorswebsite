"use strict";

const tabs = document.querySelectorAll(".tabs-link");
const tabsNavigation = document.querySelector(".tabs-nav");
const tabsContent = document.querySelectorAll(".tab-content");

tabsNavigation.addEventListener("click", function (e) {
  const clicked = e.target.closest("a");
  if (!clicked) return;

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
});
