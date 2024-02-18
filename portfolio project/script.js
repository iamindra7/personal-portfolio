"use strict";
const homepage = document.querySelector(".about");
const aboutpage = document.querySelector(".actual-about");
const portfoliopage = document.querySelector(".portfolio");
const contactpage = document.querySelector(".connect");
const home = document.querySelector(".home-menu");
const about = document.querySelector(".about-menu");
const portfolio = document.querySelector(".portfolio-menu");
const contact = document.querySelector(".contact-menu");

const showhome = function () {
  homepage.classList.remove("hidden");
  home.classList.add("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  portfoliopage.classList.add("hidden");
  aboutpage.classList.add("hidden");
  contactpage.classList.add("hidden");
};
const showabout = function () {
  homepage.classList.add("hidden");
  home.classList.remove("active");
  about.classList.add("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  portfoliopage.classList.add("hidden");
  aboutpage.classList.remove("hidden");
  contactpage.classList.add("hidden");
};
const showpof = function () {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.add("active");
  contact.classList.remove("active");
  homepage.classList.add("hidden");
  portfoliopage.classList.remove("hidden");
  aboutpage.classList.add("hidden");
  contactpage.classList.add("hidden");
};
const showcont = function () {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.add("active");
  homepage.classList.add("hidden");
  portfoliopage.classList.add("hidden");
  aboutpage.classList.add("hidden");
  contactpage.classList.remove("hidden");
};

home.addEventListener("click", showhome);
about.addEventListener("click", showabout);
portfolio.addEventListener("click", showpof);
contact.addEventListener("click", showcont);
