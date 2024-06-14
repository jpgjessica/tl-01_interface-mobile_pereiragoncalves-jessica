/**
 * Représente un article de blog.
 * @class
 */
class articleDialog {
    /**
     * @constructor
     * @param {string} name - Le titre de l'article.
     * @param {string} img - L'URL de l'image de l'article.
     * @param {string} longDesc - La description détaillée de l'article.
     * @param {string} author - L'auteur de l'article.
     * @param {string} date - La date de publication de l'article (format 'YYYY-MM-DD').
     * @param {number} time - Le temps de lecture estimé en secondes.
     * @param {number} numberOfWords - Le nombre de mots dans l'article.
     */
    constructor(name, img, longDesc, author, date, time, numberOfWords) {
        this.name = name,
            this.img = img,
            this.longDesc = longDesc,
            this.author = author,
            this.date = date,
            this.time = time,
            this.numberOfWords = numberOfWords
    }

    /**
     * Génère la représentation HTML de l'article.
     * @returns {HTMLElement} Élément HTML représentant l'article.
     */

    ToHtml() {
        const dialogueModale = document.createElement('div');
        const dialogueImg = document.createElement('img');
        const dialogueContent = document.createElement('div');
        const dialogueHeader = document.createElement('div');
        const dialogueTitle = document.createElement('h3');
        const dialogueAuthor = document.createElement('span');
        const dialogueDate = document.createElement('span');
        const dialogueDescription = document.createElement('span');
        const dialogueFooter = document.createElement('div');
        const dialogueTime = document.createElement('span');
        const dialogueNbwords = document.createElement('span');
        const btnClose = document.createElement('button');

        dialogueModale.className = 'dialogue';
        dialogueImg.className = 'dialogue_img';
        dialogueImg.src = this.img;
        dialogueContent.className = 'dialogue_content';
        dialogueHeader.className = 'dialogue_header';
        dialogueTitle.className = 'dialogue_title';
        dialogueTitle.textContent = this.name;
        dialogueAuthor.className = 'dialogue_author';
        dialogueAuthor.textContent = this.author;
        dialogueDate.className = 'dialogue_date';
        dialogueDate.textContent = this.date;
        dialogueDescription.className = 'dialogue_description';
        dialogueDescription.textContent = this.longDesc;
        dialogueFooter.className = 'dialogue_footer';
        dialogueTime.className = 'dialogue_time';
        dialogueTime.textContent = 'Temps de lecture(sec): ' + this.longDesc.split(" ").length / 2;
        dialogueNbwords.className = 'dialogue_nbWords';
        dialogueNbwords.textContent = 'Mots: ' + this.longDesc.split(" ").length;
        btnClose.classList.add('material-symbols-outlined');
        btnClose.classList.add('btn--close--dialogue');
        btnClose.textContent = 'close';

        dialogueHeader.appendChild(dialogueTitle);
        dialogueHeader.appendChild(dialogueAuthor);
        dialogueHeader.appendChild(dialogueDate);

        dialogueFooter.appendChild(dialogueTime);
        dialogueFooter.appendChild(dialogueNbwords);

        dialogueContent.appendChild(dialogueHeader);
        dialogueContent.appendChild(dialogueFooter);
        dialogueContent.appendChild(btnClose);

        dialogueModale.appendChild(dialogueContent);
        dialogueModale.appendChild(dialogueImg);
        dialogueModale.appendChild(dialogueDescription);
        dialogueModale.appendChild(dialogueFooter);

        return dialogueModale;
    }
}

//articles
const articlesDialogue = [
    new articleDialog(
        "Problèmes et difficultés",
        "./assets/img/blogue/article_blogue_amigurumi.png",
        "Initialement, j'ai eu des difficultés à faire fonctionner la fonction de filtre des articles. La classe appelée allCards n'avait pas de fonction réelle associée. Une fois deleté les articles ont fonctionnes correctement.   |    J'ai modifiqué les dimensions du favicon, ce qui a provoqué son arrêt de fonctionnement. Pour le résoudre, j'ai dû vider le cache de mon navigateur.   https://stackoverflow.com/questions/4248343/why-my-favicon-not-showing-up-although-it-is-defined-correctly    |    J'ai rencontré des difficultés pour gérer la grille. Au début, j'ai utilisé un conteneur flex avec une grille à l'intérieur, mais les images débordaient toujours du div. J'ai donc modifié ma classe art--card pour utiliser grid-template-columns: auto 1fr. De cette manière, chaque carte d'article s'ajuste automatiquement en largeur, ce qui a résolu le problème des débordements d'images. L'utilisation de display: grid, nécessite une étude approfondie.   https://css-tricks.com/snippets/css/complete-guide-grid/    |    J'ai eu des problèmes d'exécution lors de mes tentatives pour accéder au contenu d'un fichier JavaScript à partir d'un autre fichier. J'ai résolu ce problème en déplaçant le script du <head> vers le bas de chaque page HTML, sans l'attribut defer, et en ajustant l'ordre d'exécution.    |    J'ai dû créer une nouvelle liste d'objets pour gérer le dialogue, car je ne pouvais pas utiliser la liste existante d'articles en raison de la séparation des fichiers. J'ai essayé d'utiliser preventDefault pour empêcher le dialogue de se fermer avec l'overlay, mais j'ai réalisé qu'il fallait utiliser stopPropagation à la place.    https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault",
        "Gonçalves, Jéssica",
        '2024-06-14',
        0,
        0,
    ),
    new articleDialog(
        "Arts",
        "./assets/img/blogue/article_blogue_arts.png",
        "Encourager la créativité chez les enfants est crucial pour leur développement émotionnel et cognitif. Des activités artistiques simples peuvent stimuler leur imagination tout en leur offrant des moments de plaisir et d'apprentissage. Commencez par des techniques adaptées aux tout-petits, comme la peinture avec les doigts. Cette activité permet aux enfants de s'exprimer librement tout en développant leur motricité fine. Les collages de papier sont également une excellente option. Munissez-vous de papiers colorés, de ciseaux adaptés et de colle pour créer des œuvres d'art uniques. Les sculptures en pâte à modeler sont une autre activité amusante. En plus d'être une activité créative, elle aide à renforcer les muscles des mains et des doigts des enfants. Organisez des séances de création en famille pour partager des moments conviviaux et renforcer les liens. En explorant différentes techniques artistiques, vous permettez à vos enfants de découvrir leurs talents cachés et de développer leur confiance en eux. N'oubliez pas d'exposer leurs créations à la maison pour les encourager et valoriser leurs efforts. Avec un peu de préparation et beaucoup d'enthousiasme, chaque séance d'art peut devenir une aventure passionnante et enrichissante.",
        "Emilie Martin",
        '2024-06-05',
        0,
        0,
    ),
    new articleDialog(
        "Camping",
        "./assets/img/blogue/article_blogue_camping.png",
        "Camper avec de jeunes enfants peut sembler une tâche ardue, mais avec une bonne préparation, cela peut devenir une expérience inoubliable pour toute la famille. Choisissez un camping adapté aux enfants, avec des installations propres et sécurisées. Préparez une liste de tout le nécessaire : tentes confortables, sacs de couchage adaptés et vêtements appropriés pour toutes les conditions météorologiques. Planifiez des activités spécifiques pour les enfants. Une chasse aux trésors est une excellente façon de les divertir tout en les aidant à découvrir la nature. Des randonnées faciles et adaptées à leur âge permettent de faire de l'exercice et d'explorer les environs. Les soirées autour du feu de camp sont des moments magiques où vous pouvez raconter des histoires, chanter des chansons et faire griller des guimauves. La clé pour un camping réussi avec de jeunes enfants est la flexibilité. Soyez prêts à adapter vos plans en fonction de leurs besoins et de leurs humeurs. En impliquant les enfants dans la préparation et en leur expliquant ce qu'ils peuvent attendre de l'expérience, vous les aidez à se sentir plus à l'aise et enthousiastes. Avec ces astuces, chaque sortie en camping peut se transformer en une aventure mémorable pleine de découvertes et de rires.",
        "Julien Lefèvre",
        '2023-02-20',
        0,
        0,
    ),
    new articleDialog(
        "Chambre bébé",
        "./assets/img/blogue/article_blogue_chambre.png",
        "Créer un espace accueillant et fonctionnel pour votre nouveau-né est une étape importante. Une chambre bébé bien aménagée peut contribuer à son confort et à sa sécurité, tout en facilitant les soins quotidiens. Optez pour des couleurs douces et apaisantes, comme les pastels, qui favorisent la tranquillité et le sommeil. Des meubles pratiques, tels qu'une table à langer avec des rangements intégrés, sont indispensables.Pensez à l’organisation. Des paniers ou des tiroirs bien étiquetés permettent de garder les vêtements, couches et produits de soin facilement accessibles. Un fauteuil confortable est essentiel pour les moments d’allaitement ou de bercement. Ajoutez des éléments décoratifs personnels, comme des mobiles faits main ou des illustrations délicates, pour créer une atmosphère chaleureuse. La sécurité est primordiale. Assurez-vous que tous les meubles sont stables et bien fixés. Utilisez des matelas fermes et des draps bien ajustés pour le lit de bébé. Installez des veilleuses pour faciliter les déplacements nocturnes sans déranger le sommeil de votre bébé. En combinant fonctionnalité et esthétisme, vous pouvez créer une chambre bébé qui est à la fois un havre de paix et un espace pratique pour les soins quotidiens.",
        "Sophie Dubois",
        '2023-09-25',
        0,
        0,
    ),
    new articleDialog(
        "Chambre décor",
        "./assets/img/blogue/article_blogue_chambreEnfant.png",
        "Donner une nouvelle vie à la chambre de vos enfants peut être à la fois amusant et pratique. Commencez par choisir un thème qui reflète leurs intérêts et leur personnalité. Que ce soit un univers de super-héros, une forêt enchantée ou un monde sous-marin, le thème donnera une direction à votre décoration. Optez pour des couleurs vives et joyeuses qui stimulent la créativité et l’énergie. Les peintures murales ou les stickers peuvent ajouter une touche unique sans nécessiter de gros travaux. Les meubles multifonctionnels sont une excellente solution pour maximiser l'espace. Pensez à des lits avec rangements intégrés ou des étagères modulables qui s’adaptent aux besoins changeants de vos enfants. La personnalisation est la clé pour rendre la chambre spéciale. Affichez leurs œuvres d'art, utilisez des lettres en bois pour écrire leur nom ou ajoutez des photos de famille. Des tapis colorés et des coussins confortables peuvent transformer l’espace en un lieu accueillant et chaleureux. En impliquant vos enfants dans le processus de décoration, vous leur donnez l’occasion d’exprimer leur créativité et de se sentir vraiment chez eux. Avec un peu d’imagination et des solutions pratiques, vous pouvez créer une chambre qui est à la fois belle et fonctionnelle.",
        "Clara Moreau",
        '2023-12-10',
        0,
        0,
    ),
    new articleDialog(
        "Play outside",
        "./assets/img/blogue/article_blogue_exterieur.png",
        "Le jeu en plein air est essentiel pour le développement physique et mental des enfants. Il leur permet de brûler de l'énergie, de développer leurs compétences sociales et de découvrir le monde qui les entoure. Proposez des activités adaptées à leur âge pour les inciter à passer plus de temps dehors. Des jeux comme le cache-cache, le tag ou le saut à la corde sont des classiques indémodables. Pour les plus jeunes, créez un parcours d'obstacles simple avec des objets du quotidien. Les jeux d’eau, comme les piscines gonflables ou les arroseurs, sont parfaits pour les journées chaudes d'été. Les explorations nature, comme la chasse aux insectes ou la collecte de feuilles, peuvent transformer une simple promenade en une aventure éducative. Assurez-vous que les zones de jeu sont sécurisées et vérifiez régulièrement les équipements de jeu pour éviter les accidents. Encourager le jeu en plein air ne nécessite pas toujours de grands espaces ou d'équipements coûteux. L'essentiel est de fournir un environnement où les enfants peuvent explorer, courir et s'amuser en toute sécurité. En stimulant leur curiosité et en leur offrant diverses activités, vous contribuez à leur épanouissement et à leur bonheur.",
        "Antoine Lambert",
        '2023-02-08',
        0,
        0,
    ),
    new articleDialog(
        "Montessori",
        "./assets/img/blogue/article_blogue_montessori.png",
        "La méthode Montessori est une approche éducative qui favorise l’autonomie et le développement naturel de l’enfant. Pour créer un environnement Montessori à la maison, commencez par des espaces adaptés à la taille de votre enfant. Utilisez des meubles bas et accessibles pour qu’il puisse atteindre ses affaires sans aide. Proposez des activités qui stimulent la curiosité et la concentration, comme des puzzles, des blocs de construction ou des jeux sensoriels. Les activités pratiques, comme verser de l'eau d'un pichet ou découper avec des ciseaux adaptés, encouragent la coordination et la dextérité. Organisez les jouets et les matériaux de manière ordonnée et attrayante pour inviter l'enfant à explorer. L’importance de l’autonomie se reflète également dans la manière dont vous présentez les activités. Laissez l'enfant choisir ce qu'il veut faire et respectez son rythme. Guidez-le sans interférer, offrant des suggestions lorsque nécessaire mais permettant toujours une grande liberté. Créer un environnement Montessori chez soi ne nécessite pas de gros investissements. L'accent est mis sur la qualité et la pertinence des matériaux plutôt que sur la quantité. En adoptant cette approche, vous encouragez votre enfant à devenir un apprenant autonome, capable de prendre des initiatives et de résoudre des problèmes par lui-même.",
        "Marie Laurent",
        '2022-08-13',
        0,
        0,
    ),
    new articleDialog(
        "Playroom",
        "./assets/img/blogue/article_blogue_playroom.png",
        "Une salle de jeux bien organisée peut devenir un lieu de rêve pour vos enfants. Commencez par une planification soignée de l’espace. Divisez la pièce en différentes zones d’activité : un coin lecture, un espace artistique, une zone pour les jeux de construction et une aire pour les jeux physiques. Utilisez des meubles adaptés aux enfants, comme des étagères à leur hauteur et des boîtes de rangement faciles à manipuler. L'organisation est essentielle pour que les enfants puissent trouver et ranger leurs jouets de manière autonome. Les bacs transparents avec des étiquettes illustrées sont particulièrement utiles pour les plus jeunes. Pour stimuler leur créativité, fournissez une variété de matériaux artistiques, des livres et des puzzles. Pensez également à des jouets éducatifs qui encouragent l'apprentissage tout en jouant. Les murs peuvent être décorés avec des œuvres d'art des enfants ou des affiches éducatives colorées. La sécurité est primordiale. Assurez-vous que les meubles sont stables et bien fixés. Créez un espace confortable avec des tapis moelleux et des coussins pour les moments de détente. En aménageant une salle de jeux stimulante et organisée, vous offrez à vos enfants un environnement où ils peuvent s'épanouir, apprendre et s’amuser en toute sécurité.",
        "Lucie Périer",
        '2023-01-16',
        0,
        0,
    ),
    new articleDialog(
        "Préscolaire",
        "./assets/img/blogue/article_blogue_preEcole.png",
        "La transition vers la maternelle est une étape importante dans la vie des enfants. Pour les préparer au mieux, proposez des activités préscolaires qui combinent amusement et apprentissage. Les jeux de société simples, les puzzles et les jeux de construction sont parfaits pour développer leurs compétences cognitives et sociales. Introduisez des activités de pré-lecture et de pré-écriture, comme la reconnaissance des lettres et des chiffres, ou des jeux de rimes. Utilisez des livres illustrés pour stimuler leur intérêt pour la lecture. Les activités artistiques, comme le dessin et la peinture, permettent de développer leur motricité fine et leur créativité. Les jeux de rôle et les histoires interactives encouragent l'imagination et aident les enfants à comprendre le monde qui les entoure. Organisez des jeux qui nécessitent de suivre des instructions simples, ce qui est essentiel pour leur futur en classe. En créant un environnement riche en opportunités d'apprentissage et en stimulant leur curiosité naturelle, vous les aidez à acquérir les bases nécessaires pour une transition en douceur vers la maternelle. Chaque moment passé à jouer et à apprendre est une étape vers leur réussite future.",
        "Isabelle Girard",
        '2024-08-18',
        0,
        0,
    )
];

/**
 * Configure le dialogue de la boîte modale pour afficher les détails des articles.
 */
function configureDialog() {
    const overlay = document.querySelector('.overlay');
    const dialogue = document.querySelector('.dialogue_savoirPlus');
    const articleBtns = document.querySelectorAll('.art--btn');

    for (let i = 0; i < articleBtns.length; i++) {
        articleBtns[i].addEventListener('click', () => {
            overlay.classList.remove('hiddenOverlay')
            dialogue.textContent = '';
            dialogue.appendChild(articlesDialogue[i].ToHtml());

            const closeButton = document.querySelector('.btn--close--dialogue');

            closeButton.addEventListener('click', () => {
                overlay.classList.add('hiddenOverlay');
            });
        });
    }

    overlay.addEventListener('click', () => {
        overlay.classList.add('hiddenOverlay');
    });

    dialogue.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

configureDialog();