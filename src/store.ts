import Vue from 'vue'
import Vuex from 'vuex'
import {User, FoodProfile, MNData} from "@/models/User"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        food: [
            new FoodProfile("Chicken Rice", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
            new MNData("Fats Intake", "g", "", 0, 300),
            new MNData("Carbohydrate Intake", "kcal", "", 0, 500),
            new MNData("Protein Intake", "kcal",  "", 0, 500),
            new MNData("Iron Intake", "kcal",  "", 0, 500),
            new MNData("Vitamin A Intake", "kcal",  "", 0, 500),
            new MNData("Vitamin B Intake", "kcal",  "", 0, 500),], "chicken-rice.jpg"),
            new FoodProfile("Mixed Vegetable Rice", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
            new MNData("Fats Intake", "g", "", 0, 300),
            new MNData("Carbohydrate Intake", "kcal", "", 0, 500),
            new MNData("Protein Intake", "kcal",  "", 0, 500),
            new MNData("Iron Intake", "kcal",  "", 0, 500),
            new MNData("Vitamin A Intake", "kcal",  "", 0, 500),
            new MNData("Vitamin B Intake", "kcal",  "", 0, 500),], "Mixed-vegetable-rice.jpg")
        ]
    },
    mutations: {
        setUser(state, user: User) {
            // @ts-ignore
            state.user = user
        }
    },
    actions: {},
    getters: {
        getFood: state => {
            return state.food
          }
    }
})
