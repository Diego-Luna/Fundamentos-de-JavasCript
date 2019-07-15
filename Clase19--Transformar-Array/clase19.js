
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// const esAlta = (persona) => {
//   return persona.altura > 1.8
// }
// es lo mismo
const esAlta = persona =>  persona.altura > 1.8

const esBaja = persona => persona.altura <1.8

//  los array se identifican con los ([])
var personas = [sacha, alan, martin, dario, vicky, paula]

// para poder filtar se utilisa (.filter(funcion)), nos debulve un array nuevo
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// } )

// const pasarAlturaACms = persona => persona.altura *= 100
// const pasarAlturaACms = persona => {
//   return{
//     ...persona,
//     altura: persona.altura * 100
//   }
// }
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// la funcion (.map(funcion)) transforma el array original, o nos puede dar uno nuevo
var personasCms = personas.map(pasarAlturaACms)

var personasBajas = personas.filter(esBaja)

// console.table(personasCms)
console.log('Personas altas: ');
console.log(personasCms);

// console.log('PersonasBajitas');
// console.log(personasBajas);
