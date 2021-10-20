const input = require('fs').readFileSync('entrada', 'utf8');
const lines = input.split('\n');

const soma = +lines[0] + +lines[1]

console.log(`x = ${soma}`)