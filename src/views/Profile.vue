<template>
    <div class="profile">
        <div class="header title">
            General Settings
        </div>
        <div class="generalSettings">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Age:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control is-expanded">
                            <input class="input" type="number" placeholder="Age">
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Height: </label>
                </div>
                <div class="field-body">
                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input" type="number" placeholder="Height"/>
                            </div>
                            <div class="control">
                                <div class="button is-static">
                                    cm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Weight: </label>
                </div>
                <div class="field-body">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input class="input" type="number" placeholder="Weight"/>
                        </div>
                        <div class="control">
                            <div class="button is-static">kg</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Gender: </label>
                </div>
                <div class="field-body">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="gender" checked>
                            Male
                        </label>
                        <label class="radio">
                            <input type="radio" name="gender">
                            Female
                        </label>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Calorie Allowance: </label>
                </div>
                <div class="field-body">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input class="input" type="number" placeholder=""/>
                        </div>
                        <div class="control">
                            <div class="button is-static">kcal</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Diet Plan: </label>
                </div>
                <div class="field-body">
                    <div class="control">
                        <div class="dropdown is-hoverable is-expanded">
                            <div class="dropdown-trigger">
                                <button class="button">
                                    <span>Diet Plan</span>
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
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({})
    export default class Profile extends Vue {

    }
</script>

<style lang="scss" scoped>
    .profile {
        padding-top: 0.5em;
    }
</style>