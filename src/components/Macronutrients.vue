<template>
    <div class="box">
        <p class="is-size-4">{{title}}</p>
        <progress class="progress" :class="progressColor" :value="curr" :max="target"></progress>
        <p class="is-size-5 is-right"><strong class="is-bold">{{curr.toFixed(2)}}</strong>/{{target.toFixed(2)}}
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
        @Prop() curr!: number
        @Prop() target!: number

        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .progress {
        margin-bottom: 0;
    }
</style>