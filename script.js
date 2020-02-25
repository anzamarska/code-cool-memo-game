const cardsColor = [
  "red",
  "red",
  "green",
  "green",
  "blue",
  "blue",
  "yellow",
  "yellow",
  "blueviolet",
  "blueviolet",
  "pink",
  "pink",
  "orange",
  "orange",
  "darkcyan",
  "darkcyan",
  "hotpink",
  "hotpink"
];

const setColorAmount = colorAmount => {
  const allGameColors = cardsColor.slice(0, colorAmount * 2);
  return (allGameDivElements = allGameColors.map(item => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>Hello</h1>";
    my_div = document.getElementById("div1");
    document.body.insertBefore(newDiv, my_div);
  }));
};

console.log("test", setColorAmount(4));

document.body.createElement("div");

let cards = setColorAmount(4); //document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = function() {
  activeCard = this;

  if (activeCard == activeCards[0]) return;

  activeCard.classList.remove("hidden");
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    console.log("1");
    return;
  } else {
    console.log("2");
    cards.forEach(card => card.removeEventListener("click", clickCard));
    activeCards[1] = activeCard;

    setTimeout(function() {
      if (activeCards[0].className === activeCards[1].className) {
        console.log("Win!");
        activeCards.forEach(card => card.classList.add("off"));
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("off"));

        if (gameResult == gamePairs) {
          const endTime = new Date().getTime();
          const gameTime = (endTime - startTime) / 1000;
          alert(`Win!!! Your game time is: ${gameTime} seconds.`);
          location.reload();
        }
      } else {
        console.log("Chlip");
        activeCards.forEach(card => card.classList.add("hidden"));
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach(card => card.addEventListener("click", clickCard));
    }, 500);
  }
};

const init = function() {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });

  setTimeout(function() {
    cards.forEach(card => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 3000);
};

init();
