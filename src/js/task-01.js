const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.getElementsByClassName('item');

console.log(`Number of categories: ${categoryItems.length}`);

for (let item of categoryItems) {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;
  
  console.log(`\nCategory: ${title}`);
  console.log(`Elements: ${elements}`);
}
