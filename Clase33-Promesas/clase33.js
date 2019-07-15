const API_URL = 'https://swapi.co/api/'
const People_URL = 'people/:id'

const opts = { crossDomain: true}


function obtenerPersonje(id){

  return new Promise((resolve,reject) => {
    const url = `${API_URL}${People_URL.replace(':id',id)}`
    $
      .get(url, opts, function(data){
        resolve(data)
      })
      .fail(() => reject(id) )
    })
  }

  function onError(id){
    console.log(`sucesio un error al llamar al personaje ${id}`)
  }

  obtenerPersonje(1)
    .then(function(personaje){
      console.log(`El perosnaje 1 es ${personaje.name}`)
    })

    .catch(onError)


// Nos ayuda a hacer un requests con jquery "$.get(Peticion, Estado de la Peticion, Si se cumple se hace)"
// $.get(lukeUrl, opts, onPeopleResponse)

// obtenerPersonje(1 , function(personaje)  {
//   console.log(`Hola, yo soy ${personaje.name}`)
