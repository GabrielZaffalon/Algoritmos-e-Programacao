import { ContaBancaria } from './ContaBancaria'

export class ContaEspecial extends ContaBancaria {
    private _limite: number
    constructor(correntista: string, saldo: number, _limite: number) {
        super(correntista, saldo)
        this._limite = _limite
    }

    public set limite(limite: number) {
        this.limite = limite
    }

    public set tipo(tipo: string) {
        this.tipo = tipo
    }

    public valorDisponível(): string {
        return `Seu saldo atual é de R$ ${this.saldo}\n`
    }

    public valorLimite(): string {
        return `Seu limite atual é de R$ ${this._limite}\n`
    }

    public saque(quantidade: number, valLimite: number): string {
        if (quantidade > +this.saldo) {
            return `Saldo insuficiente\n`
        } else if (valLimite >= +this._limite) {
            return `Limites excedidos, saque não autorizado\n`
        } else {
            this.saldo -= quantidade
            return `Saque realizado com sucesso\n`
        }
    }
}
