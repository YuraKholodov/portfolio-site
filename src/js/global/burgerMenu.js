export function burgerMenu() {
  const body = document.querySelector(".body");
  const header = body.querySelector(".header");
  header.addEventListener("click", toggleBurgerMenu);

  function toggleBurgerMenu(event) {
    event.preventDefault();
    const target = event.target;
    const btnBurger = target.closest(".burger-icon");
    const navLink = target.closest(".header__nav-link");
    const btnConsult = target.closest(".header__btn--mobile");

    if (!btnBurger && !navLink && !btnConsult) return;

    body.classList.toggle("header__nav--active");
  }
}
