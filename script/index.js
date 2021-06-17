const cardColors = {
  blueSecondary: "#6F98A8",
  bluePrimary: "#2B8EAD",
  blueDark: "#2F454E",
  lightGrey: "#BFBFBF",
};

const cards = [
  { text: 1, color: cardColors.blueSecondary },
  { text: 2, color: cardColors.bluePrimary },
  { text: 3, color: cardColors.blueDark },
  { text: 4, color: cardColors.bluePrimary },
  { text: 5, color: cardColors.blueDark },
  { text: 6, color: cardColors.lightGrey },
  { text: 7, color: cardColors.lightGrey },
  { text: 8, color: cardColors.blueSecondary },
  { text: 9, color: cardColors.blueDark },
];

// DOM query selectors
const cardParent = document.getElementById("wrapper_card");
const sortButton = document.getElementById("sort");
const suffleButton = document.getElementById("suffle");

const renderSortedCards = () => {
  cardParent.innerHTML = cards
    .sort((first, second) => first.text - second.text)
    .map(
      ({ text, color }) =>
        `<div class="card" data-color="${color}" >${text}</div>`
    )
    .join("");
};

const renderSuffledCards = () => {
  cardParent.innerHTML = cards
    .sort(() => Math.random() - 0.5)
    .map(
      ({ text, color }) =>
        `<div class="card" data-color="${color}" >${text}</div>`
    )
    .join("");
};

// Event Listeners
window.addEventListener("load", renderSortedCards);
sortButton.addEventListener("click", renderSortedCards);
suffleButton.addEventListener("click", renderSuffledCards);
