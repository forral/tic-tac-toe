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

grid.addEventListener('click', function(e) {

  if (e.target.dataset.number && e.target.dataset.status === 'free') {
    console.log(e.target.dataset.number, e.target.dataset.status);
    e.target.dataset.status = 'used';
    e.target.classList += ' ' + 'used';
    board[e.target.dataset.number] = 'X';
    console.table(board);
    counter++;

    if (counter === 9) {
      counter = 0;
      resetBoard();
    } else {
      AI();
    }

  }


});

function resetBoard() {
  // remove all the markes from the board.
  fields.forEach(function (field) {
      field.classList.remove('used');
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

function AI() {
  
  var played = false;

  while (played === false) {
    var spot = helpers.getRandomInt(1, 10);

    // 2. see if the space on the grid is avaiable.
    if (board[spot] === false) {
      // if so, market the spot.
      fields[spot - 1].dataset.status = 'used';
      fields[spot - 1].classList += ' ' + 'used';
      board[spot] = 'O';
      console.table(board);
      counter++;
      played = true;
    }
  }
}