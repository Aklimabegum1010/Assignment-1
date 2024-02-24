// function processData(arr, num) {
//     if (!Array.isArray(arr) || !arr.every(x => typeof x === 'number') || typeof num !== 'number') {
//         return "Invalid";
//     }
//     const processedArray = arr.map(x => x > 3000 ? x - (x * 0.8) : x);
//     const result = processedArray.reduce((acc, val) => acc + val, 0) - num;

//     return result > 0 ? result : "Earn more";
// }
// const dataArray = [1000 , 2000 , 2500];
// const number = 500;

// const result = processData(dataArray, number);
// console.log(result);







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





// function convertToArrayOfNumbers(data) {
//     if (!Array.isArray(data)) {
//       return "Input must be an array.";
//     }
//     const numbers = [];
//     for (const item of data) {
//       try {
//         numbers.push(Number(item));
//       } catch (error) {
//         return "Input array can only contain valid numbers.";
//       }
//     }
//     return numbers;
//   }

//   console.log(convertToArrayOfNumbers([1, 2, 3, 4.5])); 
//   console.log(convertToArrayOfNumbers("hello"));
//   console.log(convertToArrayOfNumbers([1, 2, true, "4"]));




//   function password(arr) {
//     if (!Array.isArray(arr)) {
//       return "input is an array.";
//     }
//     const numbers = [];
//     for (const num of arr) {
//       const number = Number(num);
//       if (Number.isNaN(number)) {
//         return "Input array can only contain values convertible to numbers.";
//       }
//       numbers.push(number);
//     }
//     return numbers;
//   }


// const returnArray = password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" })
// console.log(returnArray);






// { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }





// function password(obj) {
//   name: "kolimuddin" , birthYear: 1999 , siteName: "google" 
//   if (!("name" in obj) || !("birthYear" in obj) || !("siteName" in obj)) {
//     return "invalid";
//   }

//   // Check if birthYear is a 4-digit number
//   if (typeof obj.birthYear !== "number" || String(obj.birthYear).length !== 4) {
//     return "invalid";
//   }

//   // Format the string
//   return `${obj.siteName.toUpperCase()}#${obj.name}@${obj.birthYear}`;
//   // const modStr = str[0].toUpperCase() + str.slice(1);
// }

// // Test cases
// console.log(formatString({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));        // Output: Google#kolimuddin@1999
// console.log(formatString({ name: "jane", birthYear: "198", siteName: "facebook" }));         // Output: invalid (birthYear is not a number)












function monthlySavings(savings, livingCost) {
  if (!Array.isArray(savings) || typeof livingCost !== 'number') {
    return "Invalid";
  }
  else if (savings >= 0) {
    return 'number'
  }
  else if (savings < 0) {
    return 'earn more'
  }
  else {
    let newArr = [];
    let sum = 0;
    const result = sum - livingCost;

    for (let i = 0; i < savings.length; i++) {
      if (savings[i] >= 3000) {
        newArr.push(savings[i] * 20 / 100);
      }
      else {
        newArr.push(savings[i]);
      }

    }
    for (let i = 0; i < newArr.length; i++) {
      sum += newArr[i];
    }
    // return result > 0 ? result : "Earn more";
  }
}
// Example usage:
const dataArray = [1000, 2000, 3000];
const number = 5400;

const result = monthlySavings(dataArray, number);
console.log(result);







function calculateMoney(ticket){
  const totalTicketPrice = ticket * 120;
  const salaryOfSecurity = 500;
  const staffSalary = 8 * 50;
  const totalSalary = salaryOfSecurity + staffSalary;
  const finalResult = totalTicketPrice - totalSalary;
  
  if(ticket <= 0){
      return 'input positive number'
  } else if(totalTicketPrice < totalSalary){
  return `salary is more then ticket price . loss ${finalResult}`
  }
  else {
      return finalResult;
  }
  }
