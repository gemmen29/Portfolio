let menuIcon = document.getElementById("menu-icon");
let menuList = document.getElementById("menu-list");
let closeMenu = document.querySelectorAll("#menu-list ul li a");

let allBlur = document.getElementsByClassName("add-blur");

menuIcon.addEventListener("click", function() {
  menuList.classList.remove("d-none");
  for (let index = 0; index < allBlur.length; index++) {
    allBlur[index].classList.add("blur")
  }
  console.log(allBlur);
})

for (let index = 0; index < closeMenu.length; index++) {
  closeMenu[index].addEventListener("click", function() {
    menuList.classList.add("d-none");
    for (let index = 0; index < allBlur.length; index++) {
      allBlur[index].classList.remove("blur")
    }
  })
}