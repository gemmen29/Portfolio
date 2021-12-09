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

  /* Modal popup */
  const seeProjects = document.getElementsByClassName('see-pro-btn');
  const projectModal = document.getElementById('project-modal');
  const closeProjectModal = document.getElementById('close-project-modal');

  const projects = [
    {
      name: 'Module1 Capstone',
      description:
        'This is the first module capstone project in microverse',
      featuredImage: 'images/capstone.png',
      technologies: [
        'html',
        'css',
        'javascript',
        'bootstrap',
      ],
      liveVersion: 'https://gemmen29.github.io/Module1-Capstone/',
      source: 'https://github.com/gemmen29/Module1-Capstone',
    },
    {
      name: 'Awesome Books',
      description:
        'Basic website for add and remove books',
      featuredImage: 'images/awesome.png',
      technologies: [
        'html',
        'css',
        'javascript',
        'bootstrap',

      ],
      liveVersion: 'https://gemmen29.github.io/Awesome-Book/',
      source: 'https://github.com/gemmen29/Awesome-Book',
    },
    {
      name: 'ToDo List',
      description:
        'This is a website for managing the daily tasks',
      featuredImage: 'images/todo.png',
      technologies: [
        'html',
        'css',
        'javascript',
        'webpacks',
        'jest',
      ],
      liveVersion: 'https://gemmen29.github.io/ToDo-List/dist/',
      source: 'https://github.com/gemmen29/ToDo-List',
    },
  ];

  for (let index = 0; index < seeProjects.length; index += 1) {
    seeProjects[index].addEventListener('click', (e) => {
      const projectTitle = projectModal.querySelector('h3#project-header');
      const projectDescription = projectModal.querySelector('p.dis--');
      const technologiesUL = projectModal.querySelector('ul#technologies');
      const projectImage = projectModal.querySelector('img.project-image');

      const projectId = e.target.getAttribute('data-projectId');

      projectTitle.textContent = projects[projectId - 1].name;
      projectDescription.textContent = projects[projectId - 1].description;
      projectImage.src = projects[projectId - 1].featuredImage;

      technologiesUL.innerHTML = '';
      projects[projectId - 1].technologies.forEach((project) => {
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
});
