let firstCard = 0;
let secondCard = 0;

let gameState = 0;
let gameScore = 0;

function buttonPress(cardNum){
    var tempName = 'button'+cardNum;
    const btnOption = document.getElementById(tempName)
    btnOption.disabled = true;

    if (gameState == 0){
        firstCard = cardNum;
        gameState = 1;
        console.log(firstCard);
    }
    else if(gameState == 1){
        secondCard = cardNum;
        gameState = 2;
        console.log(secondCard);
    }else{
        alert("Selections made, Press Check Answer")
    }

    if (gameState == 2){
        disableAllButtons()
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

        enableAllButtons()

    } else if (gameState == 1) {
        alert("Select one more option");
    } else if (gameState == 0) {
        alert("Select 2 options");
    }

    
}

//This function will disable the buttons when the player has selected enough cards
function disableAllButtons(){
    for (let i = 1; i < 5; i++) {
    var tempName = 'button'+i;
    var btnOption = document.getElementById(tempName);
    btnOption.disabled = true;
    }
    
}

//This function will enable the buttons when the player has evaluated their choices
function enableAllButtons(){
    for (let i = 1; i < 5; i++) {
    var tempName = 'button'+i;
    var btnOption = document.getElementById(tempName);
    btnOption.disabled = false;
    }
    
}

