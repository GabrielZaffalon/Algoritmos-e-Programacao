import { agencia } from './Agencia'

export abstract class ContaBancaria {
    constructor(protected correntista: string, protected saldo: number) {}

    public ContaBancaria(correntista: string, saldo: number) {}
    public abstract valorDisponível(): void
    public abstract valorLimite(): void
    public abstract saque(quantidade: number): void
}
