export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      
    }
  mostrarLevel(){
    return `Mi nombre es ${this.name} y mi nivel es ${this.level}`
  }
    
  }

  const Diana = new Player(true, true)