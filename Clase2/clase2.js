// var apellido = "Luna"  funciona
//  u sar comillas simples '' o "" es igual
// el ; es opcional, hay casos muy puntuales
// nombre = 'Sacha'
// js es un lenguaje con un tipado devil, es que no hay una regla en el valor de una variable
var nombre = "Paco", apellido = "Luna"

// la "clase toUpperCase()" lo pone en mayuscaulas
var nombreEnMayusculas = nombre.toUpperCase()
// La "clase toLowerCase()" lo pone en minusculas
var apellidoEnMinusculas = apellido.toLowerCase()
// LA clase ".charAt("Psosicion")" pone la letra  en una posicion
var primeraletraDelNombre = nombre.charAt(0)
// El atrinuto ".length" nos dice cuantas letras tiene una palabra
var cantidadDeLetrasDelNombre = nombre.length


var nombreCompleto  = nombre+" "+ apellido
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`


// Como haceder para coger unas letras de un str(String)
var str = nombre.charAt(1) + nombre.charAt(2)

// Para tomar fracmentos ".substr("Enpiece", "cuntos caracteres tome")"
var strFracmento = nombre.substr(1, 2)
