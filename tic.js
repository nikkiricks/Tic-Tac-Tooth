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


// 3. Rotate between players between Player 1 and Player 2

// use for switching players
var clickCounter = 0
var playerOne = 'O'
var playerTwo = 'X'
var currentPlayer = playerOne

var switchPlayer = function (event) {
  // check box is empty
  if (event.target === true) {
    return // stop the function
  }

  // current player move
  event.target.textContent = currentPlayer
  clickCounter += 1 

  
  // switch player
  if (clickCounter % 2 === 0) {
    currentPlayer = playerOne
  } else {
    currentPlayer = playerTwo
  }


  // 4. Check which boxes have been ticked and 5. check for wins
  if ((box1.textContent === "O") && (box2.textContent === "O") && (box3.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box1.textContent === "X") && (box2.textContent === "X") && (box3.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box4.textContent === "O") && (box5.textContent === "O") && (box6.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box4.textContent === "X") && (box5.textContent === "X") && (box6.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box7.textContent === "O") && (box8.textContent === "O") && (box9.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box7.textContent === "X") && (box8.textContent === "X") && (box9.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box1.textContent === "O") && (box4.textContent === "O") && (box7.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box1.textContent === "X") && (box4.textContent === "X") && (box7.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box2.textContent === "O") && (box5.textContent === "O") && (box8.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box2.textContent === "X") && (box5.textContent === "X") && (box8.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box3.textContent === "O") && (box6.textContent === "O") && (box9.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box3.textContent === "X") && (box6.textContent === "X") && (box9.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box1.textContent === "O") && (box5.textContent === "O") && (box9.textContent === "O")) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box1.textContent === "X") && (box5.textContent === "X") && (box9.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else if ((box3.textContent === "O") && (box5.textContent === "O") && (box7.textContent === "O") ) {
    playerOneScore.classList.add('winning-icon')
  } else if ((box3.textContent === "X") && (box5.textContent === "X") && (box7.textContent === "X")) {
    playerTwoScore.classList.add('winning-icon')
  } else {

  }

  }


for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', switchPlayer)
}
    

//saved c/p code



 // create an array to loop through to be able to refer to placement on the grid?? 

// var boxGrid = ['.box1', '.box2', '.box3', '.box4', '.box5', '.box6', '.box7', '.box8', '.box9' ]

/*
1. DONE Make 9 box grid
2. DONE Allow every box to be clickable
3. DONE Rotate between players
4. DONE Track which boxes have been marked X and which ones have been marked O and total
5. DONE Declare winner 
6. Tally winner on the score board
//Code to try and update the player count
  // completedCount.textContent = event.target.textContent('X' || 'O').length
  // console.log(event.target.textContent('X' || 'O').length)
7. Clear game board (with a reset button?)

BONUS (once everything is functional)

JS
-Make it so it's not allowed to click on the same grid box twice
-Make it so after winner is declared the game is over
-Make a draw declaration

CSS
-Replace X and O's with picture of a tooth and a toothless grin

*/
