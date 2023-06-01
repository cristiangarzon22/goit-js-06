const formulario = document.querySelector(".login-form");

const email = document.querySelector(".em");
const contras = document.querySelector(".co");
formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    if (email.value.length <= 0){
        alert("todos los campos deben ser rellenados");
    }if (contras.value.length <= 0) {
        alert("todos los campos deben de ser rellenados");
    } 
});