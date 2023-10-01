// ** get odd numbers a list of numbers

// Example:
const numbers = [1, 0, 2, 5, 5, 8, 9, 11, 12, 18, 33, 101];

function findOddNumbers(numbers) {
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element % 2 != 0) {
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}

console.log(findOddNumbers(numbers));