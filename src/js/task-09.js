function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const cuerpo = document.querySelector("body");

btn.addEventListener("click", () => {
      cuerpo.style.background = getRandomHexColor();
      color.textContent = getRandomHexColor();
});