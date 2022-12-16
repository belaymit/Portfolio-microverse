const menuItems = document.querySelectorAll('.nav-center .links li');
const sectionFooters = document.querySelectorAll('section, footer');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const closeMod = document.querySelector('.closeModal');
const icon = navToggle.querySelector('.fa-times');
const openIcon = navToggle.querySelector('.fa-bars');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
  icon.classList.toggle('close-icon');
  openIcon.classList.toggle('open-icon');
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  sectionFooters.forEach((sectionFooter) => {
    const sectionTop = sectionFooter.offsetTop;
    if (window.pageYOffset >= (sectionTop)) {
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
    icon.classList.remove('close-icon');
    openIcon.classList.remove('open-icon');
  });
});

const myModal = document.getElementById('myModal');
const seeProject = document.querySelectorAll('.see-details');

const Projects = [
  {
    id: 1,
    name: 'Awesome Books',
    description:
      'This web app is a simple web page that allows the user to enter book details (title and author) and then stores and retrieves the information from local storage. I used HTML, CSS and ES6 to develop it.',
    image: 'Images/awesome-books.PNG',
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
    name: 'Capstone Project I',
    description:
    'This is Microverse HTML/CSS and JS Capstone Project. I designed a conference website and added live data using JavaScript objects.',
    image: 'Images/conference.PNG',
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
    name: 'Todo List',
    description:
    'This project is the most interesting of all of my projects. It is implemented using HTML, CSS and ES-6. I also used webpack and JavaScript Modules. I really learned a lot from this project.',
    image: 'Images/to-do-List_up.PNG',
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

function openPopUp() {
  myModal.classList.add('open-popup');
}
function closePopUp() {
  myModal.classList.remove('open-popup');
}

openPopUp.addEventListener('click', openPopUp);
closeMod.addEventListener('click', closePopUp);