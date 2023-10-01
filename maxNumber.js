// ** get max number a list of numbers like array;

// example: 
const numbers = [12, 50, 5, 20,101, 25, 51, 77, 88, 99];

// solve the problem with function
function maxNumber(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
       if(element > max) {
           max = element
       }
    }
   return max;
}

console.log(maxNumber(numbers));