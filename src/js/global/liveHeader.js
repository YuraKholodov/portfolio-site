export function headerScroll() {
  const body = document.querySelector(".body");
  const header = body.querySelector(".header");
  // const headerHeight = header.scrollHeight;

  const scrollPosition = () =>
    document.documentElement.scrollTop || window.pageYOffset;

  const isHeaderHidden = () => header.classList.contains("header--hidden");

  // body.style.paddingTop = headerHeight + "px";

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const scrPosit = scrollPosition();

    if (scrPosit > lastScroll && !isHeaderHidden()) {
      header.classList.add("header--hidden");
      body.classList.remove("header__nav--active");
    } else if (scrPosit < lastScroll && isHeaderHidden()) {
      header.classList.remove("header--hidden");
    }
    lastScroll = scrPosit;

    // if (scrPosit > 100) {
    //   header.style.backgroundColor = "#488ca39b";
    // } else {
    //   header.style.backgroundColor = "transparent";
    // }
  });
}
