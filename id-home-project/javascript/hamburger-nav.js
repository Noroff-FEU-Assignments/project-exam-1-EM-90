const openHamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector(".nav-items");

  hamburger.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("nav-items-active");
  });
};

openHamburgerMenu();
