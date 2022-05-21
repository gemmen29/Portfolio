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
    const userMail = form.elements.user_email.value;
    const errorMessage = document.getElementById('error-msg');
    if (userMail === userMail.toLowerCase()) {
      errorMessage.classList.add('d-none');
      form.submit();
    } else {
      errorMessage.classList.remove('d-none');
    }
  });
  // localStorage
  // set data into storage
  const inputData = document.getElementsByClassName('form-field');
  for (let i = 0; i < inputData.length; i += 1) {
    inputData[i].addEventListener('keydown', () => {
      const userData = {
        name: form.elements.userName.value,
        mail: form.elements.userEmail.value,
        message: form.elements.userMessage.value,
      };
      localStorage.setItem('user-data', JSON.stringify(userData));
    });
  }
  // Retrieve data from local storage
  if (localStorage.getItem('user-data') !== null) {
    const userdata = JSON.parse(localStorage.getItem('user-data'));
    form.elements.userName.value = userdata.name;
    form.elements.userEmail.value = userdata.mail;
    form.elements.userMessage.value = userdata.message;
  }

  // Create projects dynamically
  const projects = [
    {
      name: 'Show app',
      description:
        'Website about online course academy built with HTML, CSS, and Javascript',
      featuredImage: 'images/show.png',
      technologies: ['html', 'css', 'javascript', 'bootstrap', 'sass', 'api'],
      liveVersion: 'https://gemmen29.github.io/Module1-Capstone/',
      source: 'https://github.com/gemmen29/Module1-Capstone',
    },
    {
      name: 'Online Courses Website',
      description:
        'Website about online course academy built with HTML, CSS, and Javascript',
      featuredImage: 'images/capstone.png',
      technologies: ['html', 'css', 'javascript', 'bootstrap'],
      liveVersion: 'https://gemmen29.github.io/Module1-Capstone/',
      source: 'https://github.com/gemmen29/Module1-Capstone',
    },
    {
      name: 'Awesome Books',
      description: 'Basic website for add and remove books',
      featuredImage: 'images/awesome.png',
      technologies: ['html', 'css', 'javascript', 'bootstrap'],
      liveVersion: 'https://gemmen29.github.io/Awesome-Book/',
      source: 'https://github.com/gemmen29/Awesome-Book',
    },
    {
      name: 'ToDo List',
      description: 'This is a website for managing the daily tasks',
      featuredImage: 'images/todo.png',
      technologies: ['html', 'css', 'javascript', 'webpacks', 'jest'],
      liveVersion: 'https://gemmen29.github.io/ToDo-List/dist/',
      source: 'https://github.com/gemmen29/ToDo-List',
    },
  ];

  const createProject = (project, index) => {
    console.log(project.technologies);
    return `<div class="project">
    <img class="scaled" src="${
      project.featuredImage
    }" alt="Module1 Capstone screenshot">
    <div class="project-body">
      <h2 class="project-title">${project.name}</h2>
      <div class="project-sub-header">
        <span>CANOPY</span>
        <span class="sub-different-color bullet">•</span>
        <span class="sub-different-color">Back End Dev</span>
        <span class="sub-different-color bullet">•</span>
        <span class="sub-different-color">2015</span>
      </div>
      <p>
        ${project.description}
      </p>
      <ul>
      ${project.technologies.map((tech) => `<li>${tech}</li>`).join(' ')}
      </ul>
      <a data-projectId='${index}' class="see-pro-btn main-button">See Project</a>
    </div>
  </div>`;
  };

  const portofilo = document.querySelector('#protofilo');
  projects.forEach((project, index) => {
    portofilo.innerHTML += createProject(project, index);
  });

  /* Modal popup */
  const seeProjects = document.getElementsByClassName('see-pro-btn');
  const projectModal = document.getElementById('project-modal');
  const closeProjectModal = document.getElementById('close-project-modal');

  for (let index = 0; index < seeProjects.length; index += 1) {
    seeProjects[index].addEventListener('click', (e) => {
      const projectTitle = projectModal.querySelector('h3#project-header');
      const projectDescription = projectModal.querySelector('p.dis--');
      const technologiesUL = projectModal.querySelector('ul#technologies');
      const projectImage = projectModal.querySelector('img.project-image');

      const projectId = e.target.getAttribute('data-projectId');

      projectTitle.textContent = projects[projectId].name;
      projectDescription.textContent = projects[projectId].description;
      projectImage.src = projects[projectId].featuredImage;

      technologiesUL.innerHTML = '';
      projects[projectId].technologies.forEach((project) => {
        const li = document.createElement('li');
        li.classList.add('technology-list');
        const liText = document.createTextNode(project);
        li.appendChild(liText);
        technologiesUL.appendChild(li);
      });

      projectModal.classList.remove('d-none');
      for (let index = 0; index < allBlur.length; index += 1) {
        allBlur[index].classList.add('blur-see-project-modal');
      }
    });
  }

  closeProjectModal.addEventListener('click', () => {
    projectModal.classList.add('d-none');
    for (let index = 0; index < allBlur.length; index += 1) {
      allBlur[index].classList.remove('blur-see-project-modal');
    }
  });
});
