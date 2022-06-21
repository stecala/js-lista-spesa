const shoppingList=['salad', 'tomato', 'soy milk', 'bread', 'pasta'];
const cartElement = document.getElementById('cart');
let i = 0;
while(i<shoppingList.length){
    const elementToShop = document.createElement('li');
    elementToShop.innerText= shoppingList[i];
    cartElement.append(elementToShop);
    i++;
}