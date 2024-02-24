// How do you round up a number to its smallest integer greater than or equal to it?

// console.log(Math.__(0.95));
// Expected output: 1
// console.log(Math.__(4));
// Expected output: 4
// console.log(Math.__(7.004));
// Expected output: 8
// console.log(Math.__(-7.004));
// Expected output: -7


// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//      console.log(i);
//   }, 100);
// }




// function countNum(num){
//     let countFive = [];
//     for(let n of num){
//     if(n !== 25){
//     countFive = 0;
//     }
//     }
//     return countFive;
//     }
//     const numbers = [5, 6, 11, 12, 98, 5];
//     const countFive = countNum(numbers);
//     console.log(countFive);


// var lotteryTickets = [
//     {
//     name: 'John Smith',
//     tickets: 291
//   },
//   {
//     name: 'Bob the Builder',
//     tickets: 302
//   },
//   {
//     name: 'Elizabeth',
//     tickets: 72
//   }
// ]

// var lotteryTotal = 0;
// lotteryTickets.forEach(function(data){
//     lotteryTotal = lotteryTotal + data.tickets;
// })

// $('.tickets').text(lotteryTotal);

// var winningTicket = parseInt(Math.random() * lotteryTotal);
// $('.winner').text(winningTicket);

// const bijoye = lotteryTickets;
// console.log(bijoye)





// function getWinner(lotteryTickets, winningTicket) {
//     var count = 0
//     lotteryTickets.forEach(function (data) {
//         count += data.tickets
//         if (count >= winningTicket) {
//             return data.name
//         }
//     }

// const beyui = getWinner(lotteryTickets, winningTicket);
// console.log(beyui)



// Task one/two:
// let x="qualifikation";
// let y=x.split("");
// let letter="a";
// let count=0;
// for(let i=0; i<y.length;i++){
// if(y[i]==letter){
// count++;
// }
// }
// document.write(letter+" ) count : "+count)






// function checkName(name) {
//     const allowedCharacters = ["a", "b", "c"];

//     for (let i = 0; i < name.length; i++) {
//         if (allowedCharacters.includes(name[i])) {
//             return "good name";
//         }
//     }

//     return "bad name";
// }


// const result = checkName("Johc");
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












































































































