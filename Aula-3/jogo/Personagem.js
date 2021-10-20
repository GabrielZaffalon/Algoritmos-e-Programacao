"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Personagem = /** @class */ (function () {
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
var teclado = (0, prompt_sync_1.default)();
var sansa = new Personagem('Sansa Stark', 100, 40, 20, 20);
sansa.ataque = 80;
console.log('person >>>', sansa);
