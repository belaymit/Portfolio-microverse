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

window.addEventListener('load', () => {
  // projectTitle.innerText = 'Project Title';
  // eslint-disable-next-line no-console
  // console.log(projectTitle);
});

// eslint-disable-next-line no-unused-vars
const workSection = [
  {
    id: 1,
    name: 'Tonic',
    companies: ['Code', 'CSS', 2015],
    img: './Images/Snapshoot Portfolio__.png',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['html', 'css', 'javaScript'],
  },
];

// const listItems = document.querySelectorAll('.list-item');
// // eslint-disable-next-line no-console
// console.log(listItems);

// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < 5; i++) {
//   // eslint-disable-next-line no-console
//   console.log(workSection[0].companies[i]);
//   listItems.textContent = workSection[0].companies[i];
//   // eslint-disable-next-line no-console
//   // console.log(listItems);
// }
// // eslint-disable-next-line no-console
// console.log(workSection[0].name);

// const ulList = document.querySelector('.link-items');
// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < 6; i++) {
//   const liList = document.createElement('li');
//   liList.classList.add('list-item');
//   liList.innerText = 'page';
//   ulList.append(liList);
// }

window.addEventListener('DOMContentLoaded',() =>{
  // eslint-disable-next-line camelcase, no-unused-vars
  const projectSection = document.getElementById('projects');
  // projectSection.classList.add('work-section');

  const projectsCard = document.createElement('div');
  projectsCard.classList.add('projects-card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');

  const projects = document.createElement('div');
  projects.classList.add('projects');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const authorRoleCompany = document.createElement('div');
  authorRoleCompany.classList.add('author-role-company');

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('project-title');

  // eslint-disable-next-line no-unused-vars
  const ulLinkItems = document.createElement('ul');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < (workSection[0].companies).length; i++) {
    const listItems = document.createElement('li');
    listItems.innerText = workSection[0].companies[i];
    ulLinkItems.append(listItems);
  }

  authorRoleCompany.append(projectTitle);
  authorRoleCompany.append(ulLinkItems);

  cardBody.append(authorRoleCompany);

  cardHeader.append(projects);
  projectsCard.appendChild(cardHeader);
  projectsCard.append(cardBody);

  projectSection.appendChild(projectsCard);
});
