<template>
<div>
    <div v-for="profile in food" v-bind:key="profile.title">
        <FoodCard :profile="profile" ></FoodCard>
        <br>
    </div>
</div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import FoodCard from '../components/FoodCard.vue'
    @Component({
        components: {FoodCard},
    })
    export default class Next extends Vue {
        food = this.$store.getters.getFood
    }
</script>

<style lang="scss" scoped>

</style>