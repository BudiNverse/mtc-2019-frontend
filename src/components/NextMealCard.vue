<template>
    <div>
        <br>
        <div class="next-meal-card box"
             @click="$router.push('/next')">
            <p class="is-size-2">Next meal</p>
            <p class="is-size-4">{{nextFood[currFoodIdx].name}}</p>
            <div class="buttons is-fullwidth">
                <a class="button is-medium is-fullwidth is-success" @click.stop="eat()">
                    <i class="fas fa-utensils"></i>
                    &nbsp;Eaten
                </a>
                <a class="button is-medium is-fullwidth is-danger" @click.stop="skip">Skip</a>
            </div>
        </div>
    </div>    
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {FoodProfile, MNData} from '@/models/User'

    @Component({})
    export default class NextMealCard extends Vue {

        currFoodIdx = 0

        get nextFood(): FoodProfile[] {
            return this.$store.state.food.filter((f: FoodProfile) => {
                let test: boolean = true
                f.macros.forEach((mData: MNData) => {
                    this.USERS[0].dietProfile.macros.forEach((mData2: MNData) => {
                        if (mData2.title === mData.title) {
                            const left = mData2.target - mData2.curr
                            if (left < mData.curr) {
                                test = false
                            }
                        }
                    })
                })
                return test
            })
        }

        get USERS() {
            return this.$store.state.user
        }

        eat() {
            this.USERS[0].dietProfile.macros.forEach((mData: MNData) => {
                this.nextFood[0].macros.forEach((mData2: MNData) => {
                    if (mData2.title === mData.title) {
                        mData.eat(mData2)
                    }
                })
            })
        }

        skip() {
            this.currFoodIdx += 1
        }
    }
</script>

<style lang="scss" scoped>
    .next-meal-card {
        background-image: url("../assets/chickenrice2.png");
        background-size: cover;
        min-height: 30vh;
        font-weight: bolder;
    }

    .buttons {
        padding-top: 3em;
    }


</style>