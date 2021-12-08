/*export class Personagem{
    protected __nome: string,
    protected __vida: number,
    protected __energia: number,
    protected __ataque: number,
    protected __defesa: number,
    protected __raca: string,
    protected __poder: number
    constructor(_nome:string){
        this.__nome= _nome;
        this.__vida= 100;
        this.__energia =100;
        this.__ataque= 100;
        this.__defesa=100;
        this.__raca= _raca;
        this.__poder= 100;
    }
   
    
}*/

export abstract class Personagem{
    constructor(
    protected _nome: string,
    protected _vida: number,
    protected _energia: number,
    protected _ataque: number,
    protected _defesa: number,
    protected _poder: number
    ){}


     
     
     public set nome(nome : string) {
         this._nome = nome;
     }
     

    
    public set vida(vida : number) {
        this._vida = vida;
    }
    
    public set energia(energia : number) {
        this._energia = energia;
    }

    public set ataque(ataque : number) {
        this._ataque = ataque;
    }
    
    public set defesa(defesa : number) {
        this._defesa = defesa;
    }

 

    public set poder(poder : number) {
        this._poder = poder;
    }



    public abstract apresentacao(): void;
      

    public status(): string{
        return(
        "Gerreiro Z: \n" +   
        "\nNome:" + this._nome +
        ("\nVida:" + this._vida + " " +  "Energia:" + this._energia)+
        ("\nAtaque:"+ this._ataque + " " + "Defesa:" + this._defesa)+
        ("\nPoder:" + this._poder)

        );
    }


   public treinarAtaque():void {
        this._ataque += Math.round(Math.random() * 5);

        this._vida -=  Math.round(Math.random() * 10)     
                
       this._energia -= Math.round (Math.random() * 20);
                
      this._poder +=Math.round(Math.random() * 200);
      
  
                                       
    
}


    public treinarDefesa(): void{
    this._defesa += Math.round(Math.random() * 10);
                
     this._vida -=  Math.round(Math.random() * 10)                     
    this._energia -= Math.round(Math.random() * 10);
    
    this._poder += Math.round(Math.random() * 100);
    

    
   }

   public descansar(): void{
    this._vida += Math.round(Math.random() * 5);
    this._energia += Math.round(Math.random() * 40);
   

          if (this._energia >= 100){
            this._energia = 100;
;        
          }
   }


   /* lutarSoldado(): void{
        this._vida -= Math.round(Math.random() * 15);
        this._energia -= Math.round(Math.random() * 20);
        this._poder += Math.round(Math.random() * 50);
        this.danger();
        if(this._poder > 15000){
            this._vida -= Math.round(Math.random() * 5);
        }
    }*/

  
     public bossFight(): void{
        this._vida -= Math.round(Math.random() * 15);
        this._energia -= Math.round(Math.random() * 20);
        this._poder += Math.round(Math.random() * 100);
        if(this._poder > 15000){
            this._vida -= Math.round(Math.random() * 5);
        }
       
     }


     public sementeDeuses(): number{
        return this._vida = 100;
       
            
        }
    


   

/*danger(): boolean{
        if(this._energia <= 10 || this._vida <= 10){
            console.log("Descanse ou coma uma semente dos Deuses!!")
            return true
        } else{
            return false
        }
    

    }*/

     public isDead(): boolean{
      if(this.energia <= 0){
    return true;
      }else{
          return false
      }      
    }   
    
    
    public isOver(): string{
        return("Você morreu");
    } 
   

}
