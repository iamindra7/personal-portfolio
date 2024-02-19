"use strict";
const homepage = document.querySelector(".about");
const aboutpage = document.querySelector(".actual-about");
const portfoliopage = document.querySelector(".portfolio");
const contactpage = document.querySelector(".connect");
const home = document.querySelector(".home-menu");
const about = document.querySelector(".about-menu");
const portfolio = document.querySelector(".portfolio-menu");
const contact = document.querySelector(".contact-menu");
const color = document.querySelector(":root");
// var colorstyle = getComputedStyle(color);
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const pink = document.querySelector(".pink");
const purple = document.querySelector(".purple");

const grfnc = function () {
  color.style.setProperty("--primary-color", "green");
  color.style.setProperty("--secondary-color", "#56fc03");
};
const rdfnc = function () {
  color.style.setProperty("--primary-color", "red");
  color.style.setProperty("--secondary-color", "#ee3131");
};
const ylfnc = function () {
  color.style.setProperty("--primary-color", "yellow");
  color.style.setProperty("--secondary-color", "#ede655");
};
const pnkfnc = function () {
  color.style.setProperty("--primary-color", "pink");
  color.style.setProperty("--secondary-color", "##e3a3cc");
};
const prplfnc = function () {
  color.style.setProperty("--primary-color", "purple");
  color.style.setProperty("--secondary-color", "#ad4ef5");
};

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
green.addEventListener("click", grfnc);
red.addEventListener("click", rdfnc);
yellow.addEventListener("click", ylfnc);
pink.addEventListener("click", pnkfnc);
purple.addEventListener("click", prplfnc);
