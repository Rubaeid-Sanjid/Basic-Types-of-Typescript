{

// Normal Function
function add(num1: number, num2: number = 10): number{
    return num1 + num2;
}

console.log(add(20,  10));

// Arrow Function
const add2 = (num1: number, num2: number): number => num1 + num2;

// Object --> Function inside object known as method
const user = {
    name: "Piyal",
    accBalance: 0,
    addBalance(amount: number): string{
        return `My balance is: ${this.accBalance + amount}`;
    }
}

// Functions in Array
const arr: number[] = [1, 2, 3, 4];
const newArray: number[] = arr.map(((element: number): number => element * element))

}