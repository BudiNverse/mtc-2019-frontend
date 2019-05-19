import Vue from 'vue'
import Vuex from 'vuex'
import {FoodProfile, MNData, User} from "@/models/User"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: [
            new User(
                55,
                170,
                70,
                1,
                "John Blyat",
                new FoodProfile(
                    "Obese",
                    MNData.defaults(1904),
                    ""
                ),
                1904,
                [],
                3
            )
        ],
        food: [
            new FoodProfile("Chicken Rice", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 1905),
                new MNData("Fats Intake", "g", "", 0, 300),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 500),
                new MNData("Protein Intake", "kcal", "", 0, 500),
                new MNData("Iron Intake", "kcal", "", 0, 500),
                new MNData("Vitamin A Intake", "kcal", "", 0, 500),
                new MNData("Vitamin B Intake", "kcal", "", 0, 500),], "chicken-rice.jpg"),
            new FoodProfile("Mixed Vegetable Rice", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
                new MNData("Fats Intake", "g", "", 0, 100),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 100),
                new MNData("Protein Intake", "kcal", "", 0, 100),
                new MNData("Iron Intake", "kcal", "", 0, 100),
                new MNData("Vitamin A Intake", "kcal", "", 0, 100),
                new MNData("Vitamin B Intake", "kcal", "", 0, 100),], "Mixed-vegetable-rice.jpg")
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getFood: state => {
            return state.food
        }
    }
})
