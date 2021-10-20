var input = require('fs').readFileSync('entrada', 'utf8')
var lines = input.split('\n')

while (true) {
    let getNumber = lines.shift()
    let numbers = +getNumber.split(' ')
    let num1 = numbers[0]
    let num2 = numbers[1]
    let num3 = numbers[2]

    console.log(numbers[2])

    // if (num1 === num2 && num1 === num3[0]) {
    //     console.log('*')
    // } else if (num1 !== num2 && num1 !== num3[0]) {
    //     console.log('A')
    // } else if (num1 === num3[0] && num1 !== num2) {
    //     console.log('B')
    // } else {
    //     console.log('C')
    // }
}

// for (let i = 0; i < lines.length; i++) {
//     let numbers = lines[i].split(' ')
//     let num1 = numbers[0]
//     let num2 = numbers[1]
//     let num3 = numbers[2].split('')

//     if (num1 === num2 && num1 === num3[0]) {
//         console.log('*')
//     } else if (num1 !== num2 && num1 !== num3[0]) {
//         console.log('A')
//     } else if (num1 === num3[0] && num1 !== num2) {
//         console.log('B')
//     } else {
//         console.log('C')
//     }
// }
