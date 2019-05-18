<template>
    <div class="box">
        <p class="is-size-4">{{title}}</p>
        <progress class="progress" :class="progressColor" :value="min" :max="max"></progress>
        <p class="is-size-5 is-right"><strong class="is-bold">{{min}}</strong>/{{max}}
            {{unit}}</p>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component({})
    export default class Macronutrients extends Vue {
        @Prop() title!: string
        @Prop() unit!: string
        @Prop() progressColor!: string
        @Prop() min!: number
        @Prop() max!: number

        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .progress {
        margin-bottom: 0;
    }
</style>