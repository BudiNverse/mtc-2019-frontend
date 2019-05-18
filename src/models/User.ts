export class User {
    age: number
    height: number
    weight: number
    sex: number
    username: string
    dietProfile: DietProfile
    calorieAllowance: number
    mealHistory: Meal[]
    mealsPerDay: number

    constructor(age: number, height: number, weight: number, sex: number, username: string, dietProfile: DietProfile, calorieAllowance: number, mealHistory: Meal[], mealsPerDay: number) {
        this.age = age
        this.height = height
        this.weight = weight
        this.sex = sex
        this.username = username
        this.dietProfile = dietProfile
        this.calorieAllowance = calorieAllowance
        this.mealHistory = mealHistory
        this.mealsPerDay = mealsPerDay
    }
}


export class Meal {
    datetime: Date
    foodProfiles: FoodProfile[]
    username: string

    constructor(datetime: Date, foodProfiles: FoodProfile[], username: string) {
        this.datetime = datetime
        this.foodProfiles = foodProfiles
        this.username = username
    }
}

export class FoodProfile {
    calorie: number
    name: string
    protein: number
    carbs: number
    fats: number
    iron: number
    vitA: number
    vitD: number

    constructor(calorie: number, name: string, protein: number, carbs: number, fats: number, iron: number, vitA: number, vitD: number) {
        this.calorie = calorie
        this.name = name
        this.protein = protein
        this.carbs = carbs
        this.fats = fats
        this.iron = iron
        this.vitA = vitA
        this.vitD = vitD
    }
}

export class DietProfile extends FoodProfile {
}