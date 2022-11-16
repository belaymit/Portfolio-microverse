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

// eslint-disable-next-line no-unused-vars
const workSection = {
  project1: {
    id: 1,
    name: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: '/Images/Snapshoot Portfolio__1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
    featured: '',
  },

  project2: {
    id: 2,
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's standard 
      dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: './Images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
    featured: '',
  },
};

const modalContainer = document.querySelector('.modal-container');

const modalContent = (obj) => {
  const content = `
  <div class="card">
    <div class="card-header">
      <h3>${obj.name}</h3>
      <ul class="companies">
        <li>CANOPY</li>
        <li>•</li>
        <li>Back end Dev</li> 
        <li>•</li>
        <li>2015</li>
      </ul>
      <div class="close-icon" onclick="closePopUp()"> <i class="fa-solid fa-times"></i></div>
    </div>
    <div class="card-body">
      <img src="src="${obj.image}" alt="project-snapshoot">
    </div>
    <div class="card-description-container">
      <div class="card-description">
        <p>${obj.description}</p>
      </div>
      <div class="card-language-buttons">
        <div class="card-languages">
          <ul class="languages-used">
            <li>html</li>
            <li>css</li>
            <li>javaScript</li>
            <li>github</li>
            <li>ruby</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div class="button-container">
          <button type="button" class="btn">see live <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          <button type="button" class="btn">see source <i class="fa-brands fa-github"></i></button>
        </div>
      </div>
    </div>
  </div>
`;

  return content;
};

const allActionButton = document.querySelectorAll('.see-details');
// const seeProjectBtn = document.querySelector('#see-project-1');
// const closeContainer = document.querySelector('.close-container');

allActionButton.forEach((action) => {
  action.addEventListener('click', (event) => {
    const { id } = event.target;
    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let project in workSection) {
      // eslint-disable-next-line eqeqeq
      if (workSection[project].id == id.split('-')[2]) {
        // eslint-disable-next-line no-undef
        modalContainer.innerHTML = modalContent(workSection[project]);
      }
    }
  });
});
