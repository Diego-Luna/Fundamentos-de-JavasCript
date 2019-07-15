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

imprimirProfesionalismo(sacha)

function imprimirSiEsMayorDeEdad(perosna){
  // sacha es mayor de edad
  // sacha es menor de edad
  if (perosna.edad >= 18){
    console.log("Felicidades "+perosna.nombre+" eres mayor de edad.");
  }else{
    console.log("Lo siento "+perosna.nombre+" no eres mayor de edad.");
  }
}
