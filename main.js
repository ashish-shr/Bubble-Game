var timeStart = 60;
var score = 0;
var randHit = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function newHit() {
  randHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = randHit;
}
function bubbleMaker() {
  var bubble = "";

  for (var i = 1; i <= 168; i++) {
    var rand = Math.floor(Math.random() * 10);
    bubble += `<div class = "bubble">${rand}</div>`;
  }

  document.querySelector("#bottomPanel").innerHTML = bubble;
}

function timer() {
  var time = setInterval(function () {
    if (timeStart > 0) {
      timeStart--;
      document.querySelector("#timerVal").textContent = timeStart;
    }
    else {
      clearInterval(time);
      document.querySelector("#bottomPanel").innerHTML = `<h1>Your score was ${score}</h1>`;
    }
  }, 1000);
};

document.querySelector("#bottomPanel")
  .addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (clickedNumber === randHit) {
      increaseScore();
      bubbleMaker();
      newHit();
    }
  })

timer();
bubbleMaker();
newHit();