const API_URL = 'https://swapi.co/api/'
const People_URL = 'people/:id'

const opts = { crossDomain: true}

const onPeopleResponse = function (people) {
  console.log(`Hola, yo soy ${people.name}`)
}

function obtenerPersonje(id){
  const url = `${API_URL}${People_URL.replace(':id',id)}`
  $.get(url, opts, onPeopleResponse)
}

// Nos ayuda a hacer un requests con jquery "$.get(Peticion, Estado de la Peticion, Si se cumple se hace)"
// $.get(lukeUrl, opts, onPeopleResponse)

obtenerPersonje(1)
obtenerPersonje(2)
obtenerPersonje(3)
