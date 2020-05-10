const result = document.querySelector(".result");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#body");
const randomBtn = document.querySelector(".btn");
//Event Listener

color1.addEventListener("input", setBgColor);
color2.addEventListener("input", setBgColor);
randomBtn.addEventListener("click", setRandomColor);

function setBgColor(e) {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  result.innerText = body.style.background;
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let rcolor = "#";

  for (let i = 0; i < 6; i++) {
    rcolor += letters[Math.floor(Math.random() * 16)];
  }
  return rcolor;
}

function setRandomColor() {
  let rColor1 = randomColor();
  let rColor2 = randomColor();
  color1.value = rColor1;
  color2.value = rColor2;
  setBgColor();
}
