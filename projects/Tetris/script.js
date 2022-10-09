const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const sq = 30;
const row = 20;
const column = 20;
const vacant = "white";
const scoreTxt = document.querySelector("#scoreTxt");
const scorePhone = document.querySelector("#scorePhone");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const down = document.querySelector("#down");
const rotate = document.querySelector("#rotate");
const background = document.querySelector("#background");
background.loop = true;
const points = document.querySelector("#points");
const loose = document.querySelector("#gameOver");
const start = document.querySelector("#start");
const scoreBtn = document.querySelector("#scoreBtn");
const restartBtn = document.querySelector("#restartBtn");

let score = 0;

//On start Disable Stuffs
const startBoard = document.querySelector("#startboard");
const onBoard = document.querySelector("#board");
const onlyPhone = document.querySelector("#onlyPhone");
const onlyPc = document.querySelector("#onlyPc");
const disablebtn = document.querySelector("#buttons");
const scoreModal = document.querySelector("#scoreModal");

onBoard.style.display = "none";
scoreModal.style.display = "none";
onlyPhone.style.display = "none";
onlyPc.style.display = "none";
disablebtn.style.display = "none";

window.addEventListener("resize", function () {
  // window.location.reload();
});

left.addEventListener("click", function () {
  p.moveLeft();
});
right.addEventListener("click", function () {
  p.moveRight();
});
down.addEventListener("click", function () {
  p.moveDown();
});
rotate.addEventListener("click", function () {
  p.rotate();
});

// Tetris Pieces
const S = [
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1],
  ],
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
];
const Z = [
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
];
const J = [
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
  ],
];
const T = [
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ],
];
const L = [
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
];
const bx = [
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
];
const ln = [
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
];

// Draw Square function
const drawSquare = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * sq, y * sq, sq, sq);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.strokeRect(x * sq, y * sq, sq, sq);
};

// Game Board
let board = [];
for (r = 0; r < row; r++) {
  board[r] = [];
  for (c = 0; c < column; c++) {
    board[r][c] = vacant;
  }
}

//Draw Board
const drawBoard = () => {
  for (r = 0; r < row; r++) {
    for (c = 0; c < column; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
};

drawBoard();

const pieces = [S, Z, J, T, L, bx, ln];

// Piece Class
class Piece {
  constructor(piece, color) {
    this.piece = piece;
    this.color = color;
    this.pieceN = 0;
    this.activePiece = this.piece[this.pieceN];
    this.x = 5;
    this.y = -2;
  }
  draw = () => {
    for (r = 0; r < this.activePiece.length; r++) {
      for (c = 0; c < this.activePiece.length; c++) {
        if (this.activePiece[r][c])
          drawSquare(this.x + c, this.y + r, this.color);
      }
    }
  };
  undraw = () => {
    for (r = 0; r < this.activePiece.length; r++) {
      for (c = 0; c < this.activePiece.length; c++) {
        if (this.activePiece[r][c]) drawSquare(this.x + c, this.y + r, vacant);
      }
    }
  };
  collison = (x, y, piece) => {
    for (r = 0; r < piece.length; r++) {
      for (c = 0; c < piece.length; c++) {
        if (!piece[r][c]) {
          continue;
        }
        let nX = this.x + c + x;
        let nY = this.y + r + y;
        if (nX < 0 || nX > column || nY >= row) {
          return true;
        }
        if (nY < 0) {
          continue;
        }
        if (board[nY][nX] != vacant) {
          return true;
        }
      }
    }
    return false;
  };
  touchEnd = () => {
    for (r = 0; r < this.activePiece.length; r++) {
      for (c = 0; c < this.activePiece.length; c++) {
        if (!this.activePiece[r][c]) continue;
        if (this.y + r < 0) {
          background.pause();
          loose.play();
          gameOver = true;
          break;
        }
        board[this.y + r][this.x + c] = this.color;
      }
    }
    for (r = 0; r < row; r++) {
      let isRowFull = true;
      for (c = 0; c < column; c++) {
        isRowFull = isRowFull && board[r][c] != vacant;
      }
      if (isRowFull) {
        for (let y = r; y > 1; y--) {
          for (c = 0; c < column; c++) {
            board[y][c] = board[y - 1][c];
          }
        }
        for (c = 0; c < column; c++) {
          board[0][c] = vacant;
        }
        score += 50;
        points.play();
        scoreTxt.innerHTML = score;
        scoreBtn.innerHTML = score;
        scorePhone.innerHTML = score;
      }
    }
    drawBoard();
  };
  moveDown = () => {
    if (!this.collison(0, 1, this.activePiece)) {
      this.undraw();
      this.y++;
      this.draw();
    } else {
      this.touchEnd();
      p = randomPiece();
    }
  };
  moveRight = () => {
    if (!this.collison(1, 0, this.activePiece)) {
      this.undraw();
      this.x++;
      this.draw();
    }
  };
  moveLeft = () => {
    if (!this.collison(-1, 0, this.activePiece)) {
      this.undraw();
      this.x--;
      this.draw();
    }
  };
  rotate = () => {
    let nextPattern = this.piece[(this.pieceN + 1) % 4];
    let kick = 0;

    if (this.collison(0, 0, nextPattern)) {
      if (this.x > column / 2) {
        kick = -1;
      } else {
        kick = 1;
      }
    }

    if (!this.collison(0, 0, nextPattern)) {
      this.undraw();
      this.pieceN = (this.pieceN + 1) % 4;
      this.activePiece = this.piece[this.pieceN];
      this.draw();
    }
  };
  update = () => {
    this.moveDown();
  };
}

function randomPiece() {
  return new Piece(
    pieces[Math.floor(Math.random() * pieces.length)],
    `hsl(${Math.random() * 360},50%,50%)`
  );
}

let p = randomPiece();
let gameOver = false;
let time = Date.now();

function animate() {
  let timeNow = Date.now();
  if (timeNow - time > 500) {
    p.update();
    time = Date.now();
  }
  if (gameOver) {
    onBoard.style.display = "none";
    scoreModal.style.display = "";
    onlyPhone.style.display = "none";
    disablebtn.style.display = "none";
    akash.style.display = "";
  }
  if (!gameOver) {
    requestAnimationFrame(animate);
  }
}

//Event Listeners
document.addEventListener("keydown", movement);
function movement(event) {
  if (event.keyCode == 37) {
    p.moveLeft();
    time = Date.now();
  } else if (event.keyCode == 38) {
    p.rotate();
    time = Date.now();
  } else if (event.keyCode == 39) {
    p.moveRight();
    time = Date.now();
  } else if (event.keyCode == 40) {
    p.moveDown();
  }
}

function gameStart() {
  animate();
}

const akash = document.querySelector("h2");

start.addEventListener("click", function () {
  startBoard.style.display = "none";
  onBoard.style.display = "";
  onlyPhone.style.display = "";
  if (innerWidth > innerHeight) {
    disablebtn.style.display = "none";
    onlyPhone.style.display = "none";
    akash.style.display = "none";
    onlyPc.style.display = "";
  } else {
    disablebtn.style.display = "flex";
  }
  background.play();
  setTimeout(() => {
    gameStart();
  }, 1000);
});

restartBtn.addEventListener("click", function () {
  window.location.reload();
});
