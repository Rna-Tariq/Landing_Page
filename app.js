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

//Section Class 
class Section {

    //Section Id
    SectionId = 0;

 
   

    //Add Section To Page
    AddingSection() {
        this.SectionId += 1;
    }

}

//NavBar Class
class Navbar {
    //Menu Elemnt Selected By Id 
    menuElement = document.getElementById('navList');
   
    //Build Li
    buildNav() {
        this.menuElement.innerHTML = '';
        document.querySelectorAll('section').forEach(element => {
            this.menuElement.insertAdjacentHTML('beforeend', `<li><a class="menu-link" href="#${element.id}" data-section-id="${element.id}"  >${element.dataset.nav}</a></li>`);
        });
        this.sectionClicked();
    }

    //To The Section
    SectionOnClick() {
        this.menuElement.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });
            addingClass(event.target.dataset.sectionId)
        });
    }

}
//Define Global Variables
const section = new Section();
const menu = new Navbar();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Check which section is on the screen now
function SectionChecking(element, buffer) {
    buffer = typeof buffer === 'undefined' ? 0 : buffer;
    // Get element's position in the viewport
    const bounding = element.getBoundingClientRect();

    // Check if element is in the viewport 
    if (bounding.top >= buffer && bounding.left >= buffer && bounding.right <=
        // fallback for browser compatibility 
        ((window.innerWidth || document.documentElement.clientWidth) - buffer) &&
        bounding.bottom <=
        ((window.innerHeight || document.documentElement.clientHeight) - buffer)) {
        return true
    } else {
        return false;
    }
}
// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(element => {
        if (SectionChecking(element, -300)) {
            addingClass(element.id);
        }
    });

});

//Set sections as active
function addingClass(id){
    //Add Link Active
    document.querySelector('.link-active')?.classList.remove('link-active');
    document.querySelector(`[href="#${id}"]`).classList.add('link-active');
    
    //Add Section Active
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');
    document.querySelector(`#${id}`).classList.add('your-active-class');
    

}
//Call Function To Start
section.AddingSection();
section.AddingSection();
section.AddingSection();
section.AddingSection();
menu.buildNav();



