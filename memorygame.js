let firstCard = 0;
let secondCard = 0;

let gameState = 0;
let gameScore = 0;

function buttonPress(cardNum){
    
    if (gameState == 0){
        firstCard = cardNum;
        gameState = 1;
        console.log(firstCard);
    }
    else if(gameState == 1){
        secondCard = cardNum;
        gameState = 2;
        console.log(secondCard);
    }



}

function checkBtnClick() {
    const correctVar = document.getElementById("correctElement"); // Get the DOM element
    
    if (gameState == 2) {
        console.log("Evaluating result");

        if (firstCard == secondCard) {
            alert("Correct!");
            gameState = 0;
            gameScore += 1;
            console.log(gameScore);
        }

        if (firstCard != secondCard) {
            alert("Wrong!");
            gameState = 0;
            gameScore -= 1;
            console.log(gameScore);
        }

        correctVar.textContent = gameScore; // Update the text content of the DOM element
    } else if (gameState == 1) {
        alert("Select one more option");
    } else if (gameState == 0) {
        alert("Select 2 options");
    }
}


