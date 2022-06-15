import projects from './projects.js';
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
});
