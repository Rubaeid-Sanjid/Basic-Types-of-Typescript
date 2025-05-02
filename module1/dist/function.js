"use strict";
{
    // Normal Function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    console.log(add(20, 10));
    // Arrow Function
    const add2 = (num1, num2) => num1 + num2;
    // Object --> Function inside object known as method
    const user = {
        name: "Piyal",
        accBalance: 0,
        addBalance(amount) {
            return `My balance is: ${this.accBalance + amount}`;
        }
    };
    // Functions in Array
    const arr = [1, 2, 3, 4];
    const newArray = arr.map(((element) => element * element));
}
