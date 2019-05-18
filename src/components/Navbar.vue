<template>
    <div>
        <div class="is-hidden-desktop">

        </div>
        <div class="is-hidden-mobile">
            <router-link v-for="l in links" :to="l.to">{{l.str}}</router-link>
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

        created() {
            this.links.push(
                new Link("Home", "/", ""),
                new Link("Login", "/login", ""),
                new Link("Dashboard", "/dashboard", "")
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>