// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             // console.log(number);
//             odds.push(number)
//         }
//     }
// console.log(odds);

// let sum = 0;
// for(const number of odds){
//     sum += number
// }

// let count = odds.length
// console.log(sum, count);
// const avg = sum / count
// return avg

// }


// const numbers = [45, 22, 67, 42, 88, 21, 59, 27];
// const avg = oddAverage(numbers);
// console.log(avg)



// const max = Math.max(55, 23, 767, 58, 90, 54, 37);
// console.log(max);




function deleteInvalids(num) {
    const numbers = [];
    if (!Array.isArray(num)) {
        return 'input is array'
    }

    for (const number of num) {
        try {
            numbers.push(num1(number)){
                caches(error){
                    return 'input value number'
                }
            }
        }
    }
return numbers
}

const numberArray = deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])

console.log(numberArray)




























































