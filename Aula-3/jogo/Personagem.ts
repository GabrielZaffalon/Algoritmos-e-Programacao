import prompt from 'prompt-sync'

class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}
}

let teclado = prompt()

let sansa: Personagem = new Personagem('Sansa Stark', 100, 40, 20, 20)
sansa.ataque = 80
console.log('person >>>', sansa)
