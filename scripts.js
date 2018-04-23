var grid = document.querySelector('.grid');

grid.addEventListener('click', function(e) {
  if (e.target.dataset.number) {
    console.log(e.target.dataset.number);
  }
});