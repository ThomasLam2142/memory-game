let firstCard = 0;
let secondCard = 0;

let gameState = 0;
let gameScore = 0;

let questionNum = 1;

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
    
    //if gamestate == 2 the game is ready to evaluate
    if (gameState == 2) {
        console.log("Evaluating result");
        enableAllButtons()//re-enable all of the buttons
        evaluateAnswer()

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

function evaluateAnswer(){
    if (questionNum == 1){
        //1 == 1
        //2 == 1
        //3 == 2
        //4 == 2
        //Question 1 Answer Evaluation
        if (firstCard == 1 || firstCard == 2){
            firstCard =1;
        }
        if (secondCard == 1 || secondCard == 2){
            secondCard =1;
        }

        if (firstCard == 3 || firstCard == 4){
            firstCard =2;
        }
        if (secondCard == 3 || secondCard == 4){
            secondCard =2;
        }
    }

    questionNum += 1;
}