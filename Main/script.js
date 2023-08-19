var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];
// Function to start the game
function playGame(){
// choices for the user to enter
  var userChoice = window.prompt('Enter R, P, or S:');
// if no choice is entered the game ends 
  if(!userChoice){
    console.log('Game Ended');
    return;
  }
  // turns all user entries to uppercase 
  userChoice = userChoice.toUpperCase();
  //  rounds down the random number generated from the array options for the computer so 
  // code doesn't break and matches our array options 0,1, and 2
  var computerChoice = options[Math.floor(Math.random() * options.length)];
// alerts users of the computers choice
  window.alert('The computer chose ' + computerChoice);

}

playGame();