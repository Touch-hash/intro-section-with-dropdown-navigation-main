let toggleMenu = document.querySelector("#toggleMenu");
let overLay = document.querySelector(".overlay");
let btnCompany = document.getElementById("btnCompany");
let img = document.querySelectorAll("#img");
console.log(img);
let btnFeat = document.querySelector("#btnFeat");
let ulFeat = document.querySelector("#ulFeat");
let ulCompany = document.querySelector("#ulCompany");
let menu = document.querySelector(".menu");
let menuClose = document.querySelector("#menuClose");
let featToggle = document.querySelector("#featToggle");
let CompanyToggle = document.getElementById("CompanyToggle");
console.log(CompanyToggle);
let ulToggleFeat = document.querySelector("#ulToggleFeat");
let ulToggleComp = document.querySelector("#ulToggleComp");

btnCompany.addEventListener("click", () => {
  btnCompany.classList.toggle("arrow-top");
  arrow();
  if (btnCompany.classList.contains("arrow-top")) {
    ulCompany.classList.remove("opacity-100");
  } else {
    ulCompany.classList.add("opacity-100");
  }
});
btnFeat.addEventListener("click", () => {
  btnFeat.classList.toggle("arrow-top");
  arrow();
  if (btnFeat.classList.contains("arrow-top")) {
    ulFeat.classList.remove("opacity-100");
  } else {
    ulFeat.classList.add("opacity-100");
  }
});
menu.addEventListener("click", () => {
  toggleMenu.classList.add("to-right");
  overLay.classList.remove("hidden");
});
menuClose.addEventListener("click", () => {
  toggleMenu.classList.remove("to-right");
  overLay.classList.add("hidden");
});
overLay.addEventListener("click", () => {
  overLay.classList.add("hidden");
  toggleMenu.classList.remove("to-right");
});
function arrow() {
  if (btnCompany.classList.contains("arrow-top")) {
    img[1].src = "images/icon-arrow-up.svg";
  } else {
    img[1].src = "images/icon-arrow-down.svg";
  }
  if (btnFeat.classList.contains("arrow-top")) {
    img[0].src = "images/icon-arrow-up.svg";
  } else {
    img[0].src = "images/icon-arrow-down.svg";
  }
  if (CompanyToggle.classList.contains("arrow-top")) {
    img[3].src = "images/icon-arrow-up.svg";
  } else {
    img[3].src = "images/icon-arrow-down.svg";
  }
  if (featToggle.classList.contains("arrow-top")) {
    img[2].src = "images/icon-arrow-up.svg";
  } else {
    img[2].src = "images/icon-arrow-down.svg";
  }
}

/* start toggle */

CompanyToggle.addEventListener("click", () => {
  CompanyToggle.classList.toggle("arrow-top");
  arrow();
  if (CompanyToggle.classList.contains("arrow-top")) {
    ulToggleComp.classList.remove("show");
  } else {
    ulToggleComp.classList.add("show");
  }
});
featToggle.addEventListener("click", () => {
  featToggle.classList.toggle("arrow-top");
  arrow();
  if (featToggle.classList.contains("arrow-top")) {
    ulToggleFeat.classList.remove("show");
  } else {
    ulToggleFeat.classList.add("show");
  }
});
/* end toggle */
