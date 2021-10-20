const input = require('fs').readFileSync('entrada', 'utf8');
const lines = input.split(' ');

let result = 0

if (+lines[0] === 1) {
    result = 4 * +lines[1]
} else if (+lines[0] === 2) {
    result = 4.50 * +lines[1]
} else if (+lines[0] === 3) {
    result = 5 * +lines[1]
} else if (+lines[0] === 4) {
    result = 2 * +lines[1]
} else {
    result = 1.50 * +lines[1]
}

console.log(`Total: R$ ${result.toFixed(2)}`)