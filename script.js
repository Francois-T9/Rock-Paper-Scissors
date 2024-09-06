const btn=document.querySelectorAll("#btn");



btn.forEach(box => box.addEventListener('click', () => {
    humanChoice=box.textContent
    const computerChoice=getComputerChoice();
    console.log('computer choice is : '+computerChoice);

    playRound(computerChoice,humanChoice);
    console.log('human choice is :'+humanChoice);
}
    
     
  ));


let humanScore=0;
let computerScore=0;

function playRound(computerChoice,humanChoice) {

        // console.log(computerChoice);
        // console.log(humanChoice);


        if((computerChoice==="rock" && humanChoice==="scissors") || (computerChoice==="paper" && humanChoice==="rock") || (computerChoice==="scissors" && humanChoice==="paper") ) {
            ++computerScore;
            console.log("the human score is : ",humanScore,"\n and the computer score is : ",computerScore);
            return(humanScore);
        }

        else if ( (humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper") ) {
            ++humanScore;
            console.log("the human score is : ",humanScore,"\nand the computer score is : ",computerScore);
            return(humanScore);
            
        }
        else {
            humanScore;
            computerScore;

        }
    }

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