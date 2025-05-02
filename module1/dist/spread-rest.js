"use strict";
// Spread
const fruits = ["Apple", "Banana", "Grape"];
const summerFruits = ["Mango", "Lichi", "Jackfruit"];
const allFruitList = [
    ...fruits,
    ...summerFruits
];
// Rest operator
function add(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 2);
}
console.log(add(1, 2, 3));
