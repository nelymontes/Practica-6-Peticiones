console.log('peticiones')

const obtenerPokemon = async () =>{
    const respuesta  = await fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await respuesta.json()
    console.log(data)
}
obtenerPokemon()