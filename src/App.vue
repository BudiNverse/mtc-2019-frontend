<template>
    <div id="app">
        <transition name="custom-classes-transition"
                    enter-active-class="animated fadeInRight"
                    leave-active-class="animated fadeOutRight">
            <router-view/>
        </transition>
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
    @import url("~animate.css/animate.css");

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 2em 1.5em;
    }

    .button {
        transition: .5s;

        &:active {
            transform: scale(1.1);
        }
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
