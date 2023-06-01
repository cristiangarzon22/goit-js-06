const entrada = document.querySelector("#font-size-control");
const texto = document.querySelector("#text");
entrada.addEventListener("input",(event) => {
    texto.style.fontSize = `${event.currentTarget.value}.px`;
});