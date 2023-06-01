const  restar  = document.querySelector('[data-action = decrement]');
const  lector  = document.querySelector("#value");
const  sumar  = document.querySelector('[data-action = increment]');

let contador = 0;
sumar.addEventListener("click",() =>{
    contador += 1;
    lector.textContent = contador;
});

restar.addEventListener("click",()=> {
    contador -= 1;
    lector.textContent = contador;
});
