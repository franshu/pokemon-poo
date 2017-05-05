//funcion constructor
function Pokemon(nombre,color,nivelDeAmistad,vida,poderDeAtaque){
	//atributos
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	//metodos
	this.mostrarPokemon = function(){
		return("Hola, soy:" + this.nombre + " y soy de color: "+ this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}
//declarar nuevos objetos, e instanciar los pokemones
var pikachu = new Pokemon("Pikachu","amarillo",5,150,100);
var charmander = new Pokemon("Charmander","rojo",3,200,90);
var squartle = new Pokemon("Squartle","celeste",6,150,30);
var bulbasaur = new Pokemon("Bulbasaur","verde",1,200,60);

//llamando a los metodos
pikachu.atacar(charmander);
pikachu.aumentarAmistad(5);
console.log(charmander.vida);

// funcion para que peleen los pokemones
function battle(pokemon1,pokemon2){
		var pokemon1 = document.getElementById('team1').value;//quiero escoger un pokemon de la lista
		var pokemon2 = document.getElementById('team2').value;

		var resultadoPelea = team1.atacar(team2) //resultado

		//if (pokemon1 =="pikachu") //quier comprar string team1 con pikachu si es true crear pikachu
			//buscar como mostrar una foto de html con javascript
		atacar()

		alert(pokemon1.nombre + "atacó a " + pokemon2.nombre + ".El nivel de vida del pokemon atacado está en: " + resultadoPelea.vida); //alert de resultado

}
