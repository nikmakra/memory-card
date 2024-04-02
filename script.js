"use strict";

const container = document.querySelector(".container");
const cardContainer = document.querySelectorAll(".card");

// RANDOM SORT CARDS
const divs = Array.from(cardContainer);
const newDivs = divs.sort(() => Math.random() - 0.5);
container.innerHTML = "";
newDivs.forEach((div) => container.appendChild(div));

let clickCount = 0;
let flippedCards = [];
cardContainer.forEach((c) => {
  c.addEventListener("click", function (e) {
    const card = e.target.closest(".card-inner");
    // CHECK IF THE CARD IS ALREADY FLIPPED
    if (flippedCards.includes(card)) return;

    card.style.transform = "rotateY(180deg)";
    clickCount++;
    flippedCards.push(card);

    if (clickCount === 2) {
      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];
      const firstImg = firstCard.querySelector(".icon");
      const secondImg = secondCard.querySelector(".icon");
      // COMPARE IMG SOURCES
      if (firstImg.src !== secondImg.src) {
        setTimeout(() => {
          firstCard.style.transform = "rotateY(0deg)";
          secondCard.style.transform = "rotateY(0deg)";
        }, 1000);
      }
      // RESET
      clickCount = 0;
      flippedCards = [];
    }
  });
});
