class Persona{
  constructor(nombre, apellido, altura){
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
  }
  saludar(){
    console.log('Hola, me llamo '+this.nombre+' '+this.apellido);
  }
  soyAlto(){
    return this.altura > 1.8
  }
}

// para que una clase erede de otra se usa "extends", en este lenguaje se le llama extends
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    // para llamar al componente padre se deve llamar u sando "super"
    super(nombre, apellido, altura)
  }

  saludar(){
    console.log('Hola, me llamo '+this.nombre+' '+this.apellido+' y soy Desarrollador');
  }
}


Persona.prototype.saludar = function (){
  console.log('Hola, me llamo '+this.nombre+' '+this.apellido);
}
