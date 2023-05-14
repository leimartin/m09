let trainer = {
	name: "Ash",
	age: 10,
	pokemon: [], 
	friends: {
	  	misty: ["Staryu", "Starmie", "Psyduck"],
	  	brock: ["Onix", "Geodude", "Zubat"],
	  	tracey: ["Venomoth", "Marill", "Scyther"],
	  	may: ["Skitty", "Munchlax", "Wurmple"]},

	talk: function() {
		console.log("\nPikachu! I choose you!");
	}
};

function Pokemon(name, level) {
	this.name = name;
	this.level = level;
	this.health = level * 8;
	this.attack = level * 5;	

	this.tackle = function(target) {
		console.log("===========================");
		console.log("| Attacker   | Target     |");
		console.log(`| Level : ${this.level}  | Level : ${target.level}  |`);
		console.log(`| Health: ${this.health} | Health: ${target.health} |`);
		console.log(`| Attack: ${this.attack} | Attack: ${target.attack} |`);
		console.log("===========================");
		
		console.log(this.name + " tackled " + target.name + '.');
		target.health -= this.attack;
		console.log(target.name + ' health decreased to ' + target.health + '↓');

		if(target.health <= 0) {
			target.faint();
		}
	};
	
	this.faint = function() {
		console.log(this.name + " fainted.");
	}
}

let pikachu = new Pokemon('Pikachu', 9);
let metapod = new Pokemon('Metapod', 6); 
let bulbasaur = new Pokemon('Bulbasaur', 8);
let charmeleon = new Pokemon('Charmeleon', 7);
let charmander = new Pokemon("Charmander", 5);
let squirtle = new Pokemon("Squirtle", 4);

trainer.pokemon.push(pikachu, metapod, bulbasaur, charmeleon, charmander, squirtle);

console.log("Trainer Name: ", trainer.name);
console.log("Trainer Age : ", trainer["age"]);
console.log("Pokemon     : ", trainer.pokemon[0].name); 
console.log("Friends     : ", trainer['friends']['brock']);
trainer.talk();

pikachu.tackle(squirtle);