const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*=================== MENU SHOW ====================*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===================== MENU HIDDEN ========================*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    if (this.scrollY >=50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredslides: true,
    slidesPerView: "auto",
    loop: 'true',
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener("scroll", navhighlighter);

function navhighlighter () {
  let scrollY = window.pageYOffset;

  sections.forEach (current => {
    const sectionheight = current.offsetheight;
    const sectiontop = current.offesettop - 10,
    sectionid = current.getAttribute ("id");
  })
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*scroLl reveal animation*/
const sr = scrollreveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset:true// animations repeat
});

sr.reveal('.home-data,.skills,.contact-container');
sr.reveal('.home-img', { delay: 600 });
sr.reveal('.home-scroll', { delay: 800 });
sr.reveal('.project-card', { interval: 100 });
sr.reveal('.about-content', { origin: 'right' });
sr.reveal('.about-img', { origin: 'left' });



/*================================= EMAIL JS =======================================*/
const contactform = document.getElementById('contact-form'),
contactmessage = document.getElementById('contact-message');

const sendemail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form - publickey
  emailjs.sendform('service_7he6p2f', 'template_0jc01g1', '#contact-form', 'MNhYqR6JNrM6WK-kF')
  .then(() => {
      //show sent message
      contactmessage.textContent = 'message sent successfully';
      // remove message after five seconds
      setTimeout(() => {
        contactmessage.textContent = '';
      }, 5000);
      // clear input fields
      contactform.reset();
    }, () => {
      // show error message
      contactmessage.textContent = 'show error message ';
    });
};

contactform.addEventListener('submit', sendemail);
