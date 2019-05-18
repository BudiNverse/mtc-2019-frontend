<template>
    <div class="manage-item-card box">
        <p class="is-bold is-size-4 is-inline-block">{{name}}</p>
        <i class="fas is-size-3 is-pulled-right cursor-ptr" :class="iconClass" @click="appendOrDecr()"></i>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {USERS} from '@/database/Database'
    import {MNData} from '@/models/User'

    @Component({})
    export default class ManageItemCard extends Vue {
        @Prop()
        name!: string

        @Prop()
        isEnabled!: boolean

        @Prop()
        mnData!: MNData

        nonCachedEnabled: boolean = false

        created() {
            this.nonCachedEnabled = this.isEnabled
        }

        appendOrDecr() {
            if (this.isEnabled) {
                const idx = USERS[0].dietProfile.macros.indexOf(this.mnData)
                if (idx > -1) {
                    USERS[0].dietProfile.macros.splice(idx, 1)
                }

                this.nonCachedEnabled = !this.nonCachedEnabled
            } else {
                USERS[0].dietProfile.macros.push(this.mnData)
                this.nonCachedEnabled = !this.nonCachedEnabled
            }
        }

        get iconClass() {
            return this.nonCachedEnabled ? 'fa-minus' : 'fa-plus'
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        .fas {
            text-align: right;
        }
    }

    .cursor-ptr {
        cursor: pointer;
    }
</style>