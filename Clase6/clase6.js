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

function imprimirNombreEnMayusculas({nombre}){
 console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'pepito' })
imprimirNombreEnMayusculas()
