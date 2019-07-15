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

// al poner "async", nos permite usar "await" para que la terminar las promesas se ejecutara el codigo y se guardara en personajes
  async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7,8]
    var promesas = ids.map(id => obtenerPersonje(id))

    try {
      var personajes = await Promise.all(promesas)
      console.log(personajes);
    } catch (id) {
      onError(id)
    }
  }

obtenerPersonajes()
