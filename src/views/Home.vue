<template>
    <div class="home">
        <navbar class="animated fadeInDown"></navbar>
        <NextMealCard class="animated fadeInDown"></NextMealCard>
        <br>
        <Macronutrients v-for="m in mn"
                        :key="m.title"
                        :title="m.title"
                        :unit="m.unit"
                        :curr="m.curr"
                        :target="m.target"
                        :progressColor="m.progressColor"
                        class="animated fadeInDown"
        >
        </Macronutrients>
        <div class="has-text-right">
            <router-link to="/manageItems">Manage items</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import HelloWorld from '@/components/HelloWorld.vue'
    import NextMealCard from "@/components/NextMealCard.vue"
    import Macronutrients from "@/components/Macronutrients.vue"
    import Navbar from "@/components/Navbar.vue"

    @Component({
        components: {
            Navbar,
            Macronutrients,
            NextMealCard,
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        get mn() {
            return this.USERS[0].dietProfile.macros
        }


        get USERS() {
            return this.$store.state.user
        }
    }
</script>