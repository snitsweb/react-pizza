import {ReduxConstants} from "../constants";

const initialState = {
    items : [],
    isLoaded : false
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case ReduxConstants.pizzas.setPizzas:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case ReduxConstants.pizzas.setLoaded:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default pizzas