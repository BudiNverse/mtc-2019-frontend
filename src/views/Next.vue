<template>
<div>
    <FoodCard></FoodCard>
    <br>
    <FoodCard></FoodCard>
    <br>
    <FoodCard></FoodCard>
</div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import FoodCard from '../components/FoodCard.vue'
    @Component({
        components: {FoodCard},
    })
    export default class Next extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>