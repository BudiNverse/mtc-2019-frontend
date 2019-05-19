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
                false,
                "Ahmad Syafiq",
                new FoodProfile(
                    "Obese",
                    MNData.defaults(2000),
                    ""
                ),
                1904,
                [],
                3
            )
        ],
        food: [
            new FoodProfile("Chicken Rice", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 333),
                new MNData("Fats Intake", "g", "", 0, 24.2),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 70),
                new MNData("Protein Intake", "kcal", "", 0, 22.2),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 3),
                new MNData("Vitamin B Intake", "kcal", "", 0, 3),], "chicken-rice.jpg"),
            new FoodProfile("Mixed Vegetable Rice", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 580),
                new MNData("Fats Intake", "g", "", 0, 10),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 40),
                new MNData("Protein Intake", "kcal", "", 0, 30),
                new MNData("Iron Intake", "kcal", "", 0, 5),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "Mixed-vegetable-rice.jpg"),
            new FoodProfile("Chocolate Cake", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 389),
                new MNData("Fats Intake", "g", "", 0, 29),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 212),
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
            new FoodProfile("Tonkotsu Ramen", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 552),
                new MNData("Fats Intake", "g", "", 0, 20),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 75),
                new MNData("Protein Intake", "kcal", "", 0, 18),
                new MNData("Iron Intake", "kcal", "", 0, 0),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "ramen.jpg"),
            new FoodProfile("Steak", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 271),
                new MNData("Fats Intake", "g", "", 0, 19),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 0),
                new MNData("Protein Intake", "kcal", "", 0, 25),
                new MNData("Iron Intake", "kcal", "", 0, 25),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 25),], "steak.jpg"),
            new FoodProfile("Nigiri Sushi (1 piece)", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 50),
                new MNData("Fats Intake", "g", "", 0, 1),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 5),
                new MNData("Protein Intake", "kcal", "", 0, 5),
                new MNData("Iron Intake", "kcal", "", 0, 1),
                new MNData("Vitamin A Intake", "kcal", "", 0, 0),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "sushi.jpg"),
            new FoodProfile("Watermelon", [new MNData("Calorie Intake", "kcal", "is-success", 2000, 200),
                new MNData("Fats Intake", "g", "", 0, 0.2),
                new MNData("Carbohydrate Intake", "kcal", "", 0, 8),
                new MNData("Protein Intake", "kcal", "", 0, 0.6),
                new MNData("Iron Intake", "kcal", "", 0, 0.1),
                new MNData("Vitamin A Intake", "kcal", "", 0, 2),
                new MNData("Vitamin B Intake", "kcal", "", 0, 0),], "watermelon.jpg")
        ]
    },
    mutations: {
        save (state, n) {
            state.user[0] = n
          },
    },
    actions: {},
    getters: {
        getFood: state => {
            return state.food
        }
    }
})
