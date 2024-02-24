// function printName() {
//     console.log("Aklima")
// }

// printName();
// printName();
// printName();



// function printDetails(name, age, address){
//     console.log(`My name is ${name}. My age is ${age}. My address is ${address}.`);
// }



// const deteails = printDetails("Aklima Akhi", 26, "Sylhet");
// console.log(deteails);



// const num = -50 / 0;
// console.log (num);

// var eggPrice = 57;
// var onionPrice = 5;

// var total = eggPrice / onionPrice;
// console.log(parseInt(total));


// console.log(10 == '10');
// console.log(10 == '20');




// console.log('10' === '10');


// var biriyaniPrice = 500;

// if(biriyaniPrice <= 300){
//     console.log('gave me some biriyani');
// }
// else{
//     console.log("I am not buying biriani");
// }



// const salary = 20000;
// const isBCS = true;
// const height = 66;
// if(salary > 20000 && height > 61){
//     console.log('onno [patro khuji')
// }
// else if(salary <= 20000 && isBCS === true){
// console.log("We are raji")
// }
// else {
//     console.log('we are best')
// }

// const sentence ="what is your name. how are you.";
// const numOfA =sentence.split('a').length;
// console.log(numOfA)



// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function smallestName(numbers) {
//   let maxget = numbers[0];
//   let get = maxget.length;
//   for (const num of numbers) {
//     if (num.length < get) {
//       get = num;
//     }
//   }
//   return get;
// }
// console.log(smallestName(heights2));





// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.



// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones) {
//     let sum = 0;
//     for (let elem of phones) {
//       sum += elem.price;
//     }
//     sum /= phones.length;

//     return `${Math.round(sum)} average price of phone.`;
//   }

//   console.log(findAveragePhonePrice(phones));






/* Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */




// function calculateElectronicsBudget(
//     laptopQuantity,
//     tabletQuantity,
//     mobileQuantity
//   ) {
//     const laptop = 35000;
//     const tablet = 15000;
//     const mobile = 20000;

//     const totalBudgetLaptop = laptop * laptopQuantity;
//     const totalBudgetTablet = tablet * tabletQuantity;
//     const totalBudgetMobile = mobile * mobileQuantity;

//     const totalBudget = totalBudgetLaptop + totalBudgetTablet + totalBudgetMobile;

//     return totalBudget;
//   }
//   const budget = calculateElectronicsBudget(5, 3, 10)
//   console.log("total budget is", budget);






/*You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */





// function countDuplicate(array, find) {
//     let count = 0;

//     for (const element of array) {
//       if (element === find) count++;
//     }
//     return count;
//   }

//   const numbers = [5, 6, 11, 12, 98, 5];
//   console.log(`5 founded ${countDuplicate(numbers, 5)} times.`);
//   console.log(`25 founded ${countDuplicate(numbers, 25)} times.`);




//Write a function to count the number of vowels in a string.

// function countVowel(str) {
//     str = str.toLowerCase();
//     let a = 0,
//       e = 0,
//       i = 0,
//       o = 0,
//       u = 0,
//       count = 0;

//     for (let letter of str) {
//       switch (letter) {
//         case "a":
//           a++;
//           count++;
//           break;
//         case "e":
//           e++;
//           count++;
//           break;
//         case "i":
//           i++;
//           count++;
//           break;
//         case "o":
//           o++;
//           count++;
//           break;
//         case "u":
//           u++;
//           count++;
//       }
//     }
//     return `In this string, ${count} vowels founded. Here's the breakdown: A: ${a} times, E: ${e} times, I: ${i} times, O: ${o} times, and U: ${u} times founded.`;
//   }

//   const string =
//     "JavaScript, a cornerstone of web development, empowers dynamic and interactive user experiences. Its versatility spans from client-side scripting to server-side programming, making it a key player in crafting modern, responsive websites and applications. With an ever-growing ecosystem and continual updates, JavaScript remains a fundamental language for developers navigating the evolving digital landscape.";

//   console.log(countVowel(string));



/* Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */




// function longestWord(str) {
//     let count = 0,
//       word = "",
//       longestWord = "";

//     for (let letter of str) {
//       if (letter === " ") {
//         if (count > longestWord.length) {
//           longestWord = word;
//         }
//         word = "";
//         count = 0;
//       } else {
//         word += letter;
//         count++;
//       }
//     }
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//     return `The longest word is "${longestWord}"`;
//   }







// In Second Thought
/* function longestWord(str) {
  const array = str.split(" ");
  let value = [];
  for (let i = 0; i < array.length; i++) {
    let x = array[i].length;
    value.push(x);
  }
  let x = Math.max(...value);
  x = value.indexOf(x);
  return `The longest word is "${array[x]}"`;
} */

// console.log(longestWord("I am learning Programming to become a programmer"));




//Generate a random number between 10 to 20.

// console.log(
//     `A random number 10 to 20: ${Math.round(Math.random() * 10) + 10}.`
//   );




//Find the friend with the smallest name.
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];


// Second Thought



// let array = [];

// for (let elem of heights2) {
//   array.push(elem.length);
// }
// let min = Math.min(...array);
// min = array.indexOf(min);

// console.log(heights2[min]);






//Write a function to convert temperature from Celsius to Fahrenheit.

// function temperature(celsius) {
//     return (9 / 5) * celsius + 32;
//   }

//   console.log(
//     `Temperature form in celsius 22 and in fahrenheit ${temperature(22)}.`
//   );





//For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//   ];

//   function totalSalary(employees) {
//     let sum = 0;
//     for (let elem of employees) {
//       sum += elem.experience * elem.increment + elem.starting;
//     }

//     return `The company provided ${sum} tk total salary in a month.`;
//   }

//   console.log(totalSalary(employees));








// function checkLastWord(arr) {
//   // Check if the array is empty or doesn't contain strings
//   if (!arr || !arr.length || !arr.every(item => typeof item === 'string')) {
//     return false;
//   }

//   // Get the last word in the array
//   const lastWord = arr[arr.length - 1];

//   // Do your checks on the lastWord variable here
//   // For example, check if it starts with a certain letter, ends with a vowel, etc.

//   return true;
// }

// // Example usage:
// const arr = ["hello", "world", "cat"];
// console.log(checkLastWord(arr)); // Output: true









function password(obj) {
  const obj1 = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google",
  };
  if (!obj1.hasOwnProperty("name") || !obj1.hasOwnProperty("birthYear") || !obj1.hasOwnProperty("siteName")) {
    throw new Error("Invalid object. Missing properties.");
  }
  const siteName = obj1.siteName.charAt(0).toUpperCase() + obj1.siteName.slice(1);
  const userName = obj1.name.charAt(0).toUpperCase();
  const birthYear = obj1.birthYear;

  return `${siteName}#${userName}@${birthYear}`;
}

const password = password(obj);
console.log(password);




// function deleteInvalids(arr) {
// const arrays = []
//   for (const array of arr) {

//     if (Array.isArray(array)) {
//       return arrays
//      }
//      else{
//       return "this is invalid"
//      }

//   }
//   return arr;
// }




// const arr = [NaN, 1, 12, 0, -1, undefined];
// deleteInvalids(arr)
// // console.log(arr)








// function capitalizeFirs 
















































































