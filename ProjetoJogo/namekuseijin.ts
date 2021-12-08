import {Personagem} from "./Personagem";

export class Namekuseijin extends Personagem{
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
            "\nDetentores dos mais antigos conhecimentos  do universo, são os criadores das esferas do dragão" +
            "\nOs famosos guerreiros Namekuseijins" +                      
            "\nPoder:" + this._poder 
            )
    
        }
    }
    

