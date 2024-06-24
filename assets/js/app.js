/** 
 * Bouton du menu burger pour ouvrir le menu mobile.
 * @type {HTMLElement}
 */
const burguerBtn = document.querySelector(".burguer--icon");
/** 
 * Menu mobile à afficher/cacher.
 * @type {HTMLElement}
 */
const menuMobile = document.querySelector(".menu--mobile");
/** 
 * Bouton pour fermer le menu mobile.
 * @type {HTMLElement}
 */
const closeBtn = document.querySelector(".btn--close");

/**
 * Configure les interactions du menu et du bouton de fermeture du menu mobile.
 */
/** Indentation */
function configureHeader() {
  burguerBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("menu--mobile__hidden");
  });

  closeBtn.addEventListener("click", () => {
    menuMobile.classList.add("menu--mobile__hidden");
  });
}

configureHeader();

/** Puisque les variables expandMoreBtns, expandLessBtns et footerNavs ne changeront jamais, j'aurais prefere que tu utilises const plutot que let */

/** 
 * Boutons pour étendre les sections du pied de page.
 * @type {NodeListOf<HTMLElement>}
 */
const expandMoreBtns = document.querySelectorAll(".expand_more");
/** 
 * Boutons pour réduire les sections du pied de page.
 * @type {NodeListOf<HTMLElement>}
 */
const expandLessBtns = document.querySelectorAll(".expand_less");
/** 
 * Sections du menu du pied de page.
 * @type {NodeListOf<HTMLElement>}
 */
const footerNavs = document.querySelectorAll(".mobile-footer_div-menu-nav");

/**
 * Configure les boutons pour étendre et réduire les sections du pied de page.
 */
function configureFooter() {
  expandMoreBtns.forEach((expandMoreBtn, i) => {
    /** Indentation */
    expandMoreBtn.addEventListener('click', () => {
      let footerNav = footerNavs[i];
      footerNav.classList.remove('mobile-footer_hidden');
      expandMoreBtn.classList.add('hidden');
      expandLessBtns[i].classList.remove('hidden');
    });
});

expandLessBtns.forEach((expandLessBtn, i) => {
  expandLessBtn.addEventListener('click', () => {
    let footerNav = footerNavs[i];
    footerNav.classList.add("mobile-footer_hidden");
    expandMoreBtns[i].classList.remove('hidden');
    expandLessBtn.classList.add('hidden');
  });
});
}

configureFooter();