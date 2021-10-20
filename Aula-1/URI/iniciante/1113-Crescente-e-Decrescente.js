const input = require('fs').readFileSync('entrada', 'utf8')
const lines = input.split('\n')

while (true) {
    const numbers = lines.shift().split(' ')
    if (numbers[0] === numbers[1]) {
        break
    }

    if (numbers[0] > numbers[1]) {
        console.log('Decrescente')
    } else {
        console.log('Crescente')
    }
}
