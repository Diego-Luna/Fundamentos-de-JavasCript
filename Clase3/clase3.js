var edad = 27

// edad = edad + 1

edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

// Math.round() es una funcion de java para redondear  por que java no es muy exacto
var total = Math.round(precioDeVino * 100 * 3 ) / 100
// .toFixed(2) ten en cuenta 2 decimales despues de la coma
var totalStr = total.toFixed(5)
// parseFloat() pasar a un flotante
var total2  = parseFloat(totalStr)

var pizza = 8
var personas = 2

var cantidadDePorcionesPorPersonas = pizza / personas
