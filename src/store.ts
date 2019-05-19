import Vue from 'vue'
import Vuex from 'vuex'
import {FoodProfile, MNData, User} from "@/models/User"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
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
                new MNData("Vitamin B Intake", "kcal", "", 0, 100),], "Mixed-vegetable-rice.jpg"),
            new FoodProfile("Chocolate Cake", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 389),
                new MNData("Fats Intake", "g", "", 0, 29),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 53),
                new MNData("Protein Intake", "kcal", "", 0, 3.5),
                new MNData("Iron Intake", "kcal", "", 0, 35),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "choccake.jpg"),
            new FoodProfile("Egg Prata", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 427),
                new MNData("Fats Intake", "g", "", 0, 20),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 41.8),
                new MNData("Protein Intake", "kcal", "", 0, 5),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "eggprata.jpg"),
            new FoodProfile("Texas Chicken the superior chicken", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 494),
                new MNData("Fats Intake", "g", "", 0, 29),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 19),
                new MNData("Protein Intake", "kcal", "", 0, 35),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "friedchicken.jpeg"),
            new FoodProfile("Nasi Lemak", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 585),
                new MNData("Fats Intake", "g", "", 0, 22),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 82),
                new MNData("Protein Intake", "kcal", "", 0, 16),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "nasilemak.jpg"),
            new FoodProfile("Pasta", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 289),
                new MNData("Fats Intake", "g", "", 0, 8.2),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 12.6),
                new MNData("Protein Intake", "kcal", "", 0, 40.6),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "pasta.jpg"),
            new FoodProfile("Pizza (1 slice)", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 195),
                new MNData("Fats Intake", "g", "", 0, 7),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 21),
                new MNData("Protein Intake", "kcal", "", 0, 10),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "pizza.jpg"),
            new FoodProfile("Plain Prata", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 122),
                new MNData("Fats Intake", "g", "", 0, 4),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 19),
                new MNData("Protein Intake", "kcal", "", 0, 3),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "plainprata.jpg"),
            new FoodProfile("Tonkatsu Ramen", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
                new MNData("Fats Intake", "g", "", 0, 100),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 100),
                new MNData("Protein Intake", "kcal", "", 0, 100),
                new MNData("Iron Intake", "kcal", "", 0, 100),
                new MNData("Vitamin A Intake", "kcal", "", 0, 100),
                new MNData("Vitamin B Intake", "kcal", "", 0, 100),], "ramen.jpg"),
            new FoodProfile("Steak", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
                new MNData("Fats Intake", "g", "", 0, 100),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 100),
                new MNData("Protein Intake", "kcal", "", 0, 100),
                new MNData("Iron Intake", "kcal", "", 0, 100),
                new MNData("Vitamin A Intake", "kcal", "", 0, 100),
                new MNData("Vitamin B Intake", "kcal", "", 0, 100),], "steak.jpg"),
            new FoodProfile("Sushi", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
                new MNData("Fats Intake", "g", "", 0, 100),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 100),
                new MNData("Protein Intake", "kcal", "", 0, 100),
                new MNData("Iron Intake", "kcal", "", 0, 100),
                new MNData("Vitamin A Intake", "kcal", "", 0, 100),
                new MNData("Vitamin B Intake", "kcal", "", 0, 100),], "sushi.jpg"),
            new FoodProfile("Watermelon", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
                new MNData("Fats Intake", "g", "", 0, 100),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 100),
                new MNData("Protein Intake", "kcal", "", 0, 100),
                new MNData("Iron Intake", "kcal", "", 0, 100),
                new MNData("Vitamin A Intake", "kcal", "", 0, 100),
                new MNData("Vitamin B Intake", "kcal", "", 0, 100),], "watermelon.jpg")

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
