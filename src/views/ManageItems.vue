<template>
    <div>
        <br>
        <ManageItemCard v-for="ic in userItemCard"
                        :name="ic.title"
                        :isEnabled="true"
                        :mnData="ic"
        >

        </ManageItemCard>

        <ManageItemCard v-for="ic in disabledItems"
                        :name="ic.title"
                        :isEnabled="false"
                        :mnData="ic"
        >

        </ManageItemCard>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {USERS} from '@/database/Database'
    import {MNData} from '@/models/User'
    import ManageItemCard from "@/components/ManageItemCard.vue"

    @Component({
        components: {ManageItemCard}
    })
    export default class ManageItems extends Vue {

        get userItemCard(): MNData[] {
            return USERS[0].dietProfile.macros
        }

        get allItems(): MNData[] {
            return MNData.all()
        }

        get disabledItems(): MNData[] {
            const set = new Set(this.userItemCard.map((m: MNData) => m.title))
            const disabled: MNData[] = []
            this.allItems.forEach((m: MNData) => {
                if (!set.has(m.title)) {
                    disabled.push(m)
                }
            })

            return disabled
        }
    }
</script>

<style lang="scss" scoped>

</style>