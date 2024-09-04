
// console.log("Hellos");

function getComputerChoice() {
    num=Math.random();
    if (num<0.33) {
        return("rock")
    }
    else if (num>0.33 && num <0.66) {
        return("paper")
    }

    else {
        return("scissors")
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {

    choice=prompt("what is your choice");
    if (choice ==="rock" || choice==="paper" || choice==="scissors") {
        // console.log(choice);
        return(choice);
        
    }
    else {
        prompt("give a valid guess")
        return('give a valid guess ');
    }

}







function playGame() {
    let humanScore=0;
    let computerScore=0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(computerChoice,humanChoice) {

        console.log(computerChoice);
        console.log(humanChoice);


        if((computerChoice==="rock" && humanChoice==="scissors") || (computerChoice==="paper" && humanChoice==="rock") || (computerChoice==="scissors" && humanChoice==="paper") ) {
            ++computerScore;
            console.log("the human score is : ",humanScore,"\n and the computer score is : ",computerScore);
            return("the human score is : ",humanScore);
        }

        else if ( (humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper") ) {
            ++humanScore;
            console.log("the human score is : ",humanScore,"\nand the computer score is : ",computerScore);
            return("the human score is : ",humanScore);
            
        }
        else {
            return("tie");

        }
    }
    console.log(playRound(computerSelection,humanSelection));


    for(i=1;i<5;i++) {
        playRound(computerSelection,humanSelection);
    }




}

playGame();
