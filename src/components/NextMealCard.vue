<template>
    <div>
        <div class="tinted-img"></div>
        <div class="next-meal-card box">
            <p class="is-size-2">Next meal</p>
            <p class="is-size-4">Salad</p>
            <div class="buttons is-fullwidth">
                <a class="button is-medium is-fullwidth is-success">
                    <i class="fas fa-utensils"></i>
                    &nbsp;Eaten
                </a>
                <a class="button is-medium is-fullwidth is-danger">Skip</a>
                <a class="button is-medium is-fullwidth is-warning">
                    <i class="fas fa-redo"></i> &nbsp; Regenrate</a>
            </div>
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
        background-image: url("../assets/tintedsalad.png");
        background-size: cover;
        min-height: 30vh;
        font-weight: bolder;
    }

    .buttons {
        padding-top: 3em;
    }
</style>