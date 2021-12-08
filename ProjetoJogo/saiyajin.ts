import { Personagem } from "./Personagem";

export class Saiyajin extends Personagem{
 constructor(
    nome : string,
    vida: number,
    energia: number,
    ataque:number,
    defesa: number,
    poder: number

){super(
    nome, vida, energia, ataque, defesa, poder 
)}


 

   public apresentacao() : string{
    return(
        "Você escolheu o guerreiro Z:"+ this.nome +
        "\nVindo de uma raça guerreira e conquistadora" +
        "\nOs famosos guerreiros da raça Sayiajin" +                      
        "\nPoder:" + this.poder 
        )

    }

}