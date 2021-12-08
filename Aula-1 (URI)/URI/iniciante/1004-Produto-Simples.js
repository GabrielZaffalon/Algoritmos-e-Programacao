const input = require('fs').readFileSync('entrada', 'utf8');
const lines = input.split('\n');

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

const prod = +lines[0] * +lines[1]

console.log(`PROD = ${prod}`)