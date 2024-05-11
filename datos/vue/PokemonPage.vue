<template>
    <h1 v-if="!pokemon">por favor espere... ⌛</h1>
    <div v-else>
        <h1>Cual es este Pokemon?</h1>
        <h2 v-if="showAnswer">{{ pokemon.name }} <span v-if="win">✅</span><span v-if="!win">❌</span></h2>
        <PokemonPicture v-bind:pokemonId=pokemon.id v-bind:showPokemon=showPokemon />
        <PokemonOptions 
        :pokemons="pokemonArr" 
        :showAnswer="showAnswer"
        :win="this.pokemon.id"
        @selection="checkAnswer" />

        <h2 v-if="showAnswer" class="fade-in">{{ message }}</h2>
        <button v-if="showAnswer" @click="newGame"> Nuevo juego</button>
    </div>
</template>
<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '../helpers/getPokemonOptions'

export default {
    components: {
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
            win: false
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor(Math.random() * 4 )
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer( pokemonId ) {
            this.showPokemon = true
            this.showAnswer = true
            if ( pokemonId === this.pokemon.id){ 
                this.win = true
                this.message = `¡Felicidades! ¡Has ganado el juego!`
            }else{
                this.win = false
                this.message = `Oh no! Has perdido el juego.`
            }
        },
        newGame(){
            this.showAnswer = false
            this.showPokemon = false
            this.showAnswer = false
            this.win = false
            this.pokemonArr = []
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }

}
</script>
<style scoped>

button{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

button:hover {
    color: #fff;
    background-color: #0056b3;
    border-color: #0056b3;
}
</style>