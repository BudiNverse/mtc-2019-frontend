// this is where all the globals reside
// all operation will be done from here

import {FoodProfile, MNData, User} from "@/models/User"

export const USERS: User[] = [
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
]