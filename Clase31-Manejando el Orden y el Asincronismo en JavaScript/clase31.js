const API_URL = 'https://swapi.co/api/'
const People_URL = 'people/:id'

const opts = { crossDomain: true}


function obtenerPersonje(id, callback){

  console.log(id);

  const url = `${API_URL}${People_URL.replace(':id',id)}`

  $.get(url, opts, function (people) {
    console.log(`Hola, yo soy ${people.name}`)

    if (callback){
      callback()
    }
  })
}

// Nos ayuda a hacer un requests con jquery "$.get(Peticion, Estado de la Peticion, Si se cumple se hace)"
// $.get(lukeUrl, opts, onPeopleResponse)

obtenerPersonje(1 , function()  {
  obtenerPersonje(2, function() {
    obtenerPersonje(3)
  })
})
