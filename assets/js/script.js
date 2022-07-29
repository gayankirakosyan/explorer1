"use strict";

let menu = document.querySelector(".menu_body");
let menuBtn = document.querySelector(".menu_icon");
let body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });
  menu.querySelectorAll(".menu_link").forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    });
  });
}

const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    let blockID = anchor.getAttribute('href').substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});