import {combineReducers} from 'redux'
import pizzas from "./pizzas";
import filters from "./filters";

const rootReducer = combineReducers({
    filters,
    pizzas
})

export default rootReducer