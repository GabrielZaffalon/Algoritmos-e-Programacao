var input = require('fs').readFileSync('entrada', 'utf8')
var lines = input.split(' ')

const conta = Number(lines[0]) / Number(lines[1]);

console.log(conta.toFixed(2));
