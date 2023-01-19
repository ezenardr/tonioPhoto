"use strict";

const navLinks = document.querySelector(".nav-links");
const contactBtn = document.querySelector(".btn-contact");
// Implementing smooth scrolling
const scrollFunc = function (e) {
    e.preventDefault();
    const clicked = e.target.getAttribute("href");
    // console.log(clicked);
    if (!clicked) return;
    document.querySelector(clicked).scrollIntoView({ behavior: "smooth" });
};
navLinks.addEventListener("click", scrollFunc);
contactBtn.addEventListener("click", scrollFunc);
