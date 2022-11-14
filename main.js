const menuItems = document.querySelectorAll('.nav-center .links li');
const sectionFooters = document.querySelectorAll('section, footer');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// eslint-disable-next-line no-undef
icon = navToggle.querySelector('.fa-bars');
// eslint-disable-next-line func-names
navToggle.onclick = function () {
  // eslint-disable-next-line no-undef
  if (icon.classList.contains('fa-bars')) {
    // eslint-disable-next-line no-undef
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    // eslint-disable-next-line no-undef
    icon.classList.replace('fa-times', 'fa-bars');
  }
};

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
  navToggle.classList.add('close-icon');
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  sectionFooters.forEach((sectionFooter) => {
    const sectionTop = sectionFooter.offsetTop;
    // eslint-disable-next-line no-restricted-globals
    if (pageYOffset >= (sectionTop)) {
      currentSection = sectionFooter.getAttribute('id');
    }
  });
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('active');
    if (menuItem.classList.contains(currentSection)) {
      menuItem.classList.add('active');
    }
    menuItem.addEventListener('click', () => {
      links.classList.remove('show-links');
      navToggle.classList.remove('close-icon');
      // eslint-disable-next-line no-undef
      icon.classList.replace('fa-times', 'fa-bars');
    });
  });
});