//ACTIVE SCROLL
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

const handleScroll = () => {
  const { scrollY } = window;

  sections.forEach(section => {
    const { offsetTop, offsetHeight, id } = section;
    const offset = offsetTop - 150;

    if (scrollY >= offset && scrollY < offset + offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      activeLink.classList.add('active');
    }
  });
};

window.addEventListener('scroll', handleScroll);


//NAVBAR TOGGLE
const menuIcon = document.querySelector('#icon-menu');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// ANIMATION ON SCREEN
AOS.init();