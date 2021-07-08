const game = document.getElementById('game');
const dropDowns = document.querySelectorAll('select.form-field_full');
const players = ["Laura", "Felix", "Martin", "Hanna", "Simon", "Nora", "Dennis", "David", "Giulia G.", "Giulia M.", "Jackie"];

game.addEventListener("submit", logGame)

//Populate dropdown menus
dropDowns.forEach(dd => dd.innerHTML = players.map(player => `<option value>="${player}">${player}</option>)`).join(''));

function logGame(e) {
  e.preventDefault(); //cancel submit for now, later we can Ajax --> what does that mean?
  let winners = []
  let loswers = []
  dropDowns.forEach(dd, i) => {
    if (i <= 1) winners.push(dd.value)
    else losers.push(dd.value)
  })
}