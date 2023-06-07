let menuicon = document.querySelector(".menuicon");
let box = document.querySelector(".box");
let menuicon2 = document.querySelector(".menuicon2");
let header = document.querySelector(".header");
let main = document.querySelector(".main");
let menu1 = document.querySelector(".menu1");
let popup1 = document.querySelector(".popup1");
let menu2 = document.querySelector(".menu2");
let popup2 = document.querySelector(".popup2");
let menu3 = document.querySelector(".menu3");
let menu4 = document.querySelector(".menu4");
let feature = document.querySelector(".feature");
let textfeature = document.querySelector(".textfeature");
let textcompany = document.querySelector(".textcompany");
let company = document.querySelector(".company");
let uparrow1 = document.querySelector(".uparrow1");
let uparrow2 = document.querySelector(".uparrow2");
let downarrow1 = document.querySelector(".downarrow1");
let downarrow2 = document.querySelector(".downarrow2");
let uparrowdes1 = document.querySelector(".uparrowdes1");
let uparrowdes2 = document.querySelector(".uparrowdes2");
let downarrowdes1 = document.querySelector(".downarrowdes1");
let downarrowdes2 = document.querySelector(".downarrowdes2");

menuicon.onclick = function () {
  menuicon.classList.toggle("active");
  menuicon2.classList.toggle("active");
  box.classList.toggle("active");
  main.classList.toggle("active");
};

menuicon2.onclick = function () {
  menuicon.classList.toggle("active");
  menuicon2.classList.toggle("active");
  box.classList.toggle("active");
  main.classList.toggle("active");
};

popup1.onclick = function () {
  menu1.classList.toggle("active");
  popup1.classList.toggle("active");
  uparrowdes1.classList.toggle("active");
  downarrowdes1.classList.toggle("active");
};

popup2.onclick = function () {
  menu2.classList.toggle("active");
  popup2.classList.toggle("active");
  uparrowdes2.classList.toggle("active");
  downarrowdes2.classList.toggle("active");
};

feature.onclick = function () {
  menu3.classList.toggle("active");
  textfeature.classList.toggle("active");
  uparrow1.classList.toggle("active");
  downarrow1.classList.toggle("active");
};
company.onclick = function () {
  menu4.classList.toggle("active");
  textcompany.classList.toggle("active");
  uparrow2.classList.toggle("active");
  downarrow2.classList.toggle("active");
};

document.onclick = function (e) {
  if (!menuicon.contains(e.target) && !box.contains(e.target)) {
    menuicon.classList.remove("active");
    menuicon2.classList.remove("active");
    box.classList.remove("active");
    main.classList.remove("active");
  }
  if (!popup1.contains(e.target) && !menu1.contains(e.target)) {
    menu1.classList.remove("active");
    popup1.classList.remove("active");
    uparrowdes1.classList.remove("active");
    downarrowdes1.classList.remove("active");
  }
  if (!popup2.contains(e.target) && !menu2.contains(e.target)) {
    menu2.classList.remove("active");
    popup2.classList.remove("active");
    uparrowdes2.classList.remove("active");
    downarrowdes2.classList.remove("active");
  }
  if (!feature.contains(e.target) && !menu3.contains(e.target)) {
    menu3.classList.remove("active");
    textfeature.classList.remove("active");
    uparrow1.classList.remove("active");
    downarrow1.classList.remove("active");
  }
  if (!company.contains(e.target) && !menu4.contains(e.target)) {
    menu4.classList.remove("active");
    textcompany.classList.remove("active");
    uparrow2.classList.remove("active");
    downarrow2.classList.remove("active");
  }
};
