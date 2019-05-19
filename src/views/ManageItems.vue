<template>
    <div>
        <div class="columns">
            <div class="column">
                <p class="bolder is-size-3">
                    <i class="fas fa-arrow-left is-size-3" @click="goHome()"></i>
                    &nbsp; Manage
                </p>
            </div>
        </div>
        <ManageItemCard v-for="ic in allItemsTagged"
                        :name="ic.data.title"
                        :isEnabled="ic.disabled"
                        :mnData="ic.data">
        </ManageItemCard>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {MNData} from '@/models/User'
    import ManageItemCard from "@/components/ManageItemCard.vue"


    class TaggedItems {
        disabled: boolean
        data: MNData

        constructor(disabled: boolean, data: MNData) {
            this.disabled = disabled
            this.data = data
        }
    }

    @Component({
        components: {ManageItemCard}
    })
    export default class ManageItems extends Vue {
        goHome() {
            this.$router.push("/")
        }

        get USERS() {
            return this.$store.state.user
        }

        get userItemCard(): MNData[] {
            return this.USERS[0].dietProfile.macros
        }

        get allItemsTagged(): TaggedItems[] {
            const set = new Set(this.userItemCard.map((m: MNData) => m.title))
            return this.allItems.map((m: MNData) => new TaggedItems(set.has(m.title), m))
        }

        get allItems(): MNData[] {
            return MNData.all()
        }
    }
</script>

<style lang="scss" scoped>
    .bolder {
        font-weight: bolder;
    }
</style>