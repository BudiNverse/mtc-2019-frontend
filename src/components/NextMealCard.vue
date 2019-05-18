<template>
    <div>
        <div class="tinted-img"></div>
        <div class="next-meal-card box">
            <p class="is-size-4">Next meal</p>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({})
    export default class NextMealCard extends Vue {

    }
</script>

<style lang="scss" scoped>
    .next-meal-card {
        background-image: url("../assets/salad.jpg");
        background-size: cover;
        min-height: 40vh;
    }

    .tinted-img {
        background-color: #00000032;
    }
</style>