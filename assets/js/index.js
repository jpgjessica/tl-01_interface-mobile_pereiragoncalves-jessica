/**
 * Représente un produit.
 * @class
 */
class Product {
  /**
   * @constructor
   * @param {string} name - Le nom du produit.
   * @param {string} img - L'URL de l'image du produit.
   * @param {string} shortDesc - Une brève description du produit.
   * @param {number} price - Le prix du produit.
   */
  constructor(name, img, shortDesc, price) {
    this.name = name,
      this.img = img,
      this.shortDesc = shortDesc,
      this.price = price
  }

  /**
   * Génère la représentation HTML du produit.
   * @returns {HTMLElement} Élément HTML représentant le produit.
   */

  toHtml() {
    const cardProduct = document.createElement('div');
    const img = document.createElement('img');
    const cardContent = document.createElement("div");
    const cardDescription = document.createElement("div");
    const cardPrice = document.createElement("span");
    const cardTitle = document.createElement("span");
    const cardShortDesc = document.createElement("span");

    cardProduct.className = 'card--product';
    img.className = 'card__img';
    img.src = this.img;
    cardContent.className = 'card__content';
    cardDescription.className = "card__description";
    cardPrice.className = 'card__price';
    cardPrice.textContent = this.price + '$ch';
    cardTitle.className = "card__title";
    cardTitle.textContent = this.name;
    cardShortDesc.className = "card__short-desc";
    cardShortDesc.textContent = this.shortDesc;

    cardDescription.appendChild(cardTitle);
    cardDescription.appendChild(cardShortDesc);

    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardPrice);

    cardProduct.appendChild(img);
    cardProduct.appendChild(cardContent);

    return cardProduct;
  }
}

//produits
const products = [
  new product(
    "Trio bébé",
    "./assets/img/produits/produit_ bebe.jpg",
    "Les amis lapin, girafe et renard sont impatients de s'amuser avec votre tout-petit.",
    29.99,
  ),
  new product(
    "Duo chien",
    "./assets/img/produits/produit_ chien.jpg",
    "Et si vous optiez pour un amigurumi 'Tel père, tel fils' ?",
    29.99,
  ),
  new product(
    "Owf Owf",
    "./assets/img/produits/produit_ dog.jpg",
    "Il deviendra le meilleur ami de votre petite fille.",
    29.99,
  ),
  new product(
    "M. Étoile",
    "./assets/img/produits/produit_ elephant_giraffe.jpg",
    "L'anniversaire de vos petits-enfants approche ? Pourquoi ne pas offrir notre adorable éléphant étoilé ?",
    29.99,
  ),
  new product(
    "Joyeuses lapines",
    "./assets/img/produits/produit_ lapin_II.jpg",
    "Ces deux amigurumis lapins apporteront une touche de douceur supplémentaire à votre journée !",
    29.99,
  ),
  new product(
    "Les amis",
    "./assets/img/produits/produit_ trio.jpg",
    "Souris, paresseux, chien, lapin, chaton, éléphant... Quel est votre coup de cœur ?",
    29.99,
  ),
];

const bestProduct = document.querySelector(".best-products");
const containerProducts = document.querySelector(".container__products")

const sectionTitle = document.createElement('h3');
sectionTitle.textContent = 'Nos produits';

containerProducts.insertBefore(sectionTitle, bestProduct);

products.forEach((product) => bestProduct.appendChild(product.toHtml()));