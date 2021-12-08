var input = require('fs').readFileSync('entrada', 'utf8')
var lines = input.split('\n')

const tests = +lines[0]

for (let i = 1; i < tests * 2; i = i + 2) {
    let word = lines[i]
    let num = +lines[i + 1]
    let completedWord = ''

    for (let j = 0; j < word.length; j++) {
        let codeAt = word[j].charCodeAt(0) - num

        if (codeAt < 65) {
            let conta = 65 - codeAt
            codeAt = 91 - conta
        }

        completedWord = completedWord + String.fromCharCode(codeAt)
    }
    console.log(completedWord)
}
