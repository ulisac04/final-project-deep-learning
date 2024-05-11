<template>
    <h1>About page</h1>
    <h2>{{ title }}</h2>
    <button @click="onchange">
    cambiar nombre</button>
</template>

<script>
export default {
    data(){
        return {
            title: "hola"
        }
    },
    methods: {
        onchange(){
            this.title = "khe"
        }
    },
   /* beforeCreate(){ console.log("beforeCreate") },
    created(){ console.log("created") },
    beforeMount(){ console.log("beforeMount") },
    mounted(){ console.log("mounted") },
    beforeUpdate(){ console.log("beforeUpdate") },
    updated(){ console.log("updated") },
    beforeUnmount(){ console.log("beforeUnmount") },
    unmounted(){ console.log("unmounted") },
    errorCaptured(){ console.log("errorCaptured") },
    renderTracked(){ console.log("renderTracked") },
    renderTriggered(){ console.log("renderTriggered") },
    activated(){ console.log("activated") },
    deactivated(){ console.log("deactivated") },
    serverPrefetch(){ console.log("serverPrefetch") },*/
}
</script>