const hands = document.querySelectorAll(".single-icons");
const choices = ["rock","paper","scissors", "lizard", "spock"];
const scoreEl = document.querySelector(".score-box");
const handsIcons = document.querySelectorAll(".single-icons");
const handsWrapper = document.querySelector(".all-icons");
const rules = document.querySelector(".btn-rules");
const rulesClose = document.querySelector(".close-icon");
const rulesWrapper = document.querySelector(".rules-wrapper");
const nextPage = document.querySelector(".wrapper");
const playAgain = document.querySelector(".play-again");
const userSelect = document.querySelector("#user-choice"); 
const computerSelect = document.querySelector("#computer-choice"); 
const resultText = document.querySelector(".results");

var score = 0;
let userChoice = undefined;

/*user choice*/
hands.forEach(hands =>{
    hands.addEventListener("click", ()=>{
        userChoice = hands.getAttribute("data-choice");
        // console.log(userChoice);
        checkWinner();
    });
});


// show or hiding the hands 
handsIcons.forEach(handsIcons =>{
    handsIcons.addEventListener("click", ()=>{
    handsWrapper.style.display = "none";
    nextPage.style.display = "flex";
    rules.style.display = "none";
    });
});
  

// play again button
playAgain.addEventListener("click", ()=>{
    handsWrapper.style.display = "flex";
    nextPage.style.display = "none";
    rules.style.display = "block";
    userSelect.classList.remove("winner");
    computerSelect.classList.remove("winner");
});

// rules button funtionality

rules.addEventListener("click", ()=>{
    rulesWrapper.style.display = "flex";
    document.querySelector(".wrapper04").style.zIndex = "1";
});

rulesClose.addEventListener("click", ()=>{
    rulesWrapper.style.display = "none";
    document.querySelector(".wrapper04").style.zIndex = "-10";
});





// games logic win or lose
function checkWinner(){
    let computerChoice = randomComputerChoice();
    changeHands(userSelect,userChoice);
    changeHands(computerSelect,computerChoice);

    // console.log(computerChoice);
    if(userChoice === computerChoice){
        // draw
        updateScore(0);
        resultText.innerText =`IT'S A TIE`; 
        // console.log("draw");
    }
    else if((userChoice === "rock" && (computerChoice === "lizard" || computerChoice === "scissors")) ||
    (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
    (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
    (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
    (userChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))){
        // user wins
        updateScore(1);
        resultText.innerText = "YOU WON";
        userSelect.classList.add("winner");
        // console.log("win");
    }
    else{
        //user loses
        // updateScore(-1);
        resultText.innerText = "YOU LOSE";
        computerSelect.classList.add("winner");
        // console.log("lose");
    }
}



// update score function
function updateScore(value){
    score += value;
    scoreEl.innerText = score;
    // console.log(score);
};

//random computer choice  
function randomComputerChoice() {
   return choices[Math.floor(Math.random()*choices.length)];
}


// function to change hands on next page
function changeHands(selectedEl, choice){
    //removing everything
    selectedEl.classList.remove("secondPage-spock");
    selectedEl.classList.remove("secondPage-scissors");
    selectedEl.classList.remove("secondPage-paper");
    selectedEl.classList.remove("secondPage-lizard");
    selectedEl.classList.remove("secondPage-rock");
    
    // adding user's choosed things
    selectedEl.classList.add(`secondPage-${choice}`);
    selectedEl.querySelector("img").src = `images/icon-${choice}.svg`;
    selectedEl.querySelector("img").alt = `${choice}`;
}

