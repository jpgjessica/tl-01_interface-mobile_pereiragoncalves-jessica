/**
 * @typedef {Object} Article
 * @property {string} name - Le nom de l'article.
 * @property {string} img - L'URL de l'image de l'article.
 * @property {string} shortDesc - La courte description de l'article.
 */

/** Le nom d'une class devrait commencer par un majuscule */
class Article{
  constructor(name, img, shortDesc){
    this.name = name,
    this.img = img,
    this.shortDesc = shortDesc
  }

/**
 * Convertit un objet article en un élément HTML représentant une carte d'article.
 * @returns {HTMLElement} L'élément HTML représentant la carte de l'article.
 */
  toHtml() {
  const articleCards = document.createElement('div');
  const articleImg = document.createElement('img');
  const articleContent = document.createElement('div');
  const articleDescription = document.createElement('div');
  const articleTitle = document.createElement('h3');
  const articleShortDesc = document.createElement('span');
  const articleDetails = document.createElement('button');

  articleCards.className = 'art_card';
  articleImg.className = 'art--img';
  articleImg.src = this.img;
  articleImg.alt = this.name;
  articleContent.className = 'art_content';
  articleDescription.className = 'art_textDescription';
  articleTitle.className = 'art--title'
  articleTitle.textContent = this.name;
  articleShortDesc.className = 'art--desc';
  articleShortDesc.textContent = this.shortDesc;
  articleDetails.className = 'art--btn';
  articleDetails.textContent = 'Savoir plus';
  articleCards.setAttribute('data-search', this.name);

  articleDescription.appendChild(articleTitle);
  articleDescription.appendChild(articleShortDesc);

  articleContent.appendChild(articleDescription);
  articleContent.appendChild(articleDetails);

  articleCards.appendChild(articleImg);
  articleCards.appendChild(articleContent);

  return articleCards;
};
}

/** Dommage tu as pratiquement type tous tes variable */
/** @type {Article[]} */

const articles = [
  new Article(
    "Crochet",
    "./assets/img/blogue/article_blogue_amigurumi.png",
    "Découvrez des idées créatives et des tutoriels pour des projets de crochet adorables et amusants pour les tout-petits. Apprenez les bases du crochet et réalisez des créations uniques pour vos enfants.",
  ),
  new Article(
    "Arts",
    "./assets/img/blogue/article_blogue_arts.png",
    "Inspirez la créativité de vos enfants avec des activités artistiques simples et amusantes. Explorez des techniques artistiques adaptées aux tout-petits pour des moments de création en famille.",
  ),
  new Article(
    "Camping",
    "./assets/img/blogue/article_blogue_camping.png",
    "Préparez des aventures en plein air avec nos astuces pour camper avec de jeunes enfants. Découvrez des idées d'activités de camping pour faire de chaque sortie une expérience mémorable.",

  ),
  new Article(
    "Chambre bébé",
    "./assets/img/blogue/article_blogue_chambre.png",
    "Aménagez une chambre bébé apaisante et pratique avec nos conseils et inspirations. Trouvez des idées de décoration et d'organisation pour créer un espace accueillant pour votre nouveau-né.",
  ),
  new Article(
    "Chambre décor",
    "./assets/img/blogue/article_blogue_chambreEnfant.png",
    "Transformez la chambre de vos enfants avec des idées déco tendance et fonctionnelles. Découvrez des astuces pour personnaliser l’espace de vos tout-petits avec style et créativité.",
  ),
  new Article(
    "Play outside",
    "./assets/img/blogue/article_blogue_exterieur.png",
    "Encouragez le jeu en plein air avec des activités amusantes et sécurisées pour les enfants. Explorez des idées d’aventures extérieures pour stimuler la curiosité et l’énergie de vos tout-petits.",
  ),
  new Article(
    "Montessori",
    "./assets/img/blogue/article_blogue_montessori.png",
    "Plongez dans l’univers Montessori avec des conseils pour créer un environnement d’apprentissage autonome. Découvrez des activités Montessori pour encourager le développement naturel de vos enfants.",
  ),
  new Article(
    "Playroom",
    "./assets/img/blogue/article_blogue_playroom.png",
    "Aménagez une salle de jeux stimulante et organisée pour vos enfants. Trouvez des inspirations pour créer un espace de jeu ludique et éducatif.",
  ),
  new Article(
    "Préscolaire",
    "./assets/img/blogue/article_blogue_preEcole.png",
    "Préparez vos enfants pour la maternelle avec des activités préscolaires ludiques et éducatives. Découvrez des ressources pour favoriser l’apprentissage et le développement des tout-petits avant l’école.",
  )
];

/**
 * Crée et affiche les cartes d'articles dans le contenu du blog.
 */
function createArticles() {
  articles.forEach(article => {
    const blogContent = document.querySelector('.blog_content');
    blogContent.appendChild(article.toHtml());
  });
}

createArticles();

/** Nice petit ajout. J'aurais prefere que tu utilise une classe css afin de changer la couleur. */
/**
 * Change la couleur de fond des cartes d'articles de manière aléatoire.
 * @param {NodeListOf<HTMLElement>} articleCards
 */

function changeBg(articleCards) {
  const availableColors = ['#e3d48b', '#eaac81'];
  articleCards.forEach(articleCard => {
    const randomColorIndex = Math.floor(Math.random() * availableColors.length);
    articleCard.style.backgroundColor = availableColors[randomColorIndex];
  });
}

const articleCards = document.querySelectorAll('.art_card');
changeBg(articleCards);
