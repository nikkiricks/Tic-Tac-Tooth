console.log('hello tooth')
//var completedCount = document.querySelector('.completed-count');

var playerOneScore = document.querySelector('.player-one-score')
var playerTwoScore = document.querySelector('.player-two-score')
var boxes = document.querySelectorAll('.box')
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')
var resetBtn = document.querySelector('.reset-btn')


// 3. Rotate between players between Player 1 and Player 2

// use for switching players
var clickCounter = 0
var playerOne = 'sloane-icon'
var playerTwo = 'hockey-icon'
var currentPlayer = playerOne

var playGame = function (event) {
  // check box is empty (this isn't working)
  if (boxes[i] === currentPlayer ) {
    return // stop the function
  }

  // current player move
  event.target.classList.add(currentPlayer)

  // event.target.classList.add('sloane-icon')
  // event.target.classList.add('sloane-icon')

  clickCounter++

  
  // switch player
  if (clickCounter % 2 === 0) {
    currentPlayer = playerOne
  } else {
    currentPlayer = playerTwo
  }


  // 4. Check which boxes have been ticked 
  if ((box1.classList.contains('sloane-icon')) && (box2.classList.contains('sloane-icon')) && (box3.classList.contains('sloane-icon'))) {
  
   //5. insert winning icon next to player name
    playerOneScore.classList.add('winning-icon')
  /// Repeat steps for all possible 9 wins for each player
  } else if ((box1.classList.contains('hockey-icon')) && (box2.classList.contains('hockey-icon')) && (box3.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box4.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon'))) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box4.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box7.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon'))) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box7.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box1.classList.contains('sloane-icon')) && (box4.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon'))) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box1.classList.contains('hockey-icon')) && (box4.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box2.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon'))) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box2.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box3.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon'))) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box3.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box1.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon'))) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box1.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box3.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) ) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box3.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } else {

  }

  }

//looping through for the grid clicks
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', playGame)

  
  //don't delete, end of overall function
}


// 6. Clear board with a reset function

  var resetGame = function () {

    for (var i = 0; i < boxes.length; i++) {
      if (playerOneScore.classList.contains('winning-icon')) {
        boxes[i].classList.remove('sloane-icon')
        boxes[i].classList.remove('hockey-icon')
  // 7. Tally more games winner on the score board
      } else if (playerOneScore.classList.contains('winning-icon')) {
          boxes[i].classList.remove('sloane-icon')
          boxes[i].classList.remove('hockey-icon')
  // Make a class to insert more icons??? Do I need to make more boxes?
          playerOneScore.classList.add('winning-icon')
      }
      
      
      
      else if (playerTwoScore.classList.contains('winning-icon')) {
        boxes[i].classList.remove('sloane-icon')
        boxes[i].classList.remove('hockey-icon')
      } 
    }
  }

//looping grid clicks once reset button  
  resetBtn.addEventListener('click', resetGame)








/*
1. DONE Make 9 box grid
2. DONE Allow every box to be clickable
3. DONE Rotate between players
4. DONE Track which boxes have been marked X and which ones have been marked O and total
5. DONE Declare winner 
6. DONE Clear game board (with a reset button?)
7. Tally more games winner on the score board


BONUS (once everything is functional)

JS
-Make it so it's not allowed to click on the same grid box twice
-Make it so after winner is declared the game is over

CSS
-Make the pictures B&W
-Make the Tooth text in header the tooth image instead
-animate the page to have fairy flying in?
-make the images random
-Make a draw through the boxes animation

*/

 // create an array to loop through to be able to refer to placement on the grid?? 

// var boxGrid = ['.box1', '.box2', '.box3', '.box4', '.box5', '.box6', '.box7', '.box8', '.box9' ]

