var wins = 0;
var ties = 0;
var losses = 0;
// connects message id to be able to add text from javascript
var messageEl = document.querySelector('#message');

// Array of options for computer to pick from
var options = ["R", "P", "S"];
// Function to start the game
function playGame(){
// choices for the user to enter
  var userChoice = window.prompt('Enter R, P, or S:');
// if no choice is entered the game ends 
  if(!userChoice){
    console.log('Game Ended');
    messageEl.textContent = "The game was ended. Have a nice day"
    return;
  }
  // turns all user entries to uppercase 
  userChoice = userChoice.toUpperCase();
  //  rounds down the random number generated from the array options for the computer so 
  // code doesn't break and matches our array options 0,1, and 2
  var computerChoice = options[Math.floor(Math.random() * options.length)];
// alerts users of the computers choice
  window.alert('The computer chose ' + computerChoice);
// if the user choice is the same as the computer choice alert that its a tie
  if(userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!")
    // checks user choice and computer choice for the winner
    // user win options
  } else if (
    //   || = or 
  (userChoice === "R" && computerChoice === 'S') ||
  (userChoice === "P" && computerChoice === 'R') ||
  (userChoice === "S" && computerChoice === 'P') 
  ) {
    // Logs the wins of the user
    wins++;
    window.alert('You win!');
    // Logs loss if conditions aren't meet
  }else {
    losses++;
    window.alert('You lose');
  }
  // Alerts users of the score
  window.alert('Stats: Wins: ' + wins + ' Losses: ' + losses + ' Ties: ' + ties);
// Options for if the user wants to play again
  var playAgain = window.confirm('Play Again?');
// Calls function again in the case that the user wants to play again
  if(playAgain){
    playGame();
  }
  // returns if the user 
  else {
    messageEl.textContent = "The game was ended. Have a nice day"
    return;
  }

}

playGame();