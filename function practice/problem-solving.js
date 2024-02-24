


// function calculateMoney(ticket){
// const totalTicketPrice = ticket * 120;
// const salaryOfSecurity = 500;
// const staffSalary = 8 * 50;
// const totalSalary = salaryOfSecurity + staffSalary;
// const finalResult = totalTicketPrice - totalSalary;

// if(ticket <= 0){
//     return 'input positive number'
// } else if(totalTicketPrice < totalSalary){
// return `salary is more then ticket price . loss ${finalResult}`
// }
// else {
//     return finalResult;
// }
// }
// console.log(calculateMoney(1055));

// ---------------------------------------------  2  --------------------------------------


function checkName(name) {
if(typeof name !== 'string'){
    return 'invalid'
}
    const cheakWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    for(let i = 0; i < name.length; i++){
        if (cheakWord.toLowerCase().includes(name.toLocaleLowerCase()[i])){
            return "good name"
        }
    }
return "bad name"
}
const result = checkName("AkhfgdA");
console.log(result);




// --------------------------------  3  ------------------------

// function deleteInvalids(arr, num) {
//     const inputNum = []
//     if (arr.isArray === true) {
//         return 'this is array'
//     }
//     else {
//         return 'this is not a array'
//     }
// }
// const outputArr = deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])

// console.log(outputArr);



// --------------------------------------------  4  -----------------------------------------------

// function password() {
//     const object = {
//         name: "kolimuddin", birthYear: 1999, siteName: "google"
//     };

// if(typeof object.name !== "string" || obj.birthYear !== "number" || obj.birthYear < 1000 || obj.birthYear >= 10000 || obj.siteName !== "string"){
//     return "invalid"
// }
// }




// ------------------------------     5   --------------------------------
// function monthlySavings(arr, livingCost) {
//     if (!Array.isArray(arr) || typeof livingCost !== 'number') {
//         return "Invalid";
//     }
//     let newArr = [];
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 3000) {
//             newArr.push(arr[i] * 20 / 100);
//         }
//         else {
//             newArr.push(arr[i]);
//         }

//     }
//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i];
//     }
//     const result = sum - livingCost;
//     return result > 0 ? result : "Earn more";
// }
// // Example usage:
// const dataArray = [1000, 2000, 2500];
// const number = 5000;

// const result = monthlySavings(dataArray, number);
// console.log(result);













// function deleteInvalids(arr) {
//     if (!Array.isArray(arr)) {
//         return "Input must be an array.";
//     }
//     let count = 0;
//     let newArr = [];

//     for (const item of arr) {
//         if (typeof item === "number" && !Number.isNaN(item)) {
//             newArr.push(item);
//         } else {
//             if (newArr.length > 0) {
//                 count++;
//                 newArr = [];
//             }
//         }
//     }
//     if (newArr.length > 0) {
//         count++;
//     }

//     return count;
// }

// // Test cases
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
//   console.log(deleteInvalids([[1, 2, 3], 4, [5, 6]]));
//   console.log(deleteInvalids("hello"));
//   console.log(deleteInvalids([1, 2, true, "4"]));
//   console.log(deleteInvalids([1, 2, [3, 4]]));                       





































