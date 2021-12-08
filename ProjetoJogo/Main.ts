import { Personagem } from "./Personagem";
import{Saiyajin} from "./saiyajin";
import{Namekuseijin} from "./namekuseijin";
import { Terraqueo } from "./terraqueo";
import prompt from 'prompt-sync';

let semente = 0;

let guerreiroz : Personagem;

let personagens = [

new Saiyajin ('Son Goku', 100, 100, 90, 70, 'Saiyajin', 9000),

new Saiyajin('Vegeta', 100, 100, 90, 80, 'Saiyajin', 10000),

new Namekuseijin('Piccolo', 100, 100, 80, 70, 'Namekuseijin', 7000),

new Terraqueo('Kuririn', 100, 100, 60, 60,'Terráqueo', 3000)
]

/*public abstract apresentacao(): string{
        return(
        "Você escolheu o guerreiro Z:"+ this._nome +                        
        "\nPoder:" + this._poder + "  "  +   "Raça :" + this._raca
        )

    }*/



console.log('|==========Dragon Ball Z==========|')
console.log('|===========Personagens===========|')
console.log('|1.Goku                           |')
console.log('|2.Vegeta                         |')
console.log('|3.Piccolo                        |')
console.log('|4.Kuririn                        |')

let teclado = prompt();

let number = +teclado('Escolha um personagem:');

guerreiroz = personagens[number-1];



let opcao = 0 ;


console.log(`Você escolheu o guerreiro Z: ${guerreiroz.nome}`)                         
console.log(`Poder: ${guerreiroz.poder}      Raça : ${guerreiroz.raca}`)


while(opcao != 5 || guerreiroz.isDead()){

    
    console.log('+===========+ Personagem +=============+');
    console.log('|1. Treinar Ataque:                    |');
    console.log('|2. Treinar Defesa:                    |');
    console.log('|3. Descansar:                         |');
    console.log('|4. Encontrar luta:                    |');
    console.log('|5. Sair:                              |');
    console.log('+======================================+');

opcao = +teclado("Escolha uma opção: ")

   switch(opcao){
     
        case 1:
            guerreiroz.status()
            guerreiroz.treinarAtaque()
           
                           
                            break;

                    
                        case 2:
                            guerreiroz.status()
                            guerreiroz.treinarDefesa

                           
                            break;

                            
                           

                        case 3:
                            
                                     guerreiroz.status()

                                     guerreiroz.descansar()
                                     break;
         
                                 
                                 

                         case 4:
                            let opcao1: number = 0;

                            while (opcao1 != 3){
           
                               console.log('+=====+ Escolha o adversário +====+');
                               console.log('|1. Soldado                       |');
                               console.log('|2. Boss Fight                    |');
                               console.log('|3. Fugir:                        |');
                               console.log('+================================+');
                              
                               opcao1 = +teclado('Escolha uma opção: ');
           
                               switch (opcao1) {
                                  
                                   case 1:
                                    let opcao2: number = 0;

                                    while (opcao2 != 3 || guerreiroz.isDead()){
                   
                                       console.log('+==========+ Opção +=============+');
                                       console.log('|1. Lutar                        |');
                                       console.log('|2. Comer semente dos Deuses     |');
                                       console.log('|3. Fugir                        |');
                                       console.log('+================================+');
                                      
                                       opcao2 = +teclado('Escolha uma opção: ');
                   
                                       switch (opcao2) {
                                          
                                           case 1:
                                           // guerreiroz.lutarSoldado();
                                            guerreiroz.status();
                            break;
                                      case 2:
                                        guerreiroz.sementeDeuses()
                                        guerreiroz.status();
                                        break;
                                       

                                          
                                     
                            
                                    case 2:
                                          
                                        let opcao3 = 0; 

                                        while(opcao3 !=3 || guerreiroz.isDead()){
                                        console.log('+=====+ Escolha o adversário +====+');
                                        console.log('|1. Lutar                        |');
                                        console.log('|2. Fugir                        |');
                                        console.log('|3. Fugir                        |');
                                        console.log('+================================+');
                                      
                                       opcao3 = +teclado('Escolha uma opção: ');
                   
                                       switch (opcao3) {
                                          
                                           case 1:
                                            guerreiroz.bossFight();
                                            guerreiroz.status();
                            break;
                                      case 2:
                                        guerreiroz.sementeDeuses();
                                        guerreiroz.status();
                                        break;
                                    
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            
            }              
                    
    

                             

       
    

                            
                       
                        
