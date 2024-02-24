const fruits = ['apple', 'orange', 'mango','bannana', 'painapple'];
console.log(fruits.indexOf('bannana'));
console.log(fruits[3])


// how to change element other name

const fruits = ['apple', 'orange', 'mango','bannana', 'painapple'];

console.log(fruits)


// console.log(fruits.splice(2, 'jambura'))


// how to add and remove element


const destinations =['moldeep','switzerland','coxsbazer'];

console.log(destinations);

destinations.push('sweden');
console.log(destinations);
destinations.push('canada','london');
console.log(destinations);
destinations.pop('london');
console.log(destinations);


// how to includes element


const books =['feluda','pather pachali','biswasghatak']


console.log(books.includes('Eloquent JavaScript'))


// if(books.includes('Eloquent JavaScript')){
//     console.log('Yes')
// }
// else{
//     console.log('No')
// }




const nums =['mango', 'carote', 'bannana', 'apple'];

const num1 = [];
const num2 = '1,2,3,4,56,'

const num3 = ['kamal','rahim','salam']

console.log(Array.isArray(nums))
console.log(Array.isArray(num1))
console.log(Array.isArray(num2))


const names =['aklima','muslima','kulsuma','taslima']
console.log(names)
const names1 =['akhi','akter','begum','toma']
console.log(names1)
console.log(names.concat(names1));




const fruits = ['apple', 'orange', 'mango','bannana', 'painapple'];

console.log(fruits)


// console.log(fruits.splice(2, 'jambura'))




const score = 100;

if (score > 90 || score < 100){
    console.log("A")
}
else if (score > 80 ||score < 89){
    console.log("B")
}
else if (score > 70 ||score < 79){
    console.log("C")
}
else if (score > 60 ||score < 69){
    console.log("D")
}
else if (score < 50 ||score > 0){
    console.log("F")
}
else{
    console.log("Invalid score")
}


const firstPerson = 75;
console.log(firstPerson);


const burger = 501;
if(burger > 500){
    console.log("Free Coke")
}
else{
    console.log("You pay 30tk")
}



















