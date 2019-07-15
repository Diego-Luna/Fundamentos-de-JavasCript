const API_URL = 'https://swapi.co/api/'
const People_URL = 'people/:id'

const lukeUrl = `${API_URL}${People_URL.replace(':id',1)}`
const opts = { crossDomain: true}

const onPeopleResponse = function (people) {
  console.log(`Hola yo soy, ${people.name}`)
}

// Nos ayuda a hacer un requests con jquery "$.get(Peticion, Estado de la Peticion, Si se cumple se hace)"
$.get(lukeUrl, opts, onPeopleResponse)
