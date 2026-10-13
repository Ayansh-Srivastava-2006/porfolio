document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("hamburgerBtn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        if (mobileMenu) mobileMenu.classList.remove("open");
        if (menuButton) menuButton.classList.remove("open");
      }
    });
  });
});
