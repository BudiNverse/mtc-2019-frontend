<template>
    <div class="profile">
        <div class="columns">
            <div class="column">
                <p class="is-size-3 bolder">
                    <i class="fas fa-arrow-left is-size-3" @click="goHome()"></i>
                    &nbsp;General Settings
                </p>
            </div>
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
      <div class="field is-horizontal" v-for="m in dietProfile.macros" :key="m.title">
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
    <button class="button is-success" @click="saveProfile">Save</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {User, MNData, FoodProfile} from "@/models/User.ts"

    @Component({})
    export default class Profile extends Vue {
        goHome() {
            this.$router.push("/")
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
</style>