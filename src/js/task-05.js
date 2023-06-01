const entrada = document.querySelector("#name-input");
const salida = document.querySelector("#name-output");

entrada.addEventListener("input", (event) => {
    salida.textContent = event.currentTarget.value;
});