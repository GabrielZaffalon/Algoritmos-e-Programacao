import { ContaBancaria } from './ContaBancaria'
import { ContaNormal } from './ContaNormal'
import { ContaEspecial } from './ContaEspecial'
import prompt from 'prompt-sync'

let conta: ContaBancaria
let limite = 0
let teclado = prompt()
let opcao = 0

let pessoas = [
    new ContaEspecial('João', 1000, 500),
    new ContaNormal('Maria', 2000),
]

console.log('\nBem vindo à Agência!')
console.log('\nAntes de começar crie uma conta')

account()

console.log()

function account() {
    while (opcao !== 6) {
        console.log('\n+==============+ Conta +==============+')
        console.log('|1. Criar uma conta Especial          |')
        console.log('|2. Criar uma conta Normal            |')
        console.log('|3. Listar contas                     |')
        console.log('|4. Selecionar uma conta              |')
        console.log('|5. Excluir uma conta                 |')
        console.log('|6. Sair                              |')
        console.log('+=====================================+\n')

        opcao = +teclado('Escolha uma opção: ', '\n')
        switch (opcao) {
            case 1:
                criaContaEspecial()
                break
            case 2:
                criaContaNormal()
                break
            case 3:
                list()
                break
            case 4:
                console.log()

                list()
                const escolha = +teclado('Qual conta vai utilizar: ', '\n')
                conta = pessoas[escolha + 1]
                menu()
                break
            case 5:
                console.log()

                list()

                console.log()
                const exclui = +teclado('Qual conta vai excluir: ')
                pessoas.splice(exclui + 1, 1)

                console.log('\nConta excluída com sucesso!\n')
                break
            case 6:
                console.log('\nSaindo...')

                break
        }
    }
}

function menu() {
    while (opcao !== 6) {
        console.log('\n+==============+ Conta +==============+')
        console.log('|1. Dados da conta                    |')
        console.log('|2. Valor Disponível                  |')
        console.log('|3. Limite                            |')
        console.log('|4. Saque                             |')
        console.log('|5. Trocar / Criar / Excluir Conta    |')
        console.log('|6. Sair                              |')
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
                limite += valor

                console.log(conta.saque(valor, limite))

                break

            case 5:
                account()
                break
            case 6:
                console.log('\nSaindo...')

                break
        }
    }
}

function criaContaEspecial() {
    const nome = teclado('Nome: ')
    const saldo = +teclado('Saldo: ')
    const limite = +teclado('Limite: ')
    pessoas.push(new ContaEspecial(nome, saldo, limite))

    console.log('Conta criada com sucesso!')
    return
}

function criaContaNormal() {
    const nome = teclado('Nome: ')
    const saldo = +teclado('Saldo: ')
    pessoas.push(new ContaNormal(nome, saldo))

    console.log('Conta criada com sucesso!')
    return
}

function list() {
    let i = 2

    while (i < pessoas.length) {
        console.log(i - 1, pessoas[i])
        i++
    }

    return
}
