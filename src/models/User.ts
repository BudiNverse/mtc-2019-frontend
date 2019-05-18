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

export class MNData {
    title: string
    unit: string
    progressColor: string
    min: number
    max: number

    constructor(title: string, unit: string, progressColor: string, max: number, min: number = 0) {
        this.title = title
        this.unit = unit
        this.progressColor = progressColor
        this.min = min
        this.max = max
    }
}

export class FoodProfile {
    name: string
    image: string
    macros: MNData[]

    constructor(name:string, macros:MNData[], image:string) {
        this.name = name
        this.macros = macros
        this.image = image
    }
}

export class DietProfile extends FoodProfile {
}