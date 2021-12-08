import prompt from 'prompt-sync'

let name = prompt()('Nome: ')
let vidaPerson = 20 + Math.round(Math.random() * (60 - 30))
let vidaBase = vidaPerson
let vida = vidaBase + '/' + vidaPerson
let ataque = 5 + Math.round(Math.random() * (10 - 5))
let defesa = 10 + Math.round(Math.random() * (15 - 10))
let mana = 100
let coin = 0
class Personagem {
    constructor(
        public nome: string,
        public mana: number,
        public vida: string,
        public ataque: number,
        public defesa: number,
        public coin: number
    ) {}
}

let personagem: Personagem = new Personagem(
    name,
    mana,
    vida,
    ataque,
    defesa,
    coin
)

let teclado = prompt()
let opcao: number = 0

console.log('\nStatus Iniciais')
console.log(personagem)

while (opcao != 9) {
    // console.log(personagem.vida)
    // console.log('BASE >>', vidaBase)
    // console.log('PERSONAGEM >>', vidaPerson)
    // console.log('')
    console.log('1. Treinar ataque')
    console.log('2. Treinar defesa')
    console.log('3. Descansar')
    console.log('4. Loja')
    console.log('5. Avançar')
    console.log('6. Batalhar')
    console.log('7. Stauts')
    console.log('9. Sair')
    console.log('')

    opcao = +teclado('Escolha uma opção: ')

    if (personagem.mana <= 10) {
        console.log(
            'Seu personagem está muito cansado, descanse antes de treinar mais.'
        )
    } else if (vidaPerson <= 0) {
        console.log('GAME OVER')
        console.log('Tente novamente')
        break
    }

    switch (opcao) {
        case 1:
            personagem.ataque += 1 + Math.round(Math.random() * (6 - 1))
            personagem.mana -= 10 + Math.round(Math.random() * (20 - 10))
            let dado = Math.round(Math.random() * 100)

            if (dado > personagem.mana) {
                vidaPerson -= 5 + Math.round(Math.random() * (10 - 1))
            }
            personagem.vida = vidaBase + '/' + vidaPerson
            console.log('\n', personagem)
            break

        case 2:
            personagem.defesa += 1 + Math.round(Math.random() * (6 - 1))
            personagem.mana -= 10 + Math.round(Math.random() * (20 - 10))
            let dad = Math.round(Math.random() * 100)

            if (dad > personagem.mana) {
                vidaPerson -= 5 + Math.round(Math.random() * (10 - 1))
            }
            personagem.vida = vidaBase + '/' + vidaPerson
            console.log('\n', personagem)
            break

        case 3:
            if (personagem.mana >= 100) {
                console.log('A mana de', personagem.nome, 'está completa.')
                break
            }
            personagem.mana += 5 + Math.round(Math.random() * (10 - 5))
            if (personagem.mana > 100) personagem.mana = 100
            console.log('\n', personagem)
            break

        case 7:
            console.log('\n', personagem)
            break
    }
}
