var input = require('fs').readFileSync('entrada', 'utf8')
var lines = input.split('\n')

while (true) {
    if (+lines.shift() !== 2002) {
        console.log('Senha Invalida')
    } else {
        console.log('Acesso Permitido')
        break
    }
}
