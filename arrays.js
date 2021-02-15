const shoppingList = ['pizza', 'chips', 'salsa', 'coffee'];
const cart = ['bread', 'apples']; 

const index = shoppingList.indexOf('coffee');
shoppingList[index] = 'Tea'; 

const removed = shoppingList.splice(1, 2, 'rice', 'beans'); 

console.log('shoppingList:', shoppingList);
console.log('cart:', cart); 


