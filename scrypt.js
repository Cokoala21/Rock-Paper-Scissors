let numberGenerator = Math.random() *3;

 console.log (numberGenerator)

 function getComputerChoise() {
if (numberGenerator < 3 && numberGenerator > 2){
    return("ROCK");
} else if (numberGenerator < 2 && numberGenerator > 1){
    return("PAPER");
} else {
    return("SCISSORS");
}

   }
   
let computerChoice = getComputerChoise().toLowerCase();
console.log(computerChoice)


let playerChoise = prompt("Choose: Rock,Paper or Scissors!").toLowerCase();
console.log(playerChoise)

function matchRPS(computerChoice,playerChoise){
    if (computerChoice == playerChoise){
        console.log("IT'S A TIE!")
    } else if(computerChoice == "rock" && playerChoise == "paper") {
        console.log("PLAYER WINS!")
    } else if (computerChoice == "paper" && playerChoise == "rock"){
        console.log("CPU WINS!")
    } else if (computerChoice == "scissors" && playerChoise == "rock"){
        console.log("PLAYER WINS!")
    }else if (computerChoice == "rock" && playerChoise == "scissors"){
        console.log("CPU WINS!")
    }else if (computerChoice == "paper" && playerChoise == "scissors"){
        console.log("PLAYER WINS!")
    }else if (computerChoice == "scissors" && playerChoise == "paper"){
        console.log("CPU WINS!")
    } else {console.log("Your choise is not valid :(")}
}

matchRPS(computerChoice,playerChoise);