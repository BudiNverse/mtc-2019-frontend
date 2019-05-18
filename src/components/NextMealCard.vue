<template>
    <div>
        <br>
        <div class="next-meal-card box"
             @click="$router.push('/next')">
            <p class="is-size-2">Next meal</p>
            <p class="is-size-4">{{nextFood[0].name}}</p>
            <div class="buttons is-fullwidth">
                <a class="button is-medium is-fullwidth is-success">
                    <i class="fas fa-utensils"></i>
                    &nbsp;Eaten
                </a>
                <a class="button is-medium is-fullwidth is-danger">Skip</a>
            </div>
        </div>
    </div>    
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {USERS} from '@/database/Database'
    import {FoodProfile, MNData} from '@/models/User'

    @Component({})
    export default class NextMealCard extends Vue {

        get nextFood(): FoodProfile[] {
            return this.$store.state.food.filter((f: FoodProfile) => {
                let test: boolean = true
                f.macros.forEach((mData: MNData) => {
                    USERS[0].dietProfile.macros.forEach((mData2) => {
                        if (mData2.title === mData.title) {
                            const left = mData2.target - mData2.curr
                            if (left < mData.curr) {
                                test = false
                            }
                            console.log(`test ${test}`)
                        }
                    })
                })
                return test
            })
        }

        get bgImg() {
            return `../assets/${this.nextFood[0].image}`
        }

        // eat() {
        //     USERS[0].dietProfile.macros.forEach((mData: MNData) => {
        //         mData.eat()
        //     })
        // }
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