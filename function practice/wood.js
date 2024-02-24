function shopping(shirt, pant, shoe) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;


    const shirtTotalPrice = shirt * perShirtPrice;
    const pantTotalPrice = pant * perPantPrice;
    const shoeTotalPrice = shoe * perShoePrice;

const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
return totalPrice;

}

const price = shopping(3, 2, 2);
console.log(price)


