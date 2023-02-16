import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Visinho",
        category: "Programmer"
        },
        {id: 2,
        title: "Ugo",
        category: "Engineer"
        },
]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}