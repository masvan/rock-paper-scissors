// Pick Rock, Paper, or Scissors for Computer //

let myScore = 0;
let computerScore = 0;

function displayRockButton() {
    
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice);

    document.getElementById("youimagereplace").src = "img/rock-user.png";

    if (computerChoice == "Paper") {

        computerScore++;

        document.getElementById("roundresult").innerHTML = "Computer Wins!";
        document.getElementById("youscorereplace").innerHTML = myScore;
        document.getElementById("computerscorereplace").innerHTML = computerScore;
        document.getElementById("computerimagereplace").src = "img/paper-user.png";

    } else if (computerChoice == "Rock") {

        document.getElementById("roundresult").innerHTML = "Tie!";
        document.getElementById("youscorereplace").innerHTML = myScore;
        document.getElementById("computerscorereplace").innerHTML = computerScore;
        document.getElementById("computerimagereplace").src = "img/rock-user.png";

    } else if (computerChoice == "Scissors") {

        myScore++;

        document.getElementById("roundresult").innerHTML = "You Win!";
        document.getElementById("youscorereplace").innerHTML = myScore;
        document.getElementById("computerscorereplace").innerHTML = computerScore;
        document.getElementById("computerimagereplace").src = "img/scissors-user.png";

    }

    if (myScore == 5) {
        myScore = 0;
        computerScore = 0;
        document.getElementById("roundresult").innerHTML = "YOU WON THE GAME."
    } else if (computerScore == 5) {
        myScore = 0;
        computerScore = 0;
        document.getElementById("roundresult").innerHTML = "YOU LOST THE GAME."
    }

};

function displayPaperButton() {
   
};

function displayScissorsButton() {
   
};

