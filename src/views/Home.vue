<template>
    <div class="home">
        <br>
        <NextMealCard></NextMealCard>
        <br>
        <Macronutrients v-for="m in macronutrients"
                        :key="m.title"
                        :title="m.title"
                        :unit="m.unit"
                        :min="m.min"
                        :max="m.max"
                        :progressColor="m.progressColor">
        </Macronutrients>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import HelloWorld from '@/components/HelloWorld.vue'
    import NextMealCard from "@/components/NextMealCard.vue"
    import Macronutrients from "@/components/Macronutrients.vue"

    export class MNData {
        title: string
        unit: string
        progressColor: string
        min: number
        max: number

        constructor(title: string, unit: string, progressColor: string, max: number, min: number = 0) {
            this.title = title
            this.unit = unit
            this.progressColor = progressColor
            this.min = min
            this.max = max
        }
    }

    @Component({
        components: {
            Macronutrients,
            NextMealCard,
            HelloWorld,
        },
    })
    export default class Home extends Vue {

        macronutrients: MNData[] = [
            new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
            new MNData("Fats Intake", "g", "is-warning", 100, 300),
            new MNData("Carbohydrate Intake", "kcal", "is-danger", 200, 500),
            new MNData("Protein Intake", "kcal", "is-default", 200, 500),
            new MNData("Iron Intake", "kcal", "is-danger", 200, 500),
            new MNData("Vitamin A Intake", "kcal", "is-primary", 200, 500),
            new MNData("Vitamin B Intake", "kcal", "is-info", 200, 500),
        ]
    }
</script>