const carousel = document.querySelector(".carousel-container");
const nextButton = document.querySelector(".right-handle");
const previousButton = document.querySelector(".left-handle");
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".featured-block");

let slideIndex = 0;

function displayCards() {
  if (slideIndex >= cards.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = Math.max(0, cards.length - 4);
  }

  cards.forEach((card) => {
    card.style.display = "none";
  });

  for (let i = slideIndex; i < slideIndex + 4 && i < cards.length; i++) {
    cards[i].style.display = "flex";
  }
}

nextButton.addEventListener("click", () => {
  console.log("next button clicked");
  slideIndex += 4;
  displayCards();
});

previousButton.addEventListener("click", () => {
  console.log("previous button clicked");
  slideIndex -= 4;
  displayCards();
});

displayCards();
