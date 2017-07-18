console.log('Up and running!');

var cards = [{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',
  },
];

var cardsInPlay = [];

var checkForMatch = function (cardId, card) {
  card.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else {
      alert('Sorry, try again.');
    }
  }
};

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  console.log('User flipped ' + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch(cardId, this);
};

var createBoard = function () {
  gameBord = document.getElementById('game-board');
  gameBord.innerHTML = '';
  cardsInPlay = [];
  for (var i = 0; i < cards.length; ++i) {
    var newCard = document.createElement('img');
    newCard.setAttribute('src', 'images/back.png');
    newCard.setAttribute('data-id', i);
    gameBord.appendChild(newCard);
    newCard.addEventListener('click', flipCard);
  }
};

createBoard();
/*var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', function () {
      flipCard();
    });

    document.getElementsById('game-board').appendChild(cardElement);
  }
};

createBoard();*/
