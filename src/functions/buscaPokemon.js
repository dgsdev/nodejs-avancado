const fetch = require('node-fetch')

module.exports = async function buscaPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let json = await response.json()
    
    return json 
}
