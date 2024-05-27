console.log('peticiones')

//callback - esto significa pasar funciones como parámetros de otras funciones
const obtener = () =>{
    console.log('obtener')
}
obtener()

const buttonObtener = document.getElementById('button-obtener')
//Agregar evento al botón
//buttonObtener.addEventListener("click", obtener)

// agregar eventos al botón se puede realizar con una función anónima
buttonObtener.addEventListener("click", async () =>{
console.log('obtener')
const pokemonData = await obtenerPokemon()

const pokemonArticle = document.getElementById("Pokemon")
//crea un elemento html
const h3 = document.createElement('h3')

//le asina un texto al elemento

h3.innerText = pokemonData.name
//agregar un elemento como hijo
pokemonArticle.appendChild(h3)

//crear elemento img

const img = document.createElement('img')
img.src = pokemonData.sprites.front_default
pokemonArticle.appendChild(img)

})

const obtenerPokemon = async () =>{
    let nombrePokemon = 'Pikachu'
    const respuesta  = await fetch (`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await respuesta.json()
    console.log(data)
    return data
}
