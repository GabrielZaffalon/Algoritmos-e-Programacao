const faker = require('faker')

faker.locale = 'pt_BR'
const clients = []

for (let i = 0; i < 10; i++) {
    const name = faker.name.findName()
    const email = faker.internet.email(name)
    const phoneNumber = faker.phone.phoneNumber()
    const birth = faker.date.past(30, 2000)

    client = {
        name,
        email,
        phoneNumber,
        birth,
    }

    clients.push(client)
}

console.log(clients)
