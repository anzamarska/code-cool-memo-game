cards = document.querySelectorAll(".card");
click = 0;
previousCard = null;

cards.forEach(card => card.addEventListener("click", flip));

function flip() {
  click = click + 1;
  this.classList.toggle("flip");
  toggleImages(this);

  if (click % 2 == 1) {
    previousCard = this;
    return;
  }

  if (isMatch(previousCard, this)) {
    alert("Hurra! You've matches!");
    return;
  }

  toggleImages(this);
  toggleImages(previousCard);
}

function isMatch(firstCard, secondCard) {
  img1 = firstCard.querySelector(".front").src;
  img2 = secondCard.querySelector(".front").src;
  return img1 == img2;
}

function toggleImages(card) {
  card.querySelector(".front").classList.toggle("show");
  card.querySelector(".back").classList.toggle("hide");
}
