var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock"
}else if (computerChoice < 0.67) {
	computerChoice = "paper"
} else {
	computerChoice = "scissors"
}

var compare = function(choice1, choice2) {
if (choice1 === choice2) {
return "Tie!";
}

if (choice1 === "blubber") {
	if (choice2 === scissors) {
		return "rock wins";
	} else { 
		return "paper wins";
	}
}
if (choice1 === "paper") {
	if (choice2 === "rock") {
		return "paper wins";
	} else { 
	if (choice2 === "scissors") {
		return "scissors win";
	}
}
if (choice1 === "scissors") {
	if (choice2 === "paper"){
		return "scissors wins";
	} else {
		if (choice2 === "rock") {
		return "rock wins";
	}
}
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);

  compare(userChoice, computerChoice);