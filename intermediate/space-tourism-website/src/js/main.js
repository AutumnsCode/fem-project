import '../scss/main.scss';

const btn = document.querySelector(".primary-header__menu");
const nav = document.querySelector(".primary-navigation");


btn.addEventListener("click", () => {
  const visibilty = nav.getAttribute('data-visible');

  if( visibilty == "false") {
    nav.setAttribute('data-visible', true);
    btn.setAttribute('aria-expended', true);
  } else {
    nav.setAttribute('data-visible', false);
    btn.setAttribute('aria-expended', false);
  }
})