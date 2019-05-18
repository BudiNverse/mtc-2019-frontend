<template>
    <div class="home">
        <br>
        <NextMealCard></NextMealCard>
        <br>
        <Macronutrients v-for="m in mn"
                        :key="m.title"
                        :title="m.title"
                        :unit="m.unit"
                        :curr="m.curr"
                        :target="m.target"
                        :progressColor="m.progressColor">
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
    import {USERS} from "@/database/Database"

    @Component({
        components: {
            Macronutrients,
            NextMealCard,
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        get mn() {
            return USERS[0].dietProfile.macros
        }
    }
</script>