"use strict";

const navLinks = document.querySelector(".nav-links");
const contactBtn = document.querySelector(".btn-contact");
const navigation = document.querySelector(".navigation");
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
    navigation.classList.remove("nav-open");
    wrapper.classList.add("hidden");
};
navLinks.addEventListener("click", scrollFunc);
contactBtn.addEventListener("click", scrollFunc);

// Mobile Navigation
btnOpen.addEventListener("click", () => {
    // console.log('ok');
    navigation.classList.add("nav-open");
    // wrapper.classList.remove("hidden");
});
btnClose.addEventListener("click", () => {
    navigation.classList.remove("nav-open");
    // wrapper.classList.add("hidden");
});

// // sticky Navigation
// let topPage = navigation.offsetTop;
// const stickyNavBar = function () {
//     if (window.scrollY > topPage) {
//         navigation.classList.add("sticky");
//         // console.log('ko');
//     } else {
//         navigation.classList.remove("sticky");
//     }
// };
// window.addEventListener("scroll", stickyNavBar);
