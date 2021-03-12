function computerPlay() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  let computerSelection = computerPlay();