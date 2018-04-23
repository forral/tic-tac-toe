var grid = document.querySelector('.grid');

var counter = 0;

grid.addEventListener('click', function(e) {

  if (e.target.dataset.number && e.target.dataset.status === 'free') {
    console.log(e.target.dataset.number, e.target.dataset.status);
    e.target.dataset.status = 'used';
    e.target.classList += ' ' + 'used';
    board[e.target.dataset.number] = 'X';
    console.table(board);
    counter++;
  }

  if (counter === 9) {
    counter = 0;
    resetBoard();
  }
});

function resetBoard() {
  // Remove all the CSS used class of the fields
  var fields = document.getElementsByClassName('field');
  fields = [...fields].forEach(function(field) {
    field.classList.remove('used');
  });

  // reset the board object, all the values it's = to false.
  for (var key in board) {
    if (board.hasOwnProperty(key)) {
      board[key] = false;
    }
  }
  console.table(board);
}

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