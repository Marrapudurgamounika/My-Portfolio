const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const introSection = document.querySelector('.intro-section');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle class to move the section down
    if (navLinks.classList.contains('active')) {
        introSection.classList.add('menu-opened');
    } else {
        introSection.classList.remove('menu-opened');
    }
}); //this is for short cut for menu bar



const sections = document.querySelectorAll('.container');

window.addEventListener('scroll', () => {
  let delay = 0;

  sections.forEach((section, index) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; 

    if (sectionPosition < screenPosition) {
      setTimeout(() => {
        section.classList.add('visible');
      }, delay);
      delay= 500; // 1/2 second gap
    }
  });
});//this is for the animation of sub section


var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Software Developer", " Web Designer","Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});// this is for the scorlling text


