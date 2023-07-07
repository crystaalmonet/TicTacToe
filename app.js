//Adding a string to represent the player's symbol
let playerSymbol = "X";

//Adding a string to keep track of whether the game has ended
let gameEnded = false

//Iterate over each cell in the table (between 1 and 9) and add an event listener that will run whener a user clicks on the cell
for(let i = 1; i <= 9; i++){
    document.getElementById(i.toString()).addEventListener(
        "click", function() {
            //Creating function within event listener for player's "X" to show on gameboard
            if (this.innerHTML === "" && !gameEnded){
                this.innerHTML = playerSymbol;  
                this.classList.add(playerSymbol.toLowerCase());
            //Creating function to swap between "X" and "O"
            if (playerSymbol === "X") {
                playerSymbol = "O";
              } else {
                playerSymbol = "X";
              }
            }
        }
    );
}
