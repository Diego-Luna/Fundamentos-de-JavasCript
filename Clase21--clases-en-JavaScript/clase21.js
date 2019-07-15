function Persona(nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function (){
  console.log('Hola, me llamo '+this.nombre+' '+this.apellido);
}
Persona.prototype.soyalto = function (){
  this.altura > 1.8 ? console.log(this.nombre+' es alto') : console.log(this.nombre+' es bajo');
}

var sacha = new Persona('Sacha', 'lifszyc',1.89)
var erika = new Persona('Erika','Luna',2)
var arturo = new Persona('Erika','Martinez',1.6)
