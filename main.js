const menuItems = document.querySelectorAll('.nav-center .links li');
const sectionFooters = document.querySelectorAll('section, footer');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
// const workSection = document.getElementById('projects')

// eslint-disable-next-line no-undef
icon = navToggle.querySelector('.fa-times');
// eslint-disable-next-line no-undef
openIcon = navToggle.querySelector('.fa-bars');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
  // eslint-disable-next-line no-undef
  icon.classList.toggle('close-icon');
  // eslint-disable-next-line no-undef
  openIcon.classList.toggle('open-icon');
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
      links.classList.toggle('show-links');
    });
    links.classList.remove('show-links');
    // eslint-disable-next-line no-undef
    icon.classList.remove('close-icon');
    // eslint-disable-next-line no-undef
    openIcon.classList.remove('open-icon');
  });
});