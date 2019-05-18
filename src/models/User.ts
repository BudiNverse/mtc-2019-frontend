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

    constructor(age: number,
                height: number,
                weight: number,
                sex: number,
                username: string,
                dietProfile: DietProfile,
                calorieAllowance: number,
                mealHistory: Meal[],
                mealsPerDay: number) {
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

    get sexStr() {
        return this.sex === 1 ? "male" : "female"
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
    curr: number
    target: number

    static all(calories: number = 2000): MNData[] {
        return [
            new MNData("Calorie Intake", "kcal", "is-success", calories),
            new MNData("Fat Intake", "g", "is-warning", 0.25 * calories),
            new MNData("Protein Intake", "g", "is-danger", 0.2 * calories),
            new MNData("Carbohydrate Intake", "g", "is-link", 0.55 * calories),
            new MNData("Vitamin A Left", "mcg", "is-success", 750),
            new MNData("Vitamin D Left", "mcg", "is-default", 2.5),
        ]
    }

    static defaults(calories: number = 2000): MNData[] {
        const all = this.all(calories)

        return [
            all[0],
            all[1],
            all[2],
            all[3],
        ]
    }

    constructor(title: string, unit: string, progressColor: string, target: number, curr: number = 0) {
        this.title = title
        this.unit = unit
        this.progressColor = progressColor
        this.curr = curr
        this.target = target
    }
}

export class FoodProfile {
    name: string
    image: string
    macros: MNData[]

    constructor(name: string, macros: MNData[], image: string) {
        this.name = name
        this.macros = macros
        this.image = image
    }
}

export type DietProfile = FoodProfile