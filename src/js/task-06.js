const entrada = document.querySelector("#validation-input");
entrada.addEventListener("blur", () => {
  if (entrada.value.length !== 6) {
    entrada.classList.add("invalid");
  } else {
    entrada.classList.remove("invalid");
    entrada.classList.add("valid");
  }
});
