document.addEventListener("DOMContentLoaded", () => {
  const disp = document.querySelector(".grid");
  const SD = document.querySelector(".score");
  const RD = document.querySelector(".res");
  let sq = [];
  const width = 4;
  let score = 0;

  Board();

  function Rightt() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let ONE = sq[i].innerHTML;
        let TWO = sq[i + 1].innerHTML;
        let THREE = sq[i + 2].innerHTML;
        let FOUR = sq[i + 3].innerHTML;
        let row = [
          parseInt(ONE),
          parseInt(TWO),
          parseInt(THREE),
          parseInt(FOUR),
        ];

        let filteredRow = row.filter((num) => num);
        let miss = 4 - filteredRow.length;
        let zeros = Array(miss).fill(0);
        let newRow = zeros.concat(filteredRow);

        sq[i].innerHTML = newRow[0];
        sq[i + 1].innerHTML = newRow[1];
        sq[i + 2].innerHTML = newRow[2];
        sq[i + 3].innerHTML = newRow[3];
      }
    }
  }

  function Leftt() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let ONE = sq[i].innerHTML;
        let TWO = sq[i + 1].innerHTML;
        let THREE = sq[i + 2].innerHTML;
        let FOUR = sq[i + 3].innerHTML;
        let row = [
          parseInt(ONE),
          parseInt(TWO),
          parseInt(THREE),
          parseInt(FOUR),
        ];

        let filteredRow = row.filter((num) => num);
        let miss = 4 - filteredRow.length;
        let zeros = Array(miss).fill(0);
        let newRow = filteredRow.concat(zeros);

        sq[i].innerHTML = newRow[0];
        sq[i + 1].innerHTML = newRow[1];
        sq[i + 2].innerHTML = newRow[2];
        sq[i + 3].innerHTML = newRow[3];
      }
    }
  }

  function UP() {
    for (let i = 0; i < 4; i++) {
      let ONE = sq[i].innerHTML;
      let TWO = sq[i + width].innerHTML;
      let THREE = sq[i + width * 2].innerHTML;
      let FOUR = sq[i + width * 3].innerHTML;
      let column = [
        parseInt(ONE),
        parseInt(TWO),
        parseInt(THREE),
        parseInt(FOUR),
      ];

      let fd = column.filter((num) => num);
      let miss = 4 - fd.length;
      let zeros = Array(miss).fill(0);
      let newColumn = fd.concat(zeros);

      sq[i].innerHTML = newColumn[0];
      sq[i + width].innerHTML = newColumn[1];
      sq[i + width * 2].innerHTML = newColumn[2];
      sq[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function Downn() {
    for (let i = 0; i < 4; i++) {
      let ONE = sq[i].innerHTML;
      let TWO = sq[i + width].innerHTML;
      let THREE = sq[i + width * 2].innerHTML;
      let FOUR = sq[i + width * 3].innerHTML;
      let column = [
        parseInt(ONE),
        parseInt(TWO),
        parseInt(THREE),
        parseInt(FOUR),
      ];

      let fd = column.filter((num) => num);
      let miss = 4 - fd.length;
      let zeros = Array(miss).fill(0);
      let newColumn = zeros.concat(fd);

      sq[i].innerHTML = newColumn[0];
      sq[i + width].innerHTML = newColumn[1];
      sq[i + width * 2].innerHTML = newColumn[2];
      sq[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function combineRow() {
    for (let i = 0; i < 15; i++) {
      if (sq[i].innerHTML === sq[i + 1].innerHTML) {
        let combinedTotal =
          parseInt(sq[i].innerHTML) + parseInt(sq[i + 1].innerHTML);
        sq[i].innerHTML = combinedTotal;
        sq[i + 1].innerHTML = 0;
        score += combinedTotal;
        SD.innerHTML = score;
      }
    }
    checkForWin();
  }

  function CC() {
    for (let i = 0; i < 12; i++) {
      if (sq[i].innerHTML === sq[i + width].innerHTML) {
        let combinedTotal =
          parseInt(sq[i].innerHTML) + parseInt(sq[i + width].innerHTML);
        sq[i].innerHTML = combinedTotal;
        sq[i + width].innerHTML = 0;
        score += combinedTotal;
        SD.innerHTML = score;
      }
    }
    checkForWin();
  }

  function control(e) {
    if (e.keyCode === 37) {
      keyLeft();
    } else if (e.keyCode === 38) {
      keyUp();
    } else if (e.keyCode === 39) {
      keyRight();
    } else if (e.keyCode === 40) {
      keyDown();
    }
  }
  document.addEventListener("keyup", control);

  function keyRight() {
    Rightt();
    combineRow();
    Rightt();
    GN();
  }

  function keyLeft() {
    Leftt();
    combineRow();
    Leftt();
    GN();
  }

  function keyUp() {
    UP();
    CC();
    UP();
    GN();
  }
  function addColours() {
    for (let i = 0; i < sq.length; i++) {
      if (sq[i].innerHTML == 0) sq[i].style.backgroundColor = "black";
      else if (sq[i].innerHTML == 2) sq[i].style.backgroundColor = "#fff5eb";
      else if (sq[i].innerHTML == 4) sq[i].style.backgroundColor = "#ede0c8";
      else if (sq[i].innerHTML == 8) sq[i].style.backgroundColor = "#f2b179";
      else if (sq[i].innerHTML == 16) sq[i].style.backgroundColor = "#f59563";
      else if (sq[i].innerHTML == 32) sq[i].style.backgroundColor = "#ff5f03";
      else if (sq[i].innerHTML == 64) sq[i].style.backgroundColor = "#f65e3b";
      else if (sq[i].innerHTML == 128) sq[i].style.backgroundColor = "yellow";
      else if (sq[i].innerHTML == 256) sq[i].style.backgroundColor = "#edcc61";
      else if (sq[i].innerHTML == 512) sq[i].style.backgroundColor = "#edc850";
      else if (sq[i].innerHTML == 1024) sq[i].style.backgroundColor = "#edc53f";
      else if (sq[i].innerHTML == 2048) sq[i].style.backgroundColor = "#edc22e";
    }
  }
  function keyDown() {
    Downn();
    CC();
    Downn();
    GN();
  }

  function checkForWin() {
    for (let i = 0; i < sq.length; i++) {
      if (sq[i].innerHTML == 2048) {
        RD.innerHTML = "You WIN";
        document.removeEventListener("keyup", control);
        setTimeout(() => clear(), 3000);
      }
    }
  }

  function checkForGameOver() {
    let zeros = 0;
    for (let i = 0; i < sq.length; i++) {
      if (sq[i].innerHTML == 0) {
        zeros++;
      }
    }
    if (zeros === 0) {
      RD.innerHTML = "You LOSE!";
      document.removeEventListener("keyup", control);
      setTimeout(() => clear(), 3000);
    }
  }
  function GN() {
    randomNumber = Math.floor(Math.random() * sq.length);
    if (sq[randomNumber].innerHTML == 0) {
      sq[randomNumber].innerHTML = 2;
      checkForGameOver();
    }
  }
  function clear() {
    clearInterval(myTimer);
  }
  function Board() {
    for (let i = 0; i < width * width; i++) {
      square = document.createElement("div");
      square.innerHTML = 0;
      disp.appendChild(square);
      sq.push(square);
    }
    GN();
    GN();
  }

  addColours();

  var myTimer = setInterval(addColours, 50);
});
