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