//  las {} ponen un objeto en java
var sacha = {
  nombre: 'Sacha',
  apellido: 'luna',
  edad: 28
}
var dario = {
  nombre: 'Dario',
  apellido: 'lopez',
  edad: 27
}

// al usar {nombre} selecionara la variable nombre del objeto

function imprimirNombreEnMayusculas(persona){

  //  es lo mismo que var nombre = persona.nombre
  var {nombre} = persona

 console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({nombre: 'pepito' })
// imprimirNombreEnMayusculas()

function imprimirNombreYEdad(persona){
    var nombre = persona.nombre
    var edad = persona.edad
    console.log('Hola, me llamo '+nombre+" tengo "+edad+" años");
}

imprimirNombreYEdad(dario)
imprimirNombreYEdad(sacha)

// function cumpleanos(persona){
//   persona.edad += 1
// }
function cumpleanos(persona){
  return{
   ...persona,
   edad: persona.edad +1
  }
}
