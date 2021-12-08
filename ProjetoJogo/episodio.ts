import { Personagem } from "./Personagem";
import{Saiyajin} from "./saiyajin";
import{Namekuseijin} from "./namekuseijin";
import { Terraqueo } from "./terraqueo";
import prompt from 'prompt-sync';





let guerreiroz : Personagem;

let personagens = [

new Saiyajin ('Son Goku', 100, 100, 90, 70, 9000),

new Saiyajin('Vegeta', 100, 100, 90, 80, 10000),

new Namekuseijin('Piccolo', 100, 100, 80, 70, 7000),

new Terraqueo('Kuririn', 100, 100, 60, 60, 3000)
]




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


console.log(guerreiroz.apresentacao());

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
            console.log(guerreiroz.status());
            guerreiroz.treinarAtaque();
                           
                            break;

                    
                        case 2:
                            console.log(guerreiroz.status());
                            guerreiroz.treinarDefesa;

                         
                            break;

                            
                           

                        case 3:
                            
                                     console.log(guerreiroz.status())

                                     guerreiroz.descansar()
                                     break;
         
                                 
                                 

                         case 4:
                     guerreiroz.bossFight();
                     break;

                            
                                    
                                        
                                    
                                
                            
                        
                    
                }
            
            }           
         
   
        


 