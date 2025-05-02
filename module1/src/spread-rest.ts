// Spread
const fruits: string[] = ["Apple", "Banana", "Grape"];
const summerFruits: string[] = ["Mango", "Lichi", "Jackfruit"];

const allFruitList: string[] = [
    ...fruits,
    ...summerFruits
]

// Rest operator
function add(...numbers: number[]): number{
    return numbers.reduce((acc: number, curr: number)=> acc + curr, 2)
}

console.log(add(1, 2, 3))