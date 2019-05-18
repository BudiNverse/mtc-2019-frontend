import Vue from 'vue'
import Vuex from 'vuex'
import {User} from "@/models/User"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user: User) {
            // @ts-ignore
            state.user = user
        }
    },
    actions: {}
})
