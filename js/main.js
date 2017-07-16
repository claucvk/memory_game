console.log('Up and running!');

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay.length === 2) {
    if (cards[cardsInPlay[0]] === cards[cardsInPlay[1]]) {
      alert('You found a match!');
    } else {
      alert('Sorry, try again.');
    }
  }
};

var flipCard = function (cardId) {
  cardsInPlay.push([cardId]);
  console.log('User flipped ' + cards[cardId]);
  checkForMatch();
};
