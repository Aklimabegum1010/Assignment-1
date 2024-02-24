





const button = document.getElementById('A1');
function changeButtonColor() {
    button.classList.add('active');

    button.style.backgroundColor = 'green'
}
button.addEventListener('click', changeButtonColor);










const allBtn = document.getElementsByClassName('bus-btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const seat = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[1].innerText;

        const economoy = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[3].innerText;



        const price = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[5].innerText;

        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[5].innerText)

        console.log(seat, economoy, price)


        const selectedContainer = document.getElementById('selected-seat-container');



        const seatCount = getConvertElement('seat-1');
        document.getElementById('seat-1').innerText = seatCount + 1;

        const seatLeft = getConvertElement('seat-left1');
        document.getElementById('seat-left1').innerText = seatCount - 1;




        const div = document.createElement('div');
        div.classList.add('flex')
        div.classList.add('gap-20')

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seat;
        p2.innerText = economoy;
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div)

        updateTotalCost(price);

        updateTotalCost();

    })
}







// function updateGrandTotal(status) {
//     const totalCost = getConvertElement('total-cost');
//     if (status == undefined) {
//         document.getElementById('grand-total').innerText = totalCost
//     }
//     else {
//         const couponCode = document.getElementById('coupon-code').value;

//         if (couponCode == 'NEW15') {
//             const discounted = totalCost * 0.2;
//             document.getElementById('grand-total').innerText = totalCost - discounted
//         }
//         else {
//             alart('Enter a valid coupon code')
//         }
//     }

// }
















function updateTotalCost() {
    const totalCost = getConvertElement('grand-total');
    document.getElementById('grand-total').innerText = totalCost;

}




function updateTotalCost(price) {

    const totalCost = getConvertElement('total-cost');
    // const convertedTotalCost = parseInt(totalCost)
    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;

    document.getElementById('total-cost').innerText = sum;

}




function hideElementById(element) {
    const element1 = document.getElementById(element);
    element1.classList.add('hidden');
}
function showElementById(element) {
    const element1 = document.getElementById(element);
    element1.classList.remove('hidden');
}




function getConvertElement(id) {
    const seat = document.getElementById(id).innerText;
    const convertSeat = parseInt(seat);
    // console.log(convertSeat);
    return convertSeat;
}


// setBackgroundColorById('A1')


const result = getConvertElement('seat-left');
console.log(result);


function next() {
    hideElementById('main-section');
    showElementById('last-section');
    hideElementById('seat-price-section');
    showElementById('selected-seat-container');

}





const seat = getConvertElement('seat-left');
const seat1 = getConvertElement('seat-1');




