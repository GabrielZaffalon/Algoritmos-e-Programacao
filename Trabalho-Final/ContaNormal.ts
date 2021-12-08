import { ContaBancaria } from './ContaBancaria'

export class ContaNormal extends ContaBancaria {
    constructor(correntista: string, saldo: number) {
        super(correntista, saldo)
    }

    public valorDisponível(): number {
        return this.saldo
    }

    public valorLimite(): string {
        return 'Esta conta não possui limite\n'
    }

    public saque(quantidade: number): string {
        if (quantidade > +this.saldo) {
            return 'Saldo insuficiente\n'
        } else {
            this.saldo -= quantidade
            return 'Saque realizado com sucesso\n'
        }
    }
}
