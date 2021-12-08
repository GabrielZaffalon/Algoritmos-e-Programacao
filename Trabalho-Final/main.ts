import { ContaBancaria } from './ContaBancaria'
import { ContaNormal } from './ContaNormal'
import { ContaEspecial } from './ContaEspecial'
import { agencia } from './Agencia'
import prompt from 'prompt-sync'

let conta: ContaBancaria

let pessoas = [
    new ContaEspecial('João', 2000, 1000),
    new ContaNormal('Pedro', 2000),
]

console.log('\nBem vindo à Agência!')

let teclado = prompt()
let number = +teclado(
    'Escolha a conta 1 (Especial) ou  2 (Normal) para ter acesso aos dados: '
)

console.log()

conta = pessoas[number - 1]

let opcao = 0

while (opcao != 5) {
    console.log('+==============+ Conta +==============+')
    console.log('|1. Dados da conta                    |')
    console.log('|2. Valor Disponível                  |')
    console.log('|3. Limite                            |')
    console.log('|4. Saque                             |')
    console.log('|5. Sair                              |')
    console.log('+=====================================+')

    console.log()
    opcao = +teclado('Escolha uma opção: ')

    switch (opcao) {
        case 1:
            console.log(conta)

            break

        case 2:
            console.log(conta.valorDisponível())

            break

        case 3:
            console.log(conta.valorLimite())

            break

        case 4:
            let valor = +teclado('Valor do saque: ')

            console.log(conta.saque(valor))

            break

        case 5:
            console.log('Saindo...\n')

            break
    }
}
