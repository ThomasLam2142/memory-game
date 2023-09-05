let firstCard = 0;
let secondCard = 0;

let gameState = 0;

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

function checkBtnClick(){
    if (gameState == 2){
        console.log("Evaluating result")

        if (firstCard == secondCard){
            alert("Correct!");
        }

        if (firstCard != secondCard){
            alert("Wrong!");
        }
    }else if (gameState==1){
        alert("Select one more option")
    }
    else if (gameState==0){
        alert("Select 2 options")
    }
    
}

