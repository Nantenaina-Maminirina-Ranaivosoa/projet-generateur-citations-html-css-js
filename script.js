// 1. On définit notre liste de citations dans un tableau d'objets.
const quotes = [
  {
    text: "La vie, ce n’est pas d’attendre que les orages passent, c’est d’apprendre à danser sous la pluie.",
    author: "Sénèque",
  },
  {
    text: "Le seul moyen de faire du bon travail est d’aimer ce que vous faites.",
    author: "Steve Jobs",
  },
  {
    text: "Le succès, c'est tomber sept fois et se relever huit.",
    author: "Proverbe japonais",
  },
  {
    text: "La connaissance s'acquiert par l'expérience, tout le reste n'est que de l'information.",
    author: "Albert Einstein",
  },
  {
    text: "Le plus grand risque est de n'en prendre aucun.",
    author: "Mark Zuckerberg",
  },
];

// 2- On récupère les éléments HTML dont on a besoin.
const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-btn");

// 3- On crée la fonction qui va afficher une nouvelle citation.
function displayNewQuote() {
  // Choisir un index au hasard dans notre tableau
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Mettre à jour le contenu HTML
  quoteTextElement.textContent = `"${randomQuote.text}"`;
  quoteAuthorElement.textContent = `— ${randomQuote.author}`;
}

// 4. On ajoute un "écouteur d'événement" sur le bouton.
// La fonction displayNewQuote sera appelée à chaque fois qu'on clique sur le bouton.
newQuoteButton.addEventListener('click', displayNewQuote);

// 5. On appelle la fonction une première fois pour afficher une citation au chargement de la page.
displayNewQuote();