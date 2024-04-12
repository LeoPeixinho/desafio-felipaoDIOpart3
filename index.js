class Hero {
  constructor(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
    } 
}       

const hero1 = new Hero ("Eddard Starck", 20, "Guerreiro")

function atack(type) {
  if (hero1.type === "Mago"){
        return (`O ${hero1.type} atacou usando Magia`)
  } else if (hero1.type === "Guerreiro"){
        return (`O ${hero1.type} atacou usando Espada`)    
  } else if (hero1.type === "Monge"){
        return (`O ${hero1.type} atacou usando Artes Marcias`)
  } else if (hero1.type === "Ninja"){
        return (`O ${hero1.type} atacou usando shuriken`)
  }
 }
 console.log(`O nosso Herói ${hero1.name} saiu de Winterfell em busca de aventura.`)
            
let i = 1;
let enemies = 10;
for(i; i < enemies; i++){
  console.log(`O Herói está em batalha contra o inimigo ${i}`);
}
const fight = atack(hero1)
console.log (fight)
                      
         
         
               