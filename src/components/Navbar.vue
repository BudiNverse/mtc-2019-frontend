<template>
    <div>
        <div class="is-hidden-desktop">
            <i class="fas fa-hamburger is-size-3" @click="toggleMenuOpen"></i>
            <div :class="menuShowing" class="mobile-menu">
                <a v-for="l in links" class="is-size-2" @click="navigate(l.to)">
                    <i class="fas" :class="l.iconClass"></i>
                    {{l.str}}
                </a>
                <a class="is-size-2">
                    <i class="fas fa-times" @click="toggleMenuOpen"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    class Link {
        private readonly str: string
        private readonly to: string
        private readonly iconClass: string

        constructor(toStr: string, to: string, iconClass: string) {
            this.str = toStr
            this.to = to
            this.iconClass = iconClass
        }
    }

    @Component({})
    export default class Navbar extends Vue {
        links: Link[] = []
        menuOpen = false

        created() {
            this.links.push(
                new Link("Home", "/", "fa-home"),
                new Link("Profile", "/profile", "fa-tachometer-alt"),
                new Link("Logout", "/login", "fa-sign-out-alt")
            )
        }

        toggleMenuOpen() {
            this.menuOpen = !this.menuOpen
        }

        navigate(navLink: string) {
            this.toggleMenuOpen()
            this.$router.push(navLink)
        }

        get menuShowing() {
            return this.menuOpen ? '' : 'is-hidden'
        }
    }
</script>

<style lang="scss" scoped>
    @import url("~@fortawesome/fontawesome-free/css/all.css");

    .mobile-menu {
        text-align: center;
        position: fixed;
        min-height: 100vh;
        min-width: 100vw;
        top: 0;
        left: 0;
        background-color: #FFC0CB;
        padding-top: 50%;

        a {
            display: block;

            .fa-times {
                padding-top: 50%;
            }
        }
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>