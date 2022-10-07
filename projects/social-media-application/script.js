const typedTextSpan = document.querySelector(".newPlatform");
const text = ["PLATFORM", "IDEAS", "COMMUNITY"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  typedTextSpan.textContent = letter;
  if (letter.length === currentText.length) {
    index = 0;
    count++;
  }
  setTimeout(type, 200);
})();

window.addEventListener("load", () => {
  const preloader = document.querySelector(".section1");
  setTimeout(() => {
    preloader.style.opacity = "0";
  }, 1000);
});


const bgChanger = () => {
  const section3 = document.querySelector(".section3");
  if (window.scrollY > window.innerHeight / 2) {
    section3.classList.add("section3-BgEffect");
  } else {
    section3.classList.remove("section3-BgEffect");
  }
};

window.addEventListener("scroll", () => {
  bgChanger();
});

