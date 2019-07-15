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
      .fail(() => reject(id))
    })
  }

  function onError(id){
    console.log(`sucesio un error al llamar al personaje ${id}`)
  }

  obtenerPersonje(1)
    .then(personaje => {
      console.log(`El personaje 1 es ${personaje.name} la altura es de ${personaje.height} cm.`)
      return obtenerPersonje(2)
    })
    .then ( personaje =>{
      console.log(`El personaje 2 es ${personaje.name} la altura es de ${personaje.height} cm.`)
      return obtenerPersonje(3)
    })
    .then ( personaje =>{
      console.log(`El personaje 3 es ${personaje.name} la altura es de ${personaje.height} cm.`)
      return obtenerPersonje(4)
    })
    .then ( personaje =>{
      console.log(`El personaje 4 es ${personaje.name} la altura es de ${personaje.height} cm.`)
      return obtenerPersonje(5)
    })
    .then ( personaje =>{
      console.log(`El personaje 5 es ${personaje.name} la altura es de ${personaje.height} cm.`)
      return obtenerPersonje(6)
    })
    .then ( personaje =>{
      console.log(`El personaje 6 es ${personaje.name} la altura es de ${personaje.height} cm.`)
      return obtenerPersonje(7)
    })
    .then ( personaje =>{
      console.log(`El personaje 7 es ${personaje.name} la altura es de ${personaje.height} cm.`)
    })
    .catch(onError)


// Nos ayuda a hacer un requests con jquery "$.get(Peticion, Estado de la Peticion, Si se cumple se hace)"
// $.get(lukeUrl, opts, onPeopleResponse)

// obtenerPersonje(1 , function(personaje)  {
//   console.log(`Hola, yo soy ${personaje.name}`)
