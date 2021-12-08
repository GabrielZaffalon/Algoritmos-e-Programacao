var input = require('fs').readFileSync('entrada', 'utf8')
var lines = input.split('\n')

let numAlc = 0
let numGas = 0
let numDies = 0

let num = 0

while (true) {
    if (+lines[num] === 4) {
        break
    }
    if (+lines[num] === 1) {
        numAlc = numAlc + 1
    } else if (+lines[num] === 2) {
        numGas = numGas + 1
    } else if (+lines[num] === 3) {
        numDies = numDies + 1
    }
    num = num + 1
}

console.log('MUITO OBRIGADO')
console.log('Alcool: ' + numAlc)
console.log('Gasolina: ' + numGas)
console.log('Diesel: ' + numDies)
