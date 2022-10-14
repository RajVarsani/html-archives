var ball = document.getElementsByClassName("ball")[0];
var rod1 = document.getElementsByClassName("rod1")[0];
var rod2 = document.getElementsByClassName("rod2")[0];
var container = document.getElementsByClassName("container")[0];
var size = 10;
var score1 = 0,
  score2 = 0;
var currentRod = rod2;
var gameStart = false;
var xDirec, yDirec;

var life1 = document.getElementsByClassName("heart1");
var life2 = document.getElementsByClassName("heart2");
var livesNo1 = 3,
  livesNo2 = 3;

var notIntial = true,
  id;
var startB = document.getElementById("start-button");
var newGameB = document.getElementById("new-game-button");
var scoreDisp1 = document.getElementById("score-display1");
var scoreDisp2 = document.getElementById("score-display2");

newGameB.addEventListener("click", newGame);
startB.addEventListener("click", visibleScreen);
document.addEventListener("keydown", moveRod);
document.addEventListener("keypress", launchBall);
window.addEventListener("resize", setGame);

setGame(); //to set game intially

/*to start new game*/
function newGame() {
  let maxScore = JSON.parse(localStorage.getItem("max_score") || 0);
  let maxScorePlayer = JSON.parse(localStorage.getItem("max_score_player"));

  if (maxScore === 0) {
    alert("No High Score ! This is ur first time");
  } else {
    alert(`High score is ${maxScore} scored by ${maxScorePlayer}.`);
  }
  clearInterval(id);
  //container.classList.add("blurry");
  document.getElementById("body-container").classList.add("blurry");

  startB.classList.remove("hidden");
  currentRod = rod2;
  for (var i = 0; i < 3; i++) {
    life1[i].style.visibility = "visible";
    life2[i].style.visibility = "visible";
  }
  livesNo1 = 3;
  livesNo2 = 3;
  setGame();
  (score1 = 0), (score2 = 0);
  scoreDisp1.innerText = 0 + "";
  scoreDisp2.innerText = 0 + "";
}

/*make screen visible when start game ckicked*/
function visibleScreen() {
  // container.classList.remove("blurry");
  document.getElementById("body-container").classList.remove("blurry");
  startB.classList.add("hidden");
}

//to control rods
function moveRod(event) {
  var r2Left = rod2.offsetLeft;
  var r1Left = rod1.offsetLeft;

  var key = event.keyCode;
  var elementW = rod2.offsetWidth;
  var containerW = container.clientWidth;
  var containerH = container.clientHeight;
  console.log(event.keyCode);
  if (key == 68) {
    //d pressed for moving rod1 right
    if (r1Left + elementW + size <= containerW) {
      rod1.style.left = r1Left + size + "px";
      r1Left += size;
    } else {
      rod1.style.left = containerW - elementW + "px";
      r1Left = containerW - elementW;
    }
    if (gameStart == false) resetBall();
  } else if (key == 65) {
    //a pressed for moving rod1 left
    if (r1Left - size >= 0) {
      rod1.style.left = r1Left - size + "px";
      r1Left -= size;
    } else {
      rod1.style.left = "0px";
      r1Left = 0;
    }
    if (gameStart == false) resetBall();
  }
  if (key == 39) {
    if (r2Left + elementW + size <= containerW) {
      rod2.style.left = r2Left + size + "px";
      r2Left += size;
    } else {
      rod2.style.left = containerW - elementW + "px";
      r2Left = containerW - elementW;
    }
    if (gameStart == false) resetBall();
  } else if (key == 37) {
    if (r2Left - size >= 0) {
      rod2.style.left = r2Left - size + "px";
      r2Left -= size;
    } else {
      rod2.style.left = "0px";
      r2Left = 0;
    }
    if (gameStart == false) resetBall();
  }
}

//to set ball direction before lauching when enter pressed and then call startGame
function launchBall(event) {
  if (event.keyCode == 13) {
    notIntial = false;
    //resetBall(currentRod);
    if (currentRod == rod2) {
      xDirec = +1;
      yDirec = -1;
    } else {
      xDirec = +1;
      yDirec = +1;
    }
    gameStart = true;
    //enterCount = 0;
    startGame();
  }
}

//to set game by setting rod and ball
function setGame() {
  console.log("game being set");
  gameStart = false;
  resetRods();
  resetBall();
}
//to reset ball over currentRod
function resetBall() {
  console.log("ball being set");
  if (currentRod == rod2) {
    ball.style.top =
      container.clientHeight -
      currentRod.offsetHeight -
      ball.offsetHeight +
      "px";
    ball.style.left =
      currentRod.offsetLeft +
      currentRod.offsetWidth / 2 -
      ball.offsetWidth / 2 +
      "px";
  } else {
    ball.style.top = currentRod.offsetHeight + "px";
    ball.style.left =
      currentRod.offsetLeft +
      currentRod.offsetWidth / 2 -
      ball.offsetWidth / 2 +
      "px";
  }
}
//to reset rod in middle
function resetRods() {
  console.log("rods being set");
  rod1.style.left = "45%";
  rod2.style.left = "45%";
}
//function to start game ie launch the ball

function startGame() {
  gameStart = true;
  id = setInterval(setBallPosition, 10);
}

//to move ball within container
function setBallPosition() {
  var ballTop = ball.offsetTop;
  var ballLeft = ball.offsetLeft;
  var ballW = ball.offsetWidth;

  if (ballLeft + ballW == container.clientWidth)
    //ball touches right boundary of the container
    xDirec *= -1; //reversing its x coordinates
  else if (ball.offsetLeft == 0) xDirec *= -1;
  else if (notIntial && ballTop == rod1.offsetHeight) {
    //ball lies at the top of the rod1 check if it strikes the rod or not
    var rl = rod1.offsetLeft - ball.offsetWidth;
    var rr = rod1.offsetLeft + rod1.offsetWidth;

    if (ballLeft <= rr && ballLeft >= rl) {
      yDirec *= -1;
      score1++;
      scoreDisp1.innerText = score1 + "";
    } else {
      alert("You Missed it!!");
      life1[livesNo1 - 1].style.visibility = "hidden";
      livesNo1--;

      clearInterval(id);
      if (!(livesNo1 == 0)) currentRod = rod1;
      notIntial = false;
      setGame();
      if (livesNo1 == 0) {
        if (score1 > score2) alert("Winner is player 1");
        else if (score2 > score1) alert("Winner is player 2");
        else alert("It's a Tie");

        newGame();
      }
      return;
    }
  } else if (
    notIntial &&
    ballTop + ballW == container.clientHeight - rod2.offsetHeight
  ) {
    var rl = rod2.offsetLeft - ball.offsetWidth;
    var rr = rod2.offsetLeft + rod2.offsetWidth;

    if (ballLeft <= rr && ballLeft >= rl) {
      yDirec *= -1;
      score2++;
      scoreDisp2.innerText = score2 + "";
    } else {
      alert("You Missed it!!");
      life2[livesNo2 - 1].style.visibility = "hidden";
      livesNo2--;

      clearInterval(id);
      if (!(livesNo2 == 0)) currentRod = rod2;
      notIntial = false;
      setGame();
      if (livesNo2 == 0) {
        if (score1 > score2) {
          let p1Score = JSON.parse(localStorage.getItem("player1") || 0);
          localStorage.setItem("player1", JSON.stringify(score1 + p1Score));
          alert("Winner is player 1");
        } else if (score2 > score1) {
          let p2Score = JSON.parse(localStorage.getItem("player2") || 0);
          localStorage.setItem(
            "player2",
            JSON.stringify(`${score2 + p2Score}`)
          );
          alert("Winner is player 2 ");
        } else {
          alert("It's a Tie");
        }

        let getP1Score = JSON.parse(localStorage.getItem("player1") || 0);
        let getP2Score = JSON.parse(localStorage.getItem("player2") || 0);

        if (getP1Score > getP2Score) {
          localStorage.setItem("max_score", JSON.stringify(getP1Score));
          localStorage.setItem("max_score_player", "player1");
        } else {
          localStorage.setItem("max_score", JSON.stringify(getP2Score));
          localStorage.setItem("max_score_player", "player2");
        }
        newGame();
      }
      return;
    }
  }
  ballTop += yDirec;
  ballLeft += xDirec;
  ball.style.top = ballTop + "px";
  ball.style.left = ballLeft + "px";
  notIntial = true;
  console.log(ball.offsetTop, ball.offsetLeft);
}
