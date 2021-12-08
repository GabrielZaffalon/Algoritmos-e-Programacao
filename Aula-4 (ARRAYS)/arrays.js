let clients = [
    { name: 'Angelo Luz', birth: 1986, gender: 'M', purchaseDaysAgo: 1 },
    { name: 'Chuck', birth: 1940, gender: 'M', purchaseDaysAgo: 5 },
    { name: 'Sansa Stark', birth: 2002, gender: 'F', purchaseDaysAgo: 1 },
    { name: 'Dean Winchester', birth: 1982, gender: 'M', purchaseDaysAgo: 1 },
    { name: 'Ragnar', birth: 1960, gender: 'M', purchaseDaysAgo: 25 },
]

let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32]
console.log('Original ages:', ages)

//TODO: Altera todos valores de ages em +1

let newAges = ages.map((num) => num + 1)
console.log('New ages:', newAges)

//TODO: Retorna todos valores ímpares

const impar = newAges.filter((value) => value % 2 === 1)
console.log('Ímpares:', impar)

//TODO: Altera todos valores ímpares para o próximo par

const todosPar = newAges.map((value) => (value % 2 === 0 ? value : value + 1))
console.log('Todos pares:', todosPar)

//TODO: Cria um novo array com os valores menores do que 20 de numbers

const minors20 = newAges.filter((value) => value < 20)
console.log('Menores que 20:', minors20)

//TODO: Cria um novo array com os valores menores do que 17 e encrementar eles em um

const minors17 = newAges.filter((value) => value < 17).map((value) => value + 1)
console.log('Menores que 17 + 1:', minors17)

//TODO: Retorne a soma de todos os valores menores do que 20

const sumMinors20 = newAges
    .filter((value) => value < 20)
    .reduce((num1, num2) => (num1 += num2))
console.log('Soma menores de 20:', sumMinors20)

console.log('----------------------------------------')
//TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos

let newClients = clients.map((v) => ({ ...v }))

newClients = newClients.map((value) => {
    value.purchaseDaysAgo += 1
    return value
})

console.log('newClients :', newClients)

//TODO: Verifica se um determinado número de entrada está contigo no array

console.log('ages.includes(19) :', ages.includes(18))
console.log(
    'ages.find(18) :',
    ages.find((v) => v === 19)
)

//TODO: Altera array para ficar só com o primeiro nome dos clientes

let nameClients = clients.map((value) => value.name.split(' ')[0])
console.log('nameClients :', nameClients)

//TODO: Incrementa a idade apenas dos clientes das posições ímpares do array

clients.filter((value, index) =>
    index % 2 === 0 ? (value.birth += 1) : value.birth
)
console.log('xxx', clients)

//TODO: Retorna todos as pessoas de sexo masculino
