/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbarItems = Array.from(document.querySelectorAll("section"));
let navbarList = document.getElementById("navbar__list");
let itemNumber = 0;
let itemArr = [];
let sectionArr = [];
let coor = [];
let menuLink = document.getElementsByClassName('menu__link');
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// generates a list of all navbar items based on sections in html
function generateListItems() {
    for (item of navbarItems) {
        let sectionName = item.getAttribute("data-nav");
        let sectionLink = item.getAttribute("id");
        let navbarItem = document.createElement("li");
        navbarItem.innerHTML = `<a class='menu__link' id='link${itemNumber}' href='#${sectionLink}'>${sectionName}</a>`;
        itemArr.push(itemNumber);
        itemNumber += 1;
        navbarList.appendChild(navbarItem);
    }
}

// runs through the list of navbar items and finds the location on the page
function getCoordinates() {
    let i = 0;
    for (item of navbarItems) {
        sectionArr[i] = item.getBoundingClientRect();
        coor.push(sectionArr[i].top)
        i += 1;
    }
}

// adds smooth scrolling when clicking a link in the navbar
function smoothScroll() {
    for (i in itemArr) {
        let link = menuLink[i];
        let section = coor[i];
        link.addEventListener('click', function(event){ 
            event.preventDefault();
            window.scrollTo({
                top: section,
                behavior: 'smooth'
            })
        })
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
generateListItems();
getCoordinates();

// options for the InterectionObserver
const options = {
    root: null,
    threshold: 0.5,
}

// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => {
            entry.target.classList.toggle("your-active-class");
        });
    }, options);

sections.forEach(section => {
    observer.observe(section);
})
 

// Scroll to anchor ID using scrollTO event
smoothScroll();


/**
 * End Main Functions
 * */