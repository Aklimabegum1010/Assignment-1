


// const dayOfWeek = "4";

// switch (dayOfWeek) {
//     case 1:
//         console.log("Saturday");
//         break
//     case 2:
//         console.log("Sunday");
//         break
//     case 3:
//         console.log("Monday");
//         break
//     case 4:
//         console.log("Tuesday");
//         break
//     case 5:
//         console.log("Wednessday");
//         break
//     case 6:
//         console.log("Tursday");
//         break
//     case 7:
//         console.log("Friday");
//         break

//     default:
//         console.log("Invalid Value")
//         break
// }






// const lightCondition = false;

// switch (true) {
//     case lightCondition:
//         console.log("Light On")
//         break;

//     default:
//         console.log("Light Off")
//         break;
// }



function calcGarding(score) {
    let gradingScore
    switch (true) {
        case (score >= 100 && score <= 90):
            gradingScore = "A"
            break;
        case (score >= 89 && score <= 80):
            gradingScore = "B"
            break;
        case (score >= 79 && score <= 70):
            gradingScore = "C"
            break;
        case (score >= 50 && score <= 0):
            gradingScore = "F"
            break;
        case (score <= 100 && score >= 0):
            gradingScore = "Invalid Score"
            break;
        default:
            return "Invalid Score"
    }

    return `You got $ {gradingScore} Grade.`
}

const firstPerson = calcGarding(85);
console.log(firstPerson)









































