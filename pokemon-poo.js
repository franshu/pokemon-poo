function Pokemon(nombre,color,vida,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return('Hola,soy:' + this.nombre + ' y soy de color: '+ this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida + this.poderDeAtaque
	}
}

var Pikachu = new Pokemon('Pikachu','amarillo',150, 100);
var Charmander = new Pokemon ('Charmander','rojo',200, 20);

Pikachu.atacar(Charmander);

console.log(Charmander.vida)
console.log(Pikachu.aumentarAmistad())