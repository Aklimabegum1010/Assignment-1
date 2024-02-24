const numbers = [23, 45, 67, 48, 29];


// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number)
// }

// or

// for(const number of numbers){
//     console.log(number)
// }




const products =[
    {id: 1, name: 'phone1', price: 20000},
    {id: 2, name: 'iphone2', price: 20000},
    {id: 3, name: 'ipad', price: 20000},
    {id: 4, name: 'mac book', price: 20000},
    {id: 5, name: 'phone5', price: 20000},
    {id: 6, name: 'Phone6', price: 20000},
    {id: 7, name: 'laptop', price: 20000},
    {id: 7, name: 'laptop2', price: 20000},
    {id: 7, name: 'laptop3', price: 20000},
]

// for (const product of products){
//     console.log(product)
// }

function matchedProducts (products, search){
    const matched = [];
    for (const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    } 
    return matched;
}

const result = matchedProducts(products,"laptop");
console.log(result);













































































