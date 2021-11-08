let menuIcon = document.getElementById("menu-icon");
let menuList = document.getElementById("menu-list");
let closeMenu = document.querySelectorAll("#menu-list ul li a");

menuIcon.addEventListener("click", function() {
  menuList.classList.remove("d-none");
})

for (let index = 0; index < closeMenu.length; index++) {
  closeMenu[index].addEventListener("click", function() {
    menuList.classList.add("d-none");
  })
}