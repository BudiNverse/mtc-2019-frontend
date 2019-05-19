<template>
    <div class="card">
        <div class="card-image" @click="toggleModalOpen">
            <figure class="image is-4by3">
                <img v-bind:src="require(`../assets/${profile.image}`)">
            </figure>
        </div>
        <div class="content">
            <p class="title is-4 oneem-padding">{{profile.name}}</p>
        </div>
        <div class="modal" :class="showModal">
            <div class="modal-background" @click="toggleModalOpen"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{profile.name}}</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <div class="card">
                        <div class="card-image" @click="toggleModalOpen">
                            <figure class="image is-4by3">
                                <img v-bind:src="require(`../assets/${profile.image}`)">
                            </figure>
                        </div>
                        <div class="content">
                            <ul id="example-1">
                                <li v-for="m in profile.macros" :key=m.title>{{ m.title }}: {{m.curr}} {{m.unit}}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" @click="eat">Eat</button>
                    <button class="button" @click="toggleModalOpen">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator"
    import {FoodProfile, MNData} from "../models/User"

    @Component({})
    export default class FoodCard extends Vue {
        @Prop()
        profile!: FoodProfile

        openModal = false

        created() {
        }

        eat() {
            this.USERS[0].dietProfile.macros.forEach((mData: MNData) => {
                this.profile.macros.forEach((mData2: MNData) => {
                    if (mData2.title === mData.title) {
                        mData.eat(mData2)
                    }
                })
            })
            this.$router.push("/")
        }

        get USERS() {
            return this.$store.state.user
        }

        toggleModalOpen() {
            console.log(this.openModal)
            this.openModal = !this.openModal
        }

        get showModal() {
            return this.openModal ? "is-active" : ""
        }

        get profileImg() {
            return this.profile.image
        }
    }
</script>

<style lang="scss" scoped>

    .oneem-padding {
        padding: 1em;
    }
</style>