<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Navbar from './components/Navbar'

    @Component({
        components: {Navbar},
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    @import url("~bulma/css/bulma.css");

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 2em 1.5em;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
