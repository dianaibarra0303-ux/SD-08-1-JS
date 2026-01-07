export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      
    }
  mostrarLevel(){
    return `Mi nombre es ${this.name} y mi nivel es ${this.level}`
  }
  info() {
    console.log(`player${this.name} subí de nivel a ${this.level}!`);
  }
  levelUp(){
    this.level +=1;
  }
  }

  const Diana = new Player("Diana", true)
  const tara = new Player("Tara", 6)
  tara.levelUp
  Diana.levelUp