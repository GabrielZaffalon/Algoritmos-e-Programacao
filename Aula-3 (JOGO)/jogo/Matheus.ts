import prompt from 'prompt-sync'

let name = prompt()('Nome: ')

let vidaPerson = 20 + Math.round(Math.random() * (60 - 30))

let vidaBase = vidaPerson

let vida = vidaBase + '/' + vidaPerson

let ataque = 5 + Math.round(Math.random() * (10 - 5))

let defesa = 10 + Math.round(Math.random() * (15 - 10))

let mana = 100

let coin = 0

let pocaovida = 0

let pocaoMana = 0

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

while (opcao != 9) {
    if (vidaPerson <= 0) {
        console.log('GAME OVER')

        console.log('Tente novamente')

        break
    } else if (personagem.mana <= 10) {
        console.log(
            'Seu personagem está muito cansado, descanse antes de treinar.'
        )
    }

    console.log('+===========+ Personagem +=============+')
    console.log('|1. Treinar Ataque:                    |')
    console.log('|2. Treinar Resistencia:               |')
    console.log('|3. Treinar Vitalidade:                |')
    console.log('|4. Descansar:                         |')
    console.log('|5. Exibir Status:                     |')
    console.log('|6. Loja:                              |')
    console.log('|7. Mochila:                           |')
    console.log('|9. Sair:                              |')
    console.log('+======================================+')

    opcao = +teclado('Escolha uma opção: ')

    let dado = Math.round(Math.random() * 100)
    let pontuacao = Math.round(Math.random() * 100)

    switch (opcao) {
        case 1:
            personagem.ataque += 1 + Math.round(Math.random() * (6 - 1))

            personagem.mana -= 10 + Math.round(Math.random() * (20 - 10))

            if (dado > personagem.mana) {
                vidaPerson -= 5 + Math.round(Math.random() * (10 - 1))
            }
            if (pontuacao > 33) {
                coin += 1

                console.log('Você ganhou um Coin!')

                console.log(coin)
            }

            personagem.coin = coin
            break

        case 2:
            personagem.defesa += 1 + Math.round(Math.random() * (6 - 1))

            personagem.mana -= 10 + Math.round(Math.random() * (20 - 10))

            if (dado > personagem.mana) {
                vidaPerson -= 5 + Math.round(Math.random() * (10 - 1))
            }
            if (pontuacao > 33) {
                coin += 1

                console.log('Você ganhou um Coin!')

                console.log(coin)
            }

            personagem.coin = coin
            break

        case 3:
            let aumentarVida = 1 + Math.round(Math.random() * (4 - 1))

            vidaBase += aumentarVida

            personagem.mana -= 10 + Math.round(Math.random() * (20 - 10))

            if (dado > personagem.mana) {
                vidaPerson -= 5 + Math.round(Math.random() * (10 - 1))
            }
            if (pontuacao > 50) {
                coin += 1

                console.log('Você ganhou um Coin!')

                console.log(coin)
            }

            break

        case 4:
            personagem.mana += 5 + Math.round(Math.random() * (10 - 1))

            if (personagem.mana > 100) {
                personagem.mana = 100
                console.log('Seu personagem já descansou o suficiente.')
            }

            break

        case 5:
            break

        case 6:
            let opcao1: number = 0

            while (opcao1 != 8) {
                console.log('+===========+ Loja +=============+')
                console.log('|1. Poção de Vida.     coin: 3   |')
                console.log('|2. Poção de Mana:     coin: 10  |')
                console.log('|8. Sair:                        |')
                console.log('+================================+')

                opcao1 = +teclado('Escolha uma opção: ')

                switch (opcao1) {
                    case 1:
                        if (coin < 3) {
                            console.log(
                                'Você não tem coin suficiente, continue treinando!'
                            )
                        } else if (coin >= 3) {
                            coin -= 3
                            pocaovida += 1
                            console.log('Você Comprou uma poção de vida')
                            console.log(`Você tem ${coin} coins.`)
                        }
                        personagem.coin = coin
                        break
                    case 2:
                        if (coin < 10) {
                            console.log(
                                'Você não tem coin suficiente, continue treinando!'
                            )
                        } else if (coin >= 10) {
                            coin -= 10
                            pocaoMana += 1
                            console.log('Você Comprou uma poção de mana')
                            console.log(`Você tem ${coin} coins.`)
                        }
                        personagem.coin = coin
                        break
                }
            }

        case 7:
            let opcao2: number = 0

            while (opcao2 != 8) {
                console.log('+~~~~~~~~+ Mochila +~~~~~~~~~+')
                console.log(`|1.Poção de vida: ${pocaovida} |`)
                console.log(`|2.Poção de Mana: ${pocaoMana} |`)
                console.log(`|Coins:         ${coin}      |`)
                console.log('+============================+')

                opcao2 = +teclado('Deseja usar uma Poção? ')

                switch (opcao2) {
                    case 1:
                        if (pocaovida == 0) {
                            console.log('Você está sem poção de vida!')
                            break
                        } else {
                            pocaovida -= 1
                            vidaBase = vidaPerson
                            console.log(
                                `Você usou uma poção de vida, sua vida revitalizou! ${personagem.vida}. \n Menos uma Poção. ${pocaovida}.`
                            )
                        }
                        break
                    case 2:
                        if (pocaoMana == 0) {
                            console.log('Você está sem poção de Mana!')
                            break
                        } else {
                            pocaoMana -= 1
                            personagem.mana = 100
                            console.log(
                                `Você usou uma poção de mana, agora sua mana está cheia! \n Menos uma Poção. ${pocaoMana}.`
                            )
                        }
                        break
                }
            }
    }
    personagem.vida = vidaBase + '/' + vidaPerson

    console.log('\n', personagem)
}
