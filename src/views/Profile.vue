<template>
    <div class="profile">
        <div class="columns">
            <div class="column">
                <p class="bolder is-size-3">
                    <i class="fas fa-arrow-left is-size-3" @click="goHome()"></i>
                    &nbsp; General Settings
                </p>
            </div>
        </div>
        <div class="generalSettings">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Age:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control is-expanded">
                            <input class="input" type="number" placeholder="Age" v-model="user.age">
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Height:</label>
                </div>
                <div class="field-body">
                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input" type="number" placeholder="Height" v-model="user.height">
                            </div>
                            <div class="control">
                                <div class="button is-static">cm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Weight:</label>
                </div>
                <div class="field-body">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input class="input" type="number" placeholder="Weight" v-model="user.weight">
                        </div>
                        <div class="control">
                            <div class="button is-static">kg</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Gender:</label>
                </div>
                <div class="field-body">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="gender" value="true" v-model="user.sex">
                            Male
                        </label>
                        <label class="radio">
                            <input type="radio" name="gender" value="false" v-model="user.sex">
                            Female
                        </label>
                    </div>
                </div>
            </div>
            <div class="header title">Dietary Profile</div>
            <div class="field is-horizontal">
                <div class="field-body">
                    <div class="control">
                        <div class="dropdown is-hoverable is-expanded">
                            <div class="dropdown-trigger">
                                <button class="button">
                                    <span>{{currentPlan}}</span>
                                    <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                                </button>
                            </div>
                            <div class="dropdown-menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">Ketogenic</a>
                                    <a class="dropdown-item">Paleto</a>
                                    <a class="dropdown-item">Intermittent Fasting</a>
                                    <a class="dropdown-item">20/20 Diet</a>
                                    <a class="dropdown-item">Custom</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal final-input" v-for="m in dietProfile.macros" :key="m.title">
                <div class="field-label is-normal">
                    <label class="label">{{m.title}}:</label>
                </div>
                <div class="field-body">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input class="input" type="number" v-model="m.target">
                        </div>
                        <div class="control">
                            <div class="button is-static">{{m.unit}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="button is-success save-button" @click="saveProfile">Save</button>
        <button class="button is-success">Share Profile</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import {FoodProfile, User} from "@/models/User.ts"

    @Component({})
    export default class Profile extends Vue {
        user: User = this.$store.state.user[0]
        dietProfile: FoodProfile = this.user.dietProfile

        getquery() {
            console.log(this.$route.query.test)
        }

        goHome() {
            this.$router.push("/")
        }

        get currentPlan() {
            return this.dietProfile.name
        }

        saveProfile() {
            this.user.dietProfile = this.dietProfile
            this.$store.commit('save', this.user)
        }
    }

</script>

<style lang="scss" scoped>
    .profile {
        padding-top: 0.5em;
    }

    .bolder {
        font-weight: bolder;
    }
    
    .final-input {
      margin-bottom: 10px;
    }

    .save-button {
      margin-right: 10px;
    }
</style>