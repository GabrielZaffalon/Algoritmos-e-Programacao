const input = require('fs').readFileSync('entrada', 'utf8')
const lines = input.split(' ')

const num = Number(lines[0])

for (let i = 1; i <= 10; i++) {
    let cont = 0
    cont = i * num
    console.log(i + ' x ' + num + ' = ' + cont)
}
