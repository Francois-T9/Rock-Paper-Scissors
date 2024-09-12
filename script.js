const btn=document.querySelectorAll("#btn");
// const container=document.querySelector("#container");

const humanScoreContainer=document.querySelector("#humanScore");
const computerScoreContainer=document.querySelector("#computerScore");

const winnerMessage=document.querySelector(".winner")

// const text_div=document.querySelector("#result");
// const text=document.createElement("div");






btn.forEach(box => box.addEventListener('click', () => {
    const humanSelection=box.textContent
    const computerSelection=getComputerChoice();
    // console.log('computer choice is : '+computerSelection);

    playRound(computerSelection,humanSelection);
    // console.log('human choice is : '+humanSelection);
}
    
     
  ));

  


let humanScore=0;
let computerScore=0;

function playRound(computerChoice,humanChoice) {
        console.log(humanScore);
        console.log(computerScore);
        if(humanScore<=4 && computerScore<=4) {

            if((computerChoice==="Rock" && humanChoice==="Scissors") || (computerChoice==="Paper" && humanChoice==="Rock") || (computerChoice==="Scissors" && humanChoice==="Paper") ) {
                
                // console.log("the human score is : ",humanScore,"\n and the computer score is : ",computerScore);
                // text.textContent="the human score is : "+humanScore+"\n and the computer score is : "+computerScore;
                // container.appendChild(text);
                
                ++computerScore;
                computerScoreContainer.textContent=computerScore;
                text="Computer won the round ";
                
                winnerMessage.textContent=text;
                
                return(humanScore);
            }
    
            else if ( (humanChoice==="Rock" && computerChoice==="Scissors") || (humanChoice==="Paper" && computerChoice==="Rock") || (humanChoice==="Scissors" && computerChoice==="Paper") ) {
                
                // console.log("the human score is : ",humanScore,"\nand the computer score is : ",computerScore);
                // text.textContent="the human score is :\n "+humanScore+"\n and the computer score is : "+computerScore;
                // container.appendChild(text);
                ++humanScore;
                humanScoreContainer.textContent=humanScore;
                text="You won the round! ";
                
                winnerMessage.textContent=text;
                
                return(humanScore);
                
            }
            else {
                
                text="I'ts a draw! Play again ";
                
                winnerMessage.textContent=text;
                humanScore;
                computerScore;
    
            }
        }
        else {
            if(computerScore===5) {
                text="Computer won ";
                // container.appendChild(text);
                winnerMessage.textContent=text;
            }
            
            else {
                text="You won";
                // container.appendChild(text);
                winnerMessage.textContent=text;
        }
            }
            
        
         
            

        }
            
        
    
        
    

function getComputerChoice() {
    num=Math.random();
    if (num<0.33) {
        return("Rock")
    }
    else if (num>0.33 && num <0.66) {
        return("Paper")
    }

    else {
        return("Scissors")
    }
}