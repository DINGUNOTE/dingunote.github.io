'use strict';


// Smooth-Scrollbar js 
const Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('main'), /* options */);


// tabMenu
const tabMenu = document.querySelectorAll(".tab-menu");
const tabContent = document.querySelectorAll(".tab-content");

tabMenu.forEach((item) => {
    item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
    const tabTarget = item.currentTarget;
    const target = tabTarget.dataset.tab;
    tabMenu.forEach((title) => {
        title.classList.remove("active");
    });
    tabContent.forEach((target) => {
        target.classList.remove("active");
    });
    document.querySelector("#" + target).classList.add("active");
    tabTarget.classList.add("active");
}
