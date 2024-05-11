import pokemonApi from '../api/pokemon.api'
const getPokemons = () => {
    const pokemonArr = Array.from( Array(100) )
    return pokemonArr.map( (_, index) => index + 1 )
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort( ()=> Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4))
    return pokemons
}

const getPokemonNames = async ([a,b,c,d] = []) => {
    const [ra, rb, rc, rd] = await Promise.all([
        pokemonApi(`/${a}`),
        pokemonApi(`/${b}`),
        pokemonApi(`/${c}`),
        pokemonApi(`/${d}`),
    ])
    return [
        {name: ra.data.name, id: ra.data.id},
        {name: rb.data.name, id: rb.data.id},
        {name: rc.data.name, id: rc.data.id},
        {name: rd.data.name, id: rd.data.id},
    ];
}

export default getPokemonOptions;
