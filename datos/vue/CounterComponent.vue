<template>
    <h2>{{ titleC }}!</h2>
    <small>{{ counter }}<sup>{{expopente}}</sup>= {{ squareCounter }}</small>
    <div>
        <button v-on:click="d">-1</button>
        <button @click="i">+1</button>
        <br><br>
        <button v-on:click="dd">-1</button>
        <button @click="ii">+1</button>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            required: true,
            default: 2,
            validator(value){
                return value > 100 ? false : true
            }
        },
        exp: Number
    },
    data() {
        return {
            counter: this.start,
            expopente: this.exp
        }
    },
    methods:{
        i() {
            this.counter++;
        },
        d() {
            this.counter--;
        },
        ii() {
            this.expopente++;
        },
        dd() {
            this.expopente--;
        }
    },
    computed: {
        squareCounter() {
            return this.counter ** this.expopente
        },
        titleC() {
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    button {
        margin: 0 5px;
        background-color: #64bb87;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
</style>