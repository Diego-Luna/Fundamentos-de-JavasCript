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

  var ids = [1,2,3,4,5,6,7,8]

  // var promesas = ids.map(function(id) {
  //   return obtenerPersonje(id)
  // })
  var promesas = ids.map(id => obtenerPersonje(id))


  Promise
      .all(promesas)
      .then(personajes => console.log(personajes))
      .catch(onError)

  // obtenerPersonje(1)
  //   .then(personaje => {
  //     console.log(`El personaje 1 es ${personaje.name}`)
  //     return obtenerPersonje(2)
  //   })
  //   .then ( personaje =>{
  //     console.log(`El personaje 2 es ${personaje.name}`)
  //     return obtenerPersonje(3)
  //   })
  //   .then ( personaje =>{
  //     console.log(`El personaje 3 es ${personaje.name}`)
  //     return obtenerPersonje(4)
  //   })
  //   .then ( personaje =>{
  //     console.log(`El personaje 4 es ${personaje.name}`)
  //     return obtenerPersonje(5)
  //   })
  //   .then ( personaje =>{
  //     console.log(`El personaje 5 es ${personaje.name}`)
  //     return obtenerPersonje(6)
  //   })
  //   .then ( personaje =>{
  //     console.log(`El personaje 6 es ${personaje.name}`)
  //     return obtenerPersonje(7)
  //   })
  //   .then ( personaje =>{
  //     console.log(`El personaje 7 es ${personaje.name}`)
  //   })
  //   .catch(onError)
