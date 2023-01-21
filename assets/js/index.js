"use strict";

const navLinks = document.querySelector(".nav-links");
const contactBtn = document.querySelector(".btn-contact");
const navBar = document.querySelector(".navbar");
const btnOpen = document.querySelector(".icon-mobile-nav-open");
const btnClose = document.querySelector(".icon-mobile-nav-close");
const wrapper = document.querySelector(".wrapper");
// Implementing smooth scrolling
const scrollFunc = function (e) {
    e.preventDefault();
    const clicked = e.target.getAttribute("href");
    // console.log(clicked);
    if (!clicked) return;
    document.querySelector(clicked).scrollIntoView({ behavior: "smooth" });
    navBar.classList.remove("nav-open");
    wrapper.classList.add("hidden");
};
navLinks.addEventListener("click", scrollFunc);
contactBtn.addEventListener("click", scrollFunc);

// Mobile Navigation

btnOpen.addEventListener("click", () => {
    // console.log('ok');
    navBar.classList.add("nav-open");
    wrapper.classList.remove("hidden");
});
btnClose.addEventListener("click", () => {
    navBar.classList.remove("nav-open");
    wrapper.classList.add("hidden");
});
