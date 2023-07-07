//Adding a string to represent the player's symbol
let playerSymbol = "X";

//Adding a string to keep track of whether the game has ended
let gameEnded = false

//Creating new variable to store possible winning positions in arrays
let possWin = [
    [1,2,3], [4,5,6],
    [7,8,9], [1,4,7],
    [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
];

//Adding a new function to iterate through each array to check for winning positions
function checkWin(){
    for(let i = 1; i <= possWin.length; i++){
        if (
            document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol
          ) {
              //adding a CSS class of "win" so the cells will highlight when it's in a winning position
             document.getElementById(winPos[i][0]).classList.add("win");
             document.getElementById(winPos[i][1]).classList.add("win");
             document.getElementById(winPos[i][2]).classList.add("win");
             //set gameEnded to "true" so no more moves can be made after a "win" is established
             gameEnded = true;
//Alerts playerSymbol wins, the 500 delays the pop up by a half a second
  setTimeout(function() {
    alert(playerSymbol + " wins!");
  }, 500);
          } 
    }
}

//Iterate over each cell in the table (between 1 and 9) and add an event listener that will run whener a user clicks on the cell
for(let i = 1; i <= 9; i++){
    document.getElementById(i.toString()).addEventListener(
        "click", function() {
            //Creating function within event listener for player's "X" to show on gameboard
            if (this.innerHTML === "" && !gameEnded){
                this.innerHTML = playerSymbol;  
                this.classList.add(playerSymbol.toLowerCase());
                //Adding function to check if player has won
                checkWin();
            //Creating if- else statement to swap between "X" and "O"
            if (playerSymbol === "X"){
          playerSymbol = "O";
            } else {
          playerSymbol = "X";   
            }
            }
        }
    );
}
