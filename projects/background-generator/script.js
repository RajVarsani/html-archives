let leftInput = document.querySelector(".color-left");
let rightInput = document.querySelector(".color-right");
let body = document.querySelector(".main");
let exp = document.querySelector(".css-link");

let leftColor = leftInput.value;
let rightColor = rightInput.value;

const set = () => {
  const link = `linear-gradient(to right, ${leftColor}, ${rightColor})`;

  body.style.background = link;
  exp.textContent = `background: ${link};`;
};

leftInput.addEventListener("input", (event) => {
  leftColor = event.target.value;
  set();
});

rightInput.addEventListener("input", (event) => {
  rightColor = event.target.value;
  set();
});

// Generating random gradient

let button=document.querySelector("button");

const generate=()=>{
  const values="0123456789abcdef";
  let color="#";

  for(let i=0; i<6; i++){
    let index=Math.floor((Math.random()*100)%16);
    color+=values[index];
  }
  return color;
};

button.addEventListener("click", () => {
  leftColor=generate();
  rightColor=generate();

  leftInput.value = leftColor;
  rightInput.value = rightColor;
  set();
});