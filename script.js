const btn=document.querySelectorAll("#btn");
// const container=document.querySelector("#container");

const emojiWin=document.getElementById('image-win');
emojiWin.style.display='none';

const emojiLost=document.getElementById('image-lost');
emojiLost.style.display='none';

const gameWin=document.getElementById('game-win');
gameWin.style.display='none';

const gameDraw=document.getElementById('game-draw');
gameDraw.style.display='none';


const imageContainer=document.getElementById('image-container');

const humanScoreContainer=document.querySelector("#humanScore");
const computerScoreContainer=document.querySelector("#computerScore");

const winnerMessage=document.querySelector(".winner")

const replayBtn=document.querySelector("#replayBtn");

// const text_div=document.querySelector("#result");
// const text=document.createElement("div");

replayBtn.addEventListener("click",() => {
    replay(humanScore,computerScore);
    console.log(humanScore);
    console.log(computerScore);


}

)


replay=() => {
    humanScore=0;
    computerScore=0;
    computerScoreContainer.textContent=computerScore;
    humanScoreContainer.textContent=humanScore;
    winnerMessage.textContent="";
    emojiLost.style.display='none';
    emojiWin.style.display='none';
    gameWin.style.display='none';
    imageContainer.style.display='';
    gameDraw.style.display='none';

}

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
                emojiLost.style.display='';
                imageContainer.style.display='none';
                gameDraw.style.display='none';

                emojiWin.style.display='none';
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
                gameDraw.style.display='none';

                winnerMessage.textContent=text;
                emojiWin.style.display='';
                emojiLost.style.display='none';
                imageContainer.style.display='none';
                return(humanScore);
                
            }
            else {
                
                text="I'ts a draw! Play again ";
                emojiWin.style.display='none';
                gameDraw.style.display='';
                emojiLost.style.display='none';
                imageContainer.style.display='none';
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
            
            else if(humanScore===5) {
                text="You won";
                // container.appendChild(text);
                gameWin.style.display='';
                emojiLost.style.display='none';
                emojiWin.style.display='none';
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
