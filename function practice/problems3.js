// const min = Math.min(167, 190, 120, 165, 137);
// console.log(min);


// const heights = [167, 190, 120, 165, 137];

// function getMax(numbers){
// let max = numbers[0];
// for(const num of numbers){
//     if(num > max){
//         max = num;
//     }
// }
// return max
// }


// const max = getMax(heights);
// console.log(max)






// const heights2 = [167, 190, 120, 165, 137];

// function getMin(numbers){
// let min = numbers[0];
// for(const num of numbers){
//     if(num < min){
//         min = num;
//     }
// }
// return min
// }


// const min = getMin(heights2);
// console.log(min)



// const phones =[
//     {name: "Samsung", price: 20000, camera: "12mp", color: "black"},
//    {name: "Iphone", price: 20001, camera: "12mp", color: "black"},
//    {name: "Xomi", price: 30001, camera: "12mp", color: "black"},
//    {name: "Walton", price: 25001, camera: "12mp", color: "black"},
//    {name: "HTC", price: 27001, camera: "12mp", color: "black"},
//    {name: "Oppo", price: 220001, camera: "12mp", color: "black"},

// ]

// function getHeightPhone(phones){
//     let max = phones[0];
//     for(const phone of phones){
//         if(phone.price < max.price){
//             max = phone
//         }
//     }
//     return MIDIInput;
// }

// const height = getHeightPhone(phones)
// console.log('Cheapest phone is: ',height)



// function checkName(name) {
    
//         const cheakWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//         for(let i = 0; i < name.length; i++){
//             if(typeof name !== 'string'|| typeof name === 'number'){
//                 return 'invalid'
//             }
//             else if (cheakWord.includes(name[i])){
//                 return "good name"
//             }
//         }
//     return "bad name"
//     }
//     const result = checkName(234);
//     console.log(result);

    function checkName(name) {
        const latters = ["a", "e", "i", "o", "u", "y", "w"]
        const lastLetter = name.toLowerCase().slice(-1);
        if (typeof name !== "string") {
          return "invalid";
        }
        else if (latters.includes(lastLetter)) {
          return "good name";
        } else {
          return "bad name";
        }
      }
      
      // Test cases
      console.log(checkName('12')); // Output: good name
    //   console.log(checkName("Bob"));    // Output: bad name
    //   console.log(checkName(123));






























