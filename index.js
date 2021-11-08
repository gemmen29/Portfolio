window.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const menuList = document.getElementById("menu-list");
  const closeMenu = document.querySelectorAll("#menu-list ul li a");

  const allBlur = document.getElementsByClassName("add-blur");

  menuIcon.addEventListener("click", () => {
    menuList.classList.remove("d-none");
    for (let index = 0; index < allBlur.length; index += 1) {
      allBlur[index].classList.add("blur");
    }
  });

  for (let index = 0; index < closeMenu.length; index += 1) {
    closeMenu[index].addEventListener("click", () => {
      menuList.classList.add("d-none");
      for (let i = 0; i < allBlur.length; i += 1) {
        allBlur[i].classList.remove("blur");
      }
    });
  }
  console.log(closeMenu);
  console.log(closeMenu.length);
});
