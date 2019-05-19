<template>
<div>
    <div class="columns">
        <div class="column">
            <i class="fas fa-arrow-left is-size-3" @click="goHome()"></i>
        </div>
    </div>
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

        goHome() {
            this.$router.push("/")
        }

        get food() {
            return this.$store.getters.getFood
        }
    }
</script>

<style lang="scss" scoped>

</style>