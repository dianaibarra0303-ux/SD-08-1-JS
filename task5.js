export class Player {
    constructor(name, level, exp) {
      this.exp = exp;
      
    }
  ganarExp(experiencia){
    this.exp(experiencia++)
    if(this.exp >= 50)
      levelUp();
  }
    
      }
    

  
    
