<template>
    <h1>Pokemon page #{{ id }}</h1>
</template>
<script>
export default {
    props:{
        id: {
            type: Number,
            required: true
        }

    },
    methods: {
        async getPokemon(){
            try {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json())
            this.pokemon = pokemon
            } catch(err) {
                this.$router.push('/')
            }  
        }
    },
    watch: {
        id(){
        }
    },
    data(){
        return {
            //id:  this.$route.params
            pokemon: null
        }
    },
    created() {
        this.getPokemon()
       // const {id} = this.$route.params
       // this.id = id
    }
}
</script>