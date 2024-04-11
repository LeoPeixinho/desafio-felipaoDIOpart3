//Criação da Classe do nosso herói 
class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
        }
    traveling(){
        return console.log (`Nosso Herói ${this.name} saiu para uma aventura em busca de Desafios`) 
    }
}       
        const hero1 = new Hero ("Eddard Starck", 20, "Mago")
        function atack(type) {
        if (hero1.type === "Mago"){
        return (`O ${hero1.type} atacou usando Magia`)
        } else if (hero1.type === "Guerreiro"){
        return (`O ${hero1.type} atacou usando Espada`)    
        } else if (hero1.type === "Monge"){
        return (`O ${hero1.type} atacou usando Artes Marcias`)
        } else if (hero1.type === "Ninja")
        return (`O ${hero1.type} atacou usando shuriken`)
        }
         const fight = atack(hero1);
         console.log (fight) 

               