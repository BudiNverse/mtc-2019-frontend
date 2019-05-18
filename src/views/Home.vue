<template>
    <div class="home">
        <br>
        <NextMealCard></NextMealCard>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import HelloWorld from '@/components/HelloWorld.vue'
    import NextMealCard from "@/components/NextMealCard.vue" // @ is an alias to /src

    @Component({
        components: {
            NextMealCard,
            HelloWorld,
        },
    })
    export default class Home extends Vue {
    }
</script>