const API_URL = 'https://swapi.co/api/'
const People_URL = 'people/:id'

const opts = { crossDomain: true}


function obtenerPersonje(id, callback){

  console.log(id);

  const url = `${API_URL}${People_URL.replace(':id',id)}`

  $
    .get(url, opts, callback)
    .fail(() => {
    console.log(`Sucedio un error .No se puede optener el personaje ${id}`);
  })


}

// Nos ayuda a hacer un requests con jquery "$.get(Peticion, Estado de la Peticion, Si se cumple se hace)"
// $.get(lukeUrl, opts, onPeopleResponse)

obtenerPersonje(1 , function(personaje)  {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonje(2, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonje(3,function(personaje){
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonje(4,function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonje(5,function(personaje){
          console.log(`Hola, yo soy ${personaje.name}`)

        })
      })
    })
  })
})
