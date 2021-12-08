import { Personagem } from "./Personagem";

export class Terraqueo extends Personagem{
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


    public evolução(): string{
        return("Ola");
       }   


       public apresentacao() : string{
        return(
            "Você escolheu o guerreiro Z:"+ this._nome +
            "\nGuerreiro que não desiste nunca, afinal é um Terráqueo" +
            "\nOs famosos guerreiros da raça:" +                       
            "\nPoder:" + this._poder 
            )
    
        } 
}
