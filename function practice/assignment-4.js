// function calculateMoney(ticket) {
//     const totalTicketPrice = ticket * 120;
//     const salaryOfSecurity = 500;
//     const staffSalary = 8 * 50;
//     const totalSalary = salaryOfSecurity + staffSalary;
//     const finalResult = totalTicketPrice - totalSalary;

//     if (ticket <= 0) {
//         return 'input positive number'
//     } else if (totalTicketPrice < totalSalary) {
//         return `salary is more then ticket price . loss ${finalResult}`
//     }
//     else {
//         return finalResult;
//     }
// }

// const result = calculateMoney(10);
// console.log(result)




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


// function password(obj) {
//     let lan = 0;
//     for (let i in ob) {
//         lan++;
//     }

//     if (lan >= 3 && obj.birthYear > 999) {
//         return (obj.siteName[0].toUpperCase()+obj.name.slice(1)+'#'+obj.name+'@'+obj.birthYear);
//     }
//     else {
//         return 'invalid'
//     }
// }


// const newPass = password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" })

// console.log(newPass)


// function monthlySavings(savings, livingCost) {
//     if (!Array.isArray(savings) || typeof livingCost !== 'number') {
//         return "Invalid";
//     }
//     let newArr = [];
//     let sum = 0;

//     for (let i = 0; i < savings.length; i++) {
//         if (savings[i] >= 3000) {
//             newArr.push(savings[i] * 20 / 100);
//         }
//         else {
//             newArr.push(savings[i]);
//         }

//     }
//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i];
//     }
//     const result = sum - livingCost;
//     return result > 0 ? result : "Earn more";
// }




