const featuresLink = document.querySelectorAll(".nav__link")[0];
const companyLink = document.querySelectorAll(".nav__link")[1];
const careersLink = document.querySelectorAll(".nav__link")[2];
const aboutLink = document.querySelectorAll(".nav__link")[3];
const loginLink = document.querySelectorAll(".nav__link")[4];
const registerBtn = document.querySelector(".nav__registerBtn");

const dropdownFeatures = document.querySelector(".dropdownFeatures");
const dropdownCompany = document.querySelector(".dropdownCompany");

const navArrowFeatures = document.querySelectorAll(".nav__arrow")[0];
const navArrowCompany = document.querySelectorAll(".nav__arrow")[1];

const mainContent = document.querySelector(".container");

const navbar = document.querySelector(".nav");




function detectDropdown(e) {
    if(e.target !== dropdownCompany || dropdownFeatures) {
        if(dropdownCompany.classList.contains("toggleDropdownCompany")){
            navArrowCompany.classList.toggle("invertArrow");
            dropdownCompany.classList.toggle("toggleDropdownCompany");
        }
        else if(dropdownFeatures.classList.contains("toggleDropdownFeat")){
            navArrowFeatures.classList.toggle("invertArrow");
            dropdownFeatures.classList.toggle("toggleDropdownFeat");
        }
    }
}



featuresLink.addEventListener("click", (e) => {

    navArrowFeatures.classList.toggle("invertArrow");
    dropdownFeatures.classList.toggle("toggleDropdownFeat");
    if(dropdownCompany.classList.contains("toggleDropdownCompany")){
        navArrowCompany.classList.toggle("invertArrow");
        dropdownCompany.classList.toggle("toggleDropdownCompany");
    }
    });



companyLink.addEventListener("click", (e) => {
    navArrowCompany.classList.toggle("invertArrow");
    dropdownCompany.classList.toggle("toggleDropdownCompany");
    if(dropdownFeatures.classList.contains("toggleDropdownFeat")){
        navArrowFeatures.classList.toggle("invertArrow");
        dropdownFeatures.classList.toggle("toggleDropdownFeat");
    }

});

mainContent.addEventListener("click", (e) => {
    detectDropdown(e);
});

careersLink.addEventListener("click", (e) => {
    detectDropdown(e);
});

aboutLink.addEventListener("click", (e) => {
    detectDropdown(e);
});

loginLink.addEventListener("click", (e) => {
    detectDropdown(e);
});

registerBtn.addEventListener("click", (e) => {
    detectDropdown(e);
})








