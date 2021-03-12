var rockps = [
    "rock",
    "paper",
    "scissors"
]

var randomString = rockps[Math.floor(Math.random()*rockps.length)];

function computerPlay() {
  console.log(randomString);
}