var input = require('fs').readFileSync('entrada', 'utf8')
var num = input.split(' ')

if (num[0] >= num[1]) console.log(num[1])
else console.log(num[0])
