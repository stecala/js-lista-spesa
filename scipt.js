const shoppingList=['salad', 'tomato', 'soy milk', 'bread', 'pasta', 'ice cream'];
const cartElement = document.getElementById('cart');
let i = 0;
while(i<shoppingList.length){
    const elementToShop = document.createElement('li');
    elementToShop.classList.add('list-group-item', 'list-group-item-warning');
    elementToShop.innerText= shoppingList[i];
    cartElement.append(elementToShop);
    i++;
}