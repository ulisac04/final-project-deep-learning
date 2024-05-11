<template>
    <div class="options-container">
        <ul>
            <li :class="{ 'li-wrong': showAnswer && win != pokemon.id,  'li-correct': showAnswer && win == pokemon.id }" v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">{{ pokemon.name }}</li>
        </ul>
    </div>
</template>
<script>

export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        },
        showAnswer: {
            type: Boolean
        },
        win: {
            type: Boolean
        }
    },

}
</script>
<style>
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.options-container {
    display: flex;
    justify-content: center;
}

.li-correct {
    background-color: #28a745;
    color: white;
}

.li-wrong {
    background-color: #dc3545;
    color: white;
}
</style>