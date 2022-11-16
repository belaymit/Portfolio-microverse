const myModal = document.getElementById('myModal');
const seeProject = document.querySelectorAll('.see-details');
const closeMod = document.querySelector('.closeModal');

const Projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Images/Snapshoot Portfolio__1.png',
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
    image: 'Images/Snapshoot Portfolio__1.png',
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
  document.querySelector('.project-title').innerHTML = Projects[i].name;
  document.querySelector('.modal-project-description').innerHTML = Projects[i].description;
  document.querySelector('.button-container')
    .innerHTML = ` <button onclick="${Projects[i].Live}" type="button" class="btn">see live <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></button>
                    <button onclick="${Projects[i].Source}" type="button" class="btn">see source <span> <i class="fa-brands fa-github"></i></button>`;
  document.querySelector('.languages-used')
    .innerHTML = `<li>
      ${Projects[i].technologies[0]}</li>i
      <li>${Projects[i].technologies[1]}</li>
      <li 
      ${Projects[i].technologies[2]}</li>
      <li>
      ${Projects[i].technologies[3]}</li>
      <li>
      ${Projects[i].technologies[4]}</li>
      <li>
      ${Projects[i].technologies[5]}</li>`;
  myModal.style.display = 'block';
}));

const popup = document.getElementById('popup');
// eslint-disable-next-line no-unused-vars
function openPopUp() {
  popup.classList.add('open-popup');
}

// eslint-disable-next-line no-unused-vars
function closePopUp() {
  popup.classList.remove('open-popup');
}

function closeModal() {
  myModal.style.display = 'none';
}

closeMod.addEventListener('click', closeModal);