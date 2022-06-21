const shoppingList = ['salad', 'tomato', 'soy milk', 'bread', 'pasta', 'ice cream'];
const cartElement = document.getElementById('cart');
let i = 0;
const arrayClick = [];
while (i < shoppingList.length) {
    const elementToShop = document.createElement('li');
    arrayClick[i] = elementToShop;
    elementToShop.classList.add('list-group-item', 'list-group-item-warning');
    elementToShop.innerText = shoppingList[i];
    cartElement.append(elementToShop);
    i++;
}
console.log(arrayClick);
const liClick = cartElement.children;

for (let i = 0; i < liClick.length; i++) {
    liClick[i].addEventListener('click', function () {
        if (arrayClick[i].classList.contains('list-group-item-warning')==true) {
            arrayClick[i].classList.remove('list-group-item-warning');
            arrayClick[i].classList.add('text-decoration-line-through', 'list-group-item-info');
        
        }
        else {
            arrayClick[i].classList.remove('text-decoration-line-through', 'list-group-item-info');
            arrayClick[i].classList.add('list-group-item-warning');
            console.log(check);
        }
    })
}