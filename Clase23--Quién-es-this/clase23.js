function Persona(nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function (){
  console.log('Hola, me llamo '+this.nombre+' '+this.apellido);
}

// Persona.prototype.soyalto = function (){
//   this.altura > 1.8 ? console.log(this.nombre+' es alto') : console.log(this.nombre+' es bajo');
// }
// sa le error porque (this) toma el valor de afuera
// Persona.prototype.soyalto = () => this.altura > 1.8
 Persona.prototype.soyalto = function () {
  return this.altura > 1.8
}

var sacha = new Persona('Sacha', 'lifszyc',1.72)
var erika = new Persona('Erika','Luna',1.65)
var arturo = new Persona('Erika','Martinez',1.89)

sacha.soyalto()
erika.soyalto()
arturo.soyalto()
