var grid = document.querySelector('.grid');

grid.addEventListener('click', function(e) {
  if (e.target.dataset.number && e.target.dataset.status === 'free') {
    console.log(e.target.dataset.number, e.target.dataset.status);
    e.target.dataset.status = 'used';
    e.target.classList += ' ' + 'used';
    board[e.target.dataset.number] = 'X';
    console.table(board);
  }
});

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