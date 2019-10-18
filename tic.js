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
var p1Coin1 = document.querySelector('.p1-coin1')
var p1Coin2 = document.querySelector('.p1-coin2')
var p1Coin3 = document.querySelector('.p1-coin3')
var p2Coin1 = document.querySelector('.p2-coin1')
var p2Coin2 = document.querySelector('.p2-coin2')
var p2Coin3 = document.querySelector('.p2-coin3')

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



  clickCounter++


  // 7. Tally coins games winner on the score board

  //for all of box 1-2-3 for playerOne - insert all coins
  if ((box1.classList.contains('sloane-icon')) && (box2.classList.contains('sloane-icon')) && (box3.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
    //for all of box 1-2-3 for playerOne - insert two coins
  } else if ((box1.classList.contains('sloane-icon')) && (box2.classList.contains('sloane-icon')) && (box3.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
      //for all of box 1-2-3 for playerOne - insert one coin
  } else if ((box1.classList.contains('sloane-icon')) && (box2.classList.contains('sloane-icon')) && (box3.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
    // 4. Check which boxes have been ticked 
  } else if ((box1.classList.contains('sloane-icon')) && (box2.classList.contains('sloane-icon')) && (box3.classList.contains('sloane-icon'))) {
    
    //5. insert winning icon (fairy) next to player name to begin with
      playerOneScore.classList.add('winning-icon')

    } 
  /// Repeat steps for all possible 9 wins for each player
  /// box 1-2-3 playerTwo
  if ((box1.classList.contains('hockey-icon')) && (box2.classList.contains('hockey-icon')) && (box3.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
    p2Coin3.classList.add('coin')
  } else if ((box1.classList.contains('hockey-icon')) && (box2.classList.contains('hockey-icon')) && (box3.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
    p2Coin2.classList.add('coin')
  } else if ((box1.classList.contains('hockey-icon')) && (box2.classList.contains('hockey-icon')) && (box3.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
      p2Coin1.classList.add('coin')
  }
  else if ((box1.classList.contains('hockey-icon')) && (box2.classList.contains('hockey-icon')) && (box3.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } 

    //box 4-5-6 - playerOne

  else if ((box4.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box4.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box4.classList.contains('sloane-icon')) && (box4.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box4.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 

    
  //box 4-5-6 playerTwo
  if ((box4.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
    p2Coin3.classList.add('coin')
  } else if ((box4.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
    p2Coin2.classList.add('coin')
  } else if ((box4.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
      p2Coin1.classList.add('coin')
  } else if ((box4.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } 

  //box 7-8-9 - playerOne
  else if ((box7.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box7.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box7.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box7.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 
  
  //box 7-8-9 - playerTwo
  if ((box7.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
    p2Coin3.classList.add('coin')
  } else if ((box7.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
    p2Coin2.classList.add('coin')
  } else if ((box7.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
      p2Coin1.classList.add('coin')
  } else if ((box7.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } 

  //box 1-4-7 - playerOne
  else if ((box1.classList.contains('sloane-icon')) && (box4.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box1.classList.contains('sloane-icon')) && (box4.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box1.classList.contains('sloane-icon')) && (box4.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box1.classList.contains('sloane-icon')) && (box4.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 
  
  //box 1-4-7 - playerTwo
  if ((box1.classList.contains('hockey-icon')) && (box4.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
    p2Coin3.classList.add('coin')
  } else if ((box1.classList.contains('hockey-icon')) && (box4.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
    p2Coin2.classList.add('coin')
  } else if ((box1.classList.contains('hockey-icon')) && (box4.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
      p2Coin1.classList.add('coin')
  } else if ((box1.classList.contains('hockey-icon')) && (box4.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } 

  //box 2-5-8- playerOne
  else if ((box2.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box2.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box2.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box2.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box8.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 
  
 //box 2-5-8- playerTwo
 if ((box2.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
  p2Coin3.classList.add('coin')
} else if ((box2.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
  p2Coin2.classList.add('coin')
} else if ((box2.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
    p2Coin1.classList.add('coin')
} else if ((box2.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box8.classList.contains('hockey-icon'))) {
  playerTwoScore.classList.add('winning-icon')
} 

  //box 3-6-9 playerOne
  else if ((box3.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box3.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box3.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box3.classList.contains('sloane-icon')) && (box6.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 
    //box 3-6-9 playerTwo
  if ((box3.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
    p2Coin3.classList.add('coin')
  } else if ((box3.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
    p2Coin2.classList.add('coin')
  } else if ((box3.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
      p2Coin1.classList.add('coin')
  } else if ((box3.classList.contains('hockey-icon')) && (box6.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  } 

  //box 1-5-9 - playerOne
  else if ((box1.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box1.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box1.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box1.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box9.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 
    //box 1-5-9 - playerTwo
    if ((box1.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
      p2Coin3.classList.add('coin')
    } else if ((box1.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
      p2Coin2.classList.add('coin')
    } else if ((box1.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
        p2Coin1.classList.add('coin')
    } else if ((box1.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box9.classList.contains('hockey-icon'))) {
      playerTwoScore.classList.add('winning-icon')
    } 

  //box 3-5-7 playerOne
  else if ((box3.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin')) && (p1Coin2.classList.contains('coin'))) {
    p1Coin3.classList.add('coin')
  } else if ((box3.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon')) && (p1Coin1.classList.contains('coin'))) {
    p1Coin2.classList.add('coin')
  } else if ((box3.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon')) && (playerOneScore.classList.contains('winning-icon'))) {
      p1Coin1.classList.add('coin')
  } else if ((box3.classList.contains('sloane-icon')) && (box5.classList.contains('sloane-icon')) && (box7.classList.contains('sloane-icon'))) {
      playerOneScore.classList.add('winning-icon')
  } 
 
  //box 3-5-7 playerTwo
  if ((box3.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin')) && (p2Coin2.classList.contains('coin'))) {
    p2Coin3.classList.add('coin')
  } else if ((box3.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon')) && (p2Coin1.classList.contains('coin'))) {
    p2Coin2.classList.add('coin')
  } else if ((box3.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon')) && (playerTwoScore.classList.contains('winning-icon'))) {
      p2Coin1.classList.add('coin')
  } else if ((box3.classList.contains('hockey-icon')) && (box5.classList.contains('hockey-icon')) && (box7.classList.contains('hockey-icon'))) {
    playerTwoScore.classList.add('winning-icon')
  }  else {

  }

  
  // switch player
  if (clickCounter % 2 === 0) {
    currentPlayer = playerOne
  } else {
    currentPlayer = playerTwo
  }
  //////

  // use for switching scores
  // trying to figure out currentPlayer and currentScore streamlining
  // var currentScore = playerOneScore
  
  //   if (clickCounter % 2 === 0) {
  //     currentScore = playerScoreOne
  //   } else {
  //     currentScore = playerTwoScore
  //   }

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
      
      
    } else if (playerTwoScore.classList.contains('winning-icon')) {
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
7. DONE Create more coin slots to win


BONUS (once everything is functional)

JS
-Make it so it's not allowed to click on the same grid box twice
-Make it so after winner is declared the game is over
-Have a draw option

CSS
-DONEMake the pictures B&W
-DONE Make the Tooth text in header the tooth image instead
-DONE animate the page to have fairy flying in?
-make the images random
-Make a draw through the boxes animation
-Create a cover page where you click the tooth to enter (could just have a box, make the)

*/



