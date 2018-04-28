var grid = document.querySelector('.grid');
var fields = document.getElementsByClassName('field');
fields = [...fields];

var counter = 0;
var board = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false
}

var helpers = {
  getRandomInt: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

var definePlayers = {}

function askWitchPlayer() {
  var answer = prompt('Do you want to play with X or O?');
  answer = answer.toUpperCase();
  console.log(answer);

  if (answer === 'X') {
    definePlayers.player = 'X';
    definePlayers.computer = 'O';
    console.log('welcome player X');
  } else if (answer === 'O') {
    definePlayers.player = 'O';
    definePlayers.computer = 'X';
    console.log('welcome player O');
  } else {
    askWitchPlayer()
  }
}

grid.addEventListener('click', function(e) {
  if (e.target.dataset.number && e.target.dataset.status === 'free') {
    e.target.dataset.status = 'used-by-player-one';
    e.target.classList += ' ' + 'used-by-player-one';
    board[e.target.dataset.number] = definePlayers.player;
    counter++;

    checkWinner(definePlayers.player);

    if (counter === 9) {
      counter = 0;
      resetBoard();
    } else {
      AIRound();
      checkWinner(definePlayers.computer);
    }
  }
});

function resetBoard() {
  // remove all the markes from the board.
  fields.forEach(function (field) {
      field.classList.remove('used-by-player-one');
      field.classList.remove('used-by-player-two');
      field.dataset.status = 'free';
    });

  // reset the board object, all the values it's = to false.
  for (var key in board) {
    if (board.hasOwnProperty(key)) {
      board[key] = false;
    }
  }
  console.table(board);
}

function AIRound() {
  var played = false;

  while (played === false) {
    var spot = helpers.getRandomInt(1, 10);

    // 2. see if the space on the grid is avaiable.
    if (board[spot] === false) {
      // if so, market the spot.
      fields[spot - 1].dataset.status = 'used-by-player-two';
      fields[spot - 1].classList += ' ' + 'used-by-player-two';
      board[spot] = definePlayers.computer;
      counter++;
      played = true;
    }
  }
}

function checkWinner(player) {
  // if any of the players can make one of these sequences, that player wons.
  var winFieldPositions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  var playerOne = player;
  var counter;

  for (var i = 0; i < winFieldPositions.length; i++) {
    counter = 0;
    for (var j = 0; j < winFieldPositions[i].length; j++) {
      if (board[winFieldPositions[i][j]] === playerOne) {
        counter++
      }
      if (counter === 3) {
        console.log('Player ' + playerOne + ' is the Winner!', 'With the combination: ' + winFieldPositions[i]);
        return;
      }
    }
  }
  return 'there is no winners... yet';
}