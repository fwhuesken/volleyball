const button = document.getElementById('btn');
const players = ["Laura", "Felix", "Martin", "Hanna", "Simon", "Nora", "Dennis", "David", "Giulia M.", "Jackie"];

button.addEventListener("click", async function () {
logGame(dropDowns);
//insert functions to be executed on click
})

//Populate dropdown menus
let dropDowns = ["player1", "player2", "player3", "player4"];
for (let i = 0; i < dropDowns.length; i++) {
  let playerDropDown = document.getElementById(dropDowns[i]);
    
    for (let i = 0; i < players.length; i++) {
      let option = document.createElement("option");
      option.value = players[i];
      option.text = players[i];
      playerDropDown.appendChild(option);
    };
};

//Populate table


let winners = []
let losers = []

function logGame (dropDowns) {
  for (i=0; i<dropDowns.length; i++) {
    let select = document.getElementById(dropDowns[i])
    let player = select.options[select.selectedIndex].value;
    i<=1 ? winners.push(player) : losers.push(player)
  }
    console.log(`Winners are: ${winners}, losers are: ${losers})`)
    return winners, losers
}