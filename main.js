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

const myModal = document.getElementById('myModal');
const seeProject = document.querySelectorAll('.see-details');

const Projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Images/Snapshoot Portfolio__.png',
    technologies: [
      'html',
      'css',
      'JavaScript',
      'github',
      'ruby',
      'Bootstrap',
    ],
    Live: 'https://github.com/belaymit/Portfolio-microverse',
    Source: 'https://github.com/belaymit/Portfolio-microverse',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essene',
    image: 'Images/Snapshoot__Portfolio.png',
    technologies: [
      'html',
      'css',
      'JavaScript',
      'github',
      'ruby',
      'Bootstrap',
    ],
    Live: 'https://github.com/belaymit/Portfolio-microverse',
    Source: 'https://github.com/belaymit/Portfolio-microverse',
  },
  {
    name: 'Multi-Post Stories',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Images/Snapshoot Portfolio.png',
    technologies: [
      'html',
      'css',
      'JavaScript',
      'github',
      'ruby',
      'Bootstrap',
    ],
    Live: 'https://github.com/belaymit/Portfolio-microverse',
    Source: 'https://github.com/belaymit/Portfolio-microverse',
  },
  {
    name: 'Multi-Post Stories',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Images/Snapshoot Portfolio__.png',
    technologies: [
      'html',
      'css',
      'JavaScript',
      'github',
      'ruby',
      'Bootstrap',
    ],
    Live: 'https://github.com/belaymit/Portfolio-microverse',
    Source: 'https://github.com/belaymit/Portfolio-microverse',
  },
  {
    name: 'Uber Navigation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Images/Snapshoot Portfolio.png',
    technologies: [
      'html',
      'css',
      'JavaScript',
      'github',
      'ruby',
      'Bootstrap',
    ],
    Live: 'https://github.com/belaymit/Portfolio-microverse',
    Source: 'https://github.com/belaymit/Portfolio-microverse',
  },
  {
    name: 'Uber Navigation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    image: 'Images/Snapshoot Portfolio.png',
    technologies: [
      'html',
      'css',
      'JavaScript',
      'github',
      'ruby',
      'Bootstrap',
    ],
    Live: 'https://github.com/belaymit/Portfolio-microverse',
    Source: 'https://github.com/belaymit/Portfolio-microverse',
  },
];
// eslint-disable-next-line no-console

seeProject.forEach((el) => el.addEventListener('click', (e) => {
  const i = e.target.classList[0];
  document.querySelector('.project-image').src = Projects[i].image;
  document.querySelector('.modal-project-title').innerText = Projects[i].name;
  document.querySelector('.modal-project-description').innerHTML = Projects[i].description;
  document.querySelector('.button-container')
    .innerHTML = ` <button onclick="${Projects[i].Live}" type="button" class="btn">see live <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></button>
                    <button onclick="${Projects[i].Source}" type="button" class="btn">see source <span> <i class="fa-brands fa-github"></i></button>`;
  document.querySelector('.languages-used')
    .innerHTML = `<li>
      ${Projects[i].technologies[0]}</li>
      <li>${Projects[i].technologies[1]}</li>
      <li> ${Projects[i].technologies[2]}</li>
      <li>${Projects[i].technologies[3]}</li>
      <li>${Projects[i].technologies[4]}</li>
      <li>${Projects[i].technologies[5]}</li>`;
}));

// eslint-disable-next-line no-unused-vars
function openPopUp() {
  myModal.classList.add('open-popup');
}

// eslint-disable-next-line no-unused-vars
function closePopUp() {
  myModal.classList.remove('open-popup');
}