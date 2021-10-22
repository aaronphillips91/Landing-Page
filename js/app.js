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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function generateListItems() {
    for (item of navbarItems) {
        var sectionName = item.getAttribute("data-nav");
        var sectionLink = item.getAttribute("id");
        var navbarItem = document.createElement("li");
        navbarItem.innerHTML = `<a class='menu__link' id='link${itemNumber}' href='#${sectionLink}'>${sectionName}</a>`;
        itemArr.push(itemNumber);
        itemNumber += 1;
        navbarList.appendChild(navbarItem);
        //debugging tool to prove that the list items were created.
        console.log(`Created a list item called: ${sectionName}`)
    }
}

function getCoordinates() {
    var i = 0;
    for (item of navbarItems) {
        sectionArr[i] = item.getBoundingClientRect();
        coor.push(sectionArr[i].top)
        i += 1;
    }
}

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

// Add class 'active' to section when near top of viewport
 

// Scroll to anchor ID using scrollTO event
smoothScroll();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

