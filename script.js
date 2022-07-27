let body = document.getElementById("body")
let dropdown = document.getElementById("dropdown")
let feature_items = document.getElementById("feature_items")
let company_items = document.getElementById("company_items")
let arrowDownFeatures = document.getElementById("arrow_down_features")
let arrowUpFeatures = document.getElementById("arrow_up_features")
let arrowDownCompany = document.getElementById("arrow_down_company")
let arrowUpCompany = document.getElementById("arrow_up_company")


function openMenu() {
  dropdown.classList.remove("hidden")
}

function closeMenu() {
  dropdown.classList.add("hidden")
}

function openFeatures(){
  feature_items.classList.remove("hidden")
  arrowDownFeatures.classList.add("hidden")
  arrowUpFeatures.classList.remove("hidden")

}

function closeFeatures(){
  feature_items.classList.add("hidden")
  arrowDownFeatures.classList.remove("hidden")
  arrowUpFeatures.classList.add("hidden")
}

function openCompany(){
  company_items.classList.remove("hidden")
  arrowDownCompany.classList.add("hidden")
  arrowUpCompany.classList.remove("hidden")

}

function closeCompany(){
  company_items.classList.add("hidden")
  arrowDownCompany.classList.remove("hidden")
  arrowUpCompany.classList.add("hidden")
}

/* Get Screen Size */
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let desktopItems = document.querySelectorAll(".desktop")
let mobileItems = document.querySelectorAll(".mobile")

if (windowWidth < 1024) {
  desktopItems.forEach(item => {
    item.classList.add("hidden")
  })
} else {
  mobileItems.forEach(item => {
    item.classList.add("hidden")
  })
}

/* Desktop Version */

let dsk_feature_items = document.getElementById("desktop_features_dropdown")
let dsk_company_items = document.getElementById("desktop_company_dropdown")
let dsk_arrowDownFeatures = document.getElementById("dsk_arrow_down_features")
let dsk_arrowUpFeatures = document.getElementById("dsk_arrow_up_features")
let dsk_arrowDownCompany = document.getElementById("dsk_arrow_down_company")
let dsk_arrowUpCompany = document.getElementById("dsk_arrow_up_company")

function openDesktopFeatures(){
  dsk_feature_items.classList.remove("hidden")
  dsk_arrowDownFeatures.classList.add("hidden")
  dsk_arrowUpFeatures.classList.remove("hidden")

}

function closeDesktopFeatures(){
  dsk_feature_items.classList.add("hidden")
  dsk_arrowDownFeatures.classList.remove("hidden")
  dsk_arrowUpFeatures.classList.add("hidden")
}

function openDesktopCompany(){
  dsk_company_items.classList.remove("hidden")
  dsk_arrowDownCompany.classList.add("hidden")
  dsk_arrowUpCompany.classList.remove("hidden")

}

function closeDesktopCompany(){
  dsk_company_items.classList.add("hidden")
  dsk_arrowDownCompany.classList.remove("hidden")
  dsk_arrowUpCompany.classList.add("hidden")
}