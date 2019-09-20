console.log('butts')
// Global Variables 
var pChoice;
var cChoice;
var playerWin = "";
var playOptions = ['rock', 'paper', 'scissors'];

//DOM references:
var buttonDiv = document.querySelector('.buttons');
var resultText = document.querySelector('.result h2');
var cChoiceText = document.getElementById('cChoice');

//Event Handlers 
var displayResults = function() {
    cChoiceText.textContent = playOptions[cChoice];
    resultText.textContent = playerWin;
}

var checkForWin = function() {
    //Compare the 2 choices
    if (pChoice !== cChoice){
    switch(pChoice) {
        case 0:
            playerWin = cChoice === 1 ? 'You Lose' : 'You Win!';
            break;
        case 1: 
            playerWin = cChoice === 2 ? 'You Lose' : 'You Win!';
            break;
        case 2:
            playerWin = cChoice === 0 ? 'You Lose' : 'You Win!';
            break;
        }
    } else {
        playerWin = "Yall Tied";
    }
    //Make function: var win = function(playerChoice, computerChoice) => true/false (for player winning)
    displayResults();
}

var computerTurn = function() {
    //Computer will choose RPS
    //math.floor(random) 
    cChoice = Math.floor(Math.random() * 3);
    //& correlate that to either RPS
    checkForWin();
}

buttonDiv.addEventListener('click', function(e) {
    //Player will choose RPS
        //listen for a button click 
        // & save the value
    e.stopPropagation;
    pChoice = parseInt(e.target.id);
    console.log(pChoice);
    //Computers turn now 
    computerTurn();
});




//Display Results
    //Color the button chosen by player
    //disable the other buttons
    //display computer choice 
      //(add img)
    //Display who won