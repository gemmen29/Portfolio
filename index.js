window.addEventListener("DOMContentLoaded", () => {
  /* Mobile menu */
  const menuIcon = document.getElementById("menu-icon");
  const menuList = document.getElementById("menu-list");
  const closeMenu = document.querySelectorAll("#menu-list ul li a");

  const allBlur = document.getElementsByClassName("add-blur");

  menuIcon.addEventListener("click", () => {
    menuList.classList.remove("one-hundred");
    for (let index = 0; index < allBlur.length; index += 1) {
      allBlur[index].classList.add("blur");
    }
  });

  for (let index = 0; index < closeMenu.length; index += 1) {
    closeMenu[index].addEventListener("click", () => {
      menuList.classList.add("one-hundred");
      for (let i = 0; i < allBlur.length; i += 1) {
        allBlur[i].classList.remove("blur");
      }
    });
  }

  /* Modal popup */
  const seeProjects = document.getElementsByClassName("see-pro-btn");
  const projectModal = document.getElementById("project-modal");
  const closeProjectModal = document.getElementById("close-project-modal");

  const projects = [
    {
      name: "Tonic",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde voluptatum soluta ullam eveniet laudantium molestiae. Ullam voluptas recusandae commodi facere aperiam, cum ipsum. Veritatis harum dignissimos voluptate, hic recusandae distinctio tenetur obcaecati molestias minima voluptatem, optio possimus non ex repudiandae! Accusantium fugiat dignissimos quae atque, tempore officia quos iste tempora doloremque. Corrupti ad cumque ab quas obcaecati! A, voluptatum. Possimus autem accusantium minus laboriosam nulla sit cumque quod alias at esse fugiat in tempore hic quibusdam sed rem officiis quae blanditiis assumenda doloribus, pariatur vero. Voluptas, quis mollitia dolorem nobis facilis eum, doloribus architecto dicta minus expedita placeat esse.      ",
      featuredImage: "images/project1.png",
      technologies: [
        "html",
        "css",
        "javascript",
        "github",
        "ruby",
        "bootstrap",
      ],
      liveVersion: "#",
      source: "#",
    },
    {
      name: "Multi-Post Stories",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde voluptatum soluta ullam eveniet laudantium molestiae. Ullam voluptas recusandae commodi facere aperiam, cum ipsum. Veritatis harum dignissimos voluptate, hic recusandae distinctio tenetur obcaecati molestias minima voluptatem, optio possimus non ex repudiandae! Accusantium fugiat dignissimos quae atque, tempore officia quos iste tempora doloremque. Corrupti ad cumque ab quas obcaecati! A, voluptatum. Possimus autem accusantium minus laboriosam nulla sit cumque quod alias at esse fugiat in tempore hic quibusdam sed rem officiis quae blanditiis assumenda doloribus, pariatur vero. Voluptas, quis mollitia dolorem nobis facilis eum, doloribus architecto dicta minus expedita placeat esse.      ",
      featuredImage: "images/project2.png",
      technologies: [
        "html",
        "css",
        "javascript",
        "github",
        "ruby",
        "bootstrap",
      ],
      liveVersion: "#",
      source: "#",
    },
    {
      name: "Tonic",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde voluptatum soluta ullam eveniet laudantium molestiae. Ullam voluptas recusandae commodi facere aperiam, cum ipsum. Veritatis harum dignissimos voluptate, hic recusandae distinctio tenetur obcaecati molestias minima voluptatem, optio possimus non ex repudiandae! Accusantium fugiat dignissimos quae atque, tempore officia quos iste tempora doloremque. Corrupti ad cumque ab quas obcaecati! A, voluptatum. Possimus autem accusantium minus laboriosam nulla sit cumque quod alias at esse fugiat in tempore hic quibusdam sed rem officiis quae blanditiis assumenda doloribus, pariatur vero. Voluptas, quis mollitia dolorem nobis facilis eum, doloribus architecto dicta minus expedita placeat esse.      ",
      featuredImage: "images/project3.png",
      technologies: [
        "html",
        "css",
        "javascript",
        "github",
        "ruby",
        "bootstrap",
      ],
      liveVersion: "#",
      source: "#",
    },
    {
      name: "Multi-Post Stories",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium unde voluptatum soluta ullam eveniet laudantium molestiae. Ullam voluptas recusandae commodi facere aperiam, cum ipsum. Veritatis harum dignissimos voluptate, hic recusandae distinctio tenetur obcaecati molestias minima voluptatem, optio possimus non ex repudiandae! Accusantium fugiat dignissimos quae atque, tempore officia quos iste tempora doloremque. Corrupti ad cumque ab quas obcaecati! A, voluptatum. Possimus autem accusantium minus laboriosam nulla sit cumque quod alias at esse fugiat in tempore hic quibusdam sed rem officiis quae blanditiis assumenda doloribus, pariatur vero. Voluptas, quis mollitia dolorem nobis facilis eum, doloribus architecto dicta minus expedita placeat esse.      ",
      featuredImage: "images/project4.png",
      technologies: [
        "html",
        "css",
        "javascript",
        "github",
        "ruby",
        "bootstrap",
      ],
      liveVersion: "#",
      source: "#",
    },
  ];

  for (let index = 0; index < seeProjects.length; index += 1) {
    seeProjects[index].addEventListener("click", (e) => {
      const projectTitle = projectModal.querySelector("h3#project-header");
      const projectDescription = projectModal.querySelector("p.dis--");
      const technologiesUL = projectModal.querySelector("ul#technologies");
      const projectImage = projectModal.querySelector("img.project-image");

      const projectId = e.target.getAttribute("data-projectId");

      projectTitle.textContent = projects[projectId - 1].name;
      projectDescription.textContent = projects[projectId - 1].description;
      projectImage.src = projects[projectId - 1].featuredImage;

      technologiesUL.innerHTML = '';
      projects[projectId - 1].technologies.forEach((project) => {
        const li = document.createElement("li");
        li.classList.add("technology-list");
        const liText = document.createTextNode(project);
        li.appendChild(liText);
        technologiesUL.appendChild(li);
      });

      projectModal.classList.remove("d-none");
      for (let index = 0; index < allBlur.length; index += 1) {
        allBlur[index].classList.add("blur-see-project-modal");
      }
    });
  }

  closeProjectModal.addEventListener("click", () => {
    projectModal.classList.add("d-none");
    for (let index = 0; index < allBlur.length; index += 1) {
      allBlur[index].classList.remove("blur-see-project-modal");
    }
  });
});
