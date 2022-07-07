import projects from './projects.js';
import frontendTechnologies from './front-end.js';
import backendTechnologies from './back-end.js';
import tools from './tools.js';

window.addEventListener('DOMContentLoaded', () => {
  /* Mobile menu */
  const menuIcon = document.getElementById('menu-icon');
  const menuList = document.getElementById('menu-list');
  const closeMenu = document.querySelectorAll('#menu-list ul li a');

  const allBlur = document.getElementsByClassName('add-blur');

  menuIcon.addEventListener('click', () => {
    menuList.classList.remove('one-hundred');
    for (let index = 0; index < allBlur.length; index += 1) {
      allBlur[index].classList.add('blur');
    }
  });

  for (let index = 0; index < closeMenu.length; index += 1) {
    closeMenu[index].addEventListener('click', () => {
      menuList.classList.add('one-hundred');
      for (let i = 0; i < allBlur.length; i += 1) {
        allBlur[i].classList.remove('blur');
      }
    });
  }

  // validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMail = form.elements.email.value;
    const errorMessage = document.getElementById('error-msg');
    if (userMail === userMail.toLowerCase()) {
      errorMessage.classList.add('d-none');
      form.submit();
    } else {
      errorMessage.classList.remove('d-none');
    }
  });

  // Create projects dynamically

  const createProject = (project) => {
    return `<div class="project">
    <div class="project-image">
      <img class="scaled" src="${project.featuredImage}" alt="${project.name}">
    </div>
    <div class="project-body">
      <h2 class="project-title">${project.name}</h2>
      <p>
        ${project.description}
      </p>
      <ul>
      ${project.technologies.map((tech) => `<li>${tech}</li>`).join(' ')}
      </ul>
      <div class="see-pro-btns">
        <a href="${
          project.liveVersion
        }" id="see-live" target="_blank" class="button-style">
          See Live
          &nbsp;
          <i class="fa-solid fa-arrows-rotate fa-lg"></i>
        </a>
        <a href="${
          project.source
        }" id="see-source" target="_blank" class="button-style">
          See Source
          &nbsp;
          <i class="fa-solid fa-eye fa-lg"></i>
        </a>
      <div>
    </div>
  </div>`;
  };

  const portofilo = document.querySelector('#protofilo');
  projects.forEach((project, index) => {
    portofilo.innerHTML += createProject(project, index);
  });

  // load technologies dynamically

  const loadTechnology = (name, techList) => {
    return `        
 <li>
    <div class="item">
      <h3>${name}</h3>
      <img class="open-technology-list" src="images/Right-arrow.svg">
    </div>
    <ul class="d-none-important my-various-technologies">
      ${techList
        .map(
          (tech) =>
            `<li class="content">
          <div>
            <img src="${tech.image}" alt="${tech.name}">
            <h4>${tech.name}</h4>
          </div>
        </li>`
        )
        .join(' ')}
    </ul>
  </li>`;
  };

  document.querySelector('.my-technologies').innerHTML += loadTechnology(
    'Front-End',
    frontendTechnologies
  );
  document.querySelector('.my-technologies').innerHTML += loadTechnology(
    'Back-End',
    backendTechnologies
  );
  document.querySelector('.my-technologies').innerHTML += loadTechnology(
    'Tools',
    tools
  );

  // display front-end technologies by default
  document
    .querySelector('.my-various-technologies')
    .classList.remove('d-none-important');
  document.querySelector('.open-technology-list').src = 'images/Down-arrow.svg';

  // open and close technologies
  document.querySelectorAll('.open-technology-list').forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const pathArr = e.target.src.split('/');
      const currentState = pathArr[pathArr.length - 1] == 'Down-arrow.svg';

      // reset all list of technologies
      document
        .querySelectorAll('.my-various-technologies')
        .forEach((tech) => tech.classList.add('d-none-important'));
      document
        .querySelectorAll('.open-technology-list')
        .forEach((list) => (list.src = 'images/Right-arrow.svg'));

      // open the specific list of technology
      if (currentState) {
        e.target.src = 'images/Right-arrow.svg';
        e.target.parentElement.nextElementSibling.classList.add(
          'd-none-important'
        );
      } else {
        e.target.src = 'images/Down-arrow.svg';
        e.target.parentElement.nextElementSibling.classList.remove(
          'd-none-important'
        );
      }
    });
  });
});
