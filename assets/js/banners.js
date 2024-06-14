document.addEventListener("DOMContentLoaded", function () {
    /** 
     * Champ de recherche pour filtrer les articles.
     * @type {HTMLElement}
     */
    const inputSearch = document.querySelector('.input--search');
    /** 
     * Cartes des articles à filtrer.
     * @type {NodeListOf<HTMLElement>}
     */
    const articleCards = document.querySelectorAll('.art_card');
    /** 
     * Élément pour afficher le nombre d'articles trouvés.
     * @type {HTMLElement}
     */
    const articleCount = document.querySelector('.articleCount');

    /**
      * Configure la fonctionnalité de recherche pour filtrer les articles en fonction de la saisie dans inputSearch.
      */
    function configureSearch() {
        inputSearch.addEventListener('input', () => {
            let count = 0;
            articleCards.forEach(articleCard => {
                let searchStr = articleCard.getAttribute('data-search').toLowerCase();
                if (searchStr.includes(inputSearch.value.toLowerCase())) {
                    articleCard.classList.remove('hidden');
                    count++;
                } else {
                    articleCard.classList.add('hidden');
                }
            });
            articleCount.textContent = count + ' Items trouvées.';
        });
    }

    configureSearch();

    /** 
     * Bouton pour passer à la vue en liste.
     * @type {HTMLElement}
     */
    const btnList = document.querySelector('.list');
    /** 
     * Bouton pour passer à la vue en grille.
     * @type {HTMLElement}
     */
    const btnGrid = document.querySelector('.grid');
    /** 
     * Contenu du blog pour changer la vue.
     * @type {HTMLElement}
     */
    const blogContent = document.querySelector('.blog_content');

    /**
     * Configure les boutons pour basculer entre les vues en liste et en grille.
     */
    function configureToggle() {
        btnList.addEventListener('click', () => {
            blogContent.classList.add('list');
            blogContent.classList.remove('grid');
            btnGrid.classList.remove('hidden');
            btnList.classList.add('hidden');
        });

        btnGrid.addEventListener('click', () => {
            blogContent.classList.add('grid');
            blogContent.classList.remove('list');
            btnList.classList.remove('hidden');
            btnGrid.classList.add('hidden');
        });
    }

    configureToggle();
});