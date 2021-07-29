import {ReduxConstants} from "../constants";

const initialState = {
    sortBy: 'popular',
    category: 0
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case ReduxConstants.filters.setSortBy:
            return {
                ...state,
                sortBy: action.payload
            }
        case ReduxConstants.filters.setCategory:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default filters