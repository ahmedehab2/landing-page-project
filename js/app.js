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
 * Define Global Variables
 * 
*/
const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
* End Global Variables
* Start Helper Functions
* 
*/
/**
* End Helper Functions
* Begin Main Functions
* 
*/



//  back to top when btn is clicked
const backToTop = () => {
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
       
   });
}

// build the nav
for (let section of sections){
   const ullinks = document.createElement("li")
   ullinks.innerHTML =  `<a href="#${section.id}" class="menu__link" data-link="${section.dataset.nav}">${section.dataset.nav}</a>`
   ul.appendChild(ullinks);
};


window.addEventListener('scroll', event => {
  // btn appear  if user scrolls more than 30 px
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('backToTop').style.display = "block";
  } else {
   document.getElementById('backToTop').style.display = "none";
  }


// looping on all section to see if in viewport
sections.forEach( section => {
  let sectionrect = section.getBoundingClientRect().top;
  if(sectionrect < 150 && sectionrect >= -150) {
    section.classList.add('your-active-class')
  }
  else{
    section.classList.remove('your-active-class')
  }
})


// making the navbar responsive when scrolling

   let li = document.querySelectorAll('nav ul li a');
  //  looping on links of navbar
   li.forEach(link => {
       let section = document.querySelector(link.hash);
       if (
           section.classList.contains('your-active-class')
       ) {
           link.classList.add('active__link');
       } else {
           link.classList.remove('active__link');
       }
   });
});


// remove the navbar while not scrolling
let timer = null;
window.addEventListener('scroll', function() {
   if(timer !== null) {
       clearTimeout(timer);        
   }
   timer = setTimeout(function() {
       document.getElementsByClassName("navbar__menu")[0].style.display = 'none';

   }, 3000);
}, false);
//  navbar back while scrolling
window.onscroll = function () {
   document.getElementsByClassName("navbar__menu")[0].style.display = 'block';
};


/**
* End Main Functions
* Begin Events
* 
*/

// Build menu 


// Scroll to section on link click
// Set sections as active

// 
//     
//Add the CSS class by using classList.add.
