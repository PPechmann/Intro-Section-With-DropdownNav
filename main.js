const featuresLink = document.querySelectorAll(".nav__link")[0];
const companyLink = document.querySelectorAll(".nav__link")[1];
const careersLink = document.querySelectorAll(".nav__link")[2];
const aboutLink = document.querySelectorAll(".nav__link")[3];
const loginLink = document.querySelectorAll(".nav__link")[4];
const registerBtn = document.querySelector(".nav__registerBtn");

const dropdownFeatures = document.querySelector(".dropdownFeatures");
const dropdownCompany = document.querySelector(".dropdownCompany");


const mainContent = document.querySelector(".container");

const navbar = document.querySelector(".nav");
const navBurguer = document.querySelector(".nav__burguer");

const sideNav = document.querySelector(".sideNav--hidden");

const overlay = document.querySelector(".overlay");

const sideNavFeat = document.querySelector(".sideNavFeatLink");
const sideNavCompany = document.querySelector(".sideNavCompanyLink");

const sideNavArrowFeatures = document.querySelectorAll(".sideNav__arrow")[0];
const sideNavArrowCompany = document.querySelectorAll(".sideNav__arrow")[1];
const navArrowFeatures = document.querySelectorAll(".nav__arrow")[0];
const navArrowCompany = document.querySelectorAll(".nav__arrow")[1];

const sideNavFeatList = document.querySelector(".sideNavFeat__list");
const sideNavCompanyList = document.querySelector(".sideNavCompany__list");







/*detects if another menu is active, then closes it*/
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


/*listener for features dropdown click*/
featuresLink.addEventListener("click", (e) => {
    navArrowFeatures.classList.toggle("invertArrow");
    dropdownFeatures.classList.toggle("toggleDropdownFeat");
    if(dropdownCompany.classList.contains("toggleDropdownCompany")){
        navArrowCompany.classList.toggle("invertArrow");
        dropdownCompany.classList.toggle("toggleDropdownCompany");
    }
    });


/*listener for company dropdown click*/
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
});


/*listener for the tab and phone size burger menu*/
navBurguer.addEventListener("click", (e) => {
    sideNav.style.animation = "fadeIn .3s 1";
    sideNav.classList.toggle("sideNav--visible");
    navBurguer.classList.toggle("nav__burguer--closed");
    overlay.classList.toggle("activateOverlay");
});





/*listeners for the collapsable menu links (features and company)*/
sideNavFeat.addEventListener("click", () => {
    sideNavArrowFeatures.classList.toggle("invertArrow");
    sideNavFeatList.classList.toggle("sideNavFeat__list--visible");
    if(sideNavCompanyList.classList.contains("sideNavCompany__list--visible")){
        sideNavArrowCompany.classList.toggle("invertArrow");
        sideNavCompanyList.classList.toggle("sideNavCompany__list--visible");
    }
});

sideNavCompany.addEventListener("click", () => {
    sideNavArrowCompany.classList.toggle("invertArrow");
    sideNavCompanyList.classList.toggle("sideNavCompany__list--visible");
    if(sideNavFeatList.classList.contains("sideNavFeat__list--visible")){
        sideNavArrowCompany.classList.toggle("invertArrow");
        sideNavFeatList.classList.toggle("sideNavFeat__list--visible");
    }
});








