var sacha = {
  nombre: 'Sacha',
  apellido: 'lifszyc',
  edad: 28 ,
  peso: 75
}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

console.log('Al inicio del año '+sacha.nombre+' pesa '+sacha.peso+"kg");

// function aumentarDePeso(persona){
//   return persona.peso += 200
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comerMucho = () => Math.random() < 0.3
const reaisaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

while (sacha.peso > META) {
  // debugger se usa para detenerel programa
  if(comerMucho() ){
    //aumentar de peso
    aumentarDePeso(sacha)
  }
  if (reaisaDeporte()){
    // adelgasar
    adelgazar(sacha)
  }
  dias += 1
}

console.log('Pasaron '+dias+' dias hasta que '+sacha.nombre+" adelgazo 3k. ");
