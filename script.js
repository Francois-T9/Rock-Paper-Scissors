const btn=document.querySelectorAll("#btn");
const container=document.querySelector("#container");

// const text_div=document.querySelector("#result");
const text=document.createElement("div");






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
        if(humanScore<5 && computerScore<5) {

            if((computerChoice==="rock" && humanChoice==="scissors") || (computerChoice==="paper" && humanChoice==="rock") || (computerChoice==="scissors" && humanChoice==="paper") ) {
                
                // console.log("the human score is : ",humanScore,"\n and the computer score is : ",computerScore);
                text.textContent="the human score is : "+humanScore+"\n and the computer score is : "+computerScore;
                container.appendChild(text);
                ++computerScore;
                
                return(humanScore);
            }
    
            else if ( (humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper") ) {
                
                // console.log("the human score is : ",humanScore,"\nand the computer score is : ",computerScore);
                text.textContent="the human score is :\n "+humanScore+"\n and the computer score is : "+computerScore;
                container.appendChild(text);
                ++humanScore;
                return(humanScore);
                
            }
            else {
                humanScore;
                computerScore;
    
            }
        }
        else {
            if(computerScore===5) {
                text.textContent="computer won "+computerScore+" vs "+humanScore;
                container.appendChild(text);
            }
            
            else {
                text.textContent="human won "+humanScore+" vs "+computerScore;
                container.appendChild(text);
        }
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