var sacha = {
  nombre: 'Sacha',
  apellido: 'lifszyc',
  edad: 28 ,
  peso: 75
}

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

console.log('Al inicio del año '+sacha.nombre+' pesa '+sacha.peso+"kg");

// function aumentarDePeso(persona){
//   return persona.peso += 200
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_AÑO; i++){
  var random = Math.random()

  console.log(random);

  if (random < 0.25){
    //aumenta de peso
    aumentarDePeso(sacha)
  }else if(random < 0.5) {
    //adelgasar
    adelgazar(sacha)
  }
}

console.log('Al final del año '+sacha.nombre+' pesa '+sacha.peso.toFixed(1)+"kg");
