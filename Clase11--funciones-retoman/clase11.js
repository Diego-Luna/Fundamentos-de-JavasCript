var sacha = {
  nombre: 'Sacha',
  apellido: 'Sol',
  edad: 28,
  ingeniero:true,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirProfesionalismo(persona){
  console.log(`${persona.nombre} es:`)

// Es lo mismo que poner if(persona.ingeniero === true)
  if(persona.ingeniero){
    console.log('Ingeniero')
  }else {
    console.log('No es ingeniero');
  }

  if (persona.cocinero){
    console.log('Cocinero')
  }

  if(persona.dj){
    console.log('dj')
  }

  if(persona.cantante){
    console.log('cantante')
  }

  if(persona.guitarrista){
    console.log('guitarrista')
  }
  if(persona.drone){
    console.log('Piloto de drone')
  }
}
var juan = {
  nombre:'Diego',
  apellido: 'lopez',
  edad: 17,
  ingeniero:false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: false
}


imprimirProfesionalismo(sacha)

// para difinir una contsnte: const
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(perosna){
  return perosna.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(perosna){
  // sacha es mayor de edad
  // sacha es menor de edad
  if (esMayorDeEdad(perosna)){
    console.log("Felicidades "+perosna.nombre+" eres mayor de edad.");
  }else{
    console.log("Lo siento "+perosna.nombre+" no eres mayor de edad.");
  }
}
