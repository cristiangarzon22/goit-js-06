const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementos = ingredients.map( Element => 
`<li>${Element}</li>`).join("");


const lista = document.querySelector("#ingredients");
lista.insertAdjacentHTML("afterbegin",elementos);