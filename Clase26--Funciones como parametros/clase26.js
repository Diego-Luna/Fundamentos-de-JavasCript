class Persona{
  constructor(nombre, apellido, altura){
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
  }
  saludar(fn){
    var {nombre, apellido} = this

    console.log('Hola, me llamo '+nombre+' '+apellido);
    if (fn){
      fn(nombre, apellido)
    }
  }
  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    // var nombre = this.nombre
    // var apellido = this.nombre
    var {nombre, apellido} = this

    console.log('Hola, me llamo '+this.nombre+' '+this.apellido+' y soy Desarrollador/a');
    if (fn){
      fn(nombre, apellido, true)
    }
  }
}

function reponderSalud(nombre, apellido, esDev){
  console.log('buen día'+ nombre+' '+apellido);
  if (esDev){
    console.log('Ah mira, no sabía que eras Desarrollador/a');
  }
}

var sacha = new Persona('Sacha', 'lifszyc',1.72)
var erika = new Persona('Erika','Luna',1.65)
var arturo = new Desarrollador('Erika','Martinez',1.89)

sacha.saludar()
erika.saludar(reponderSalud)
arturo.saludar(reponderSalud)
