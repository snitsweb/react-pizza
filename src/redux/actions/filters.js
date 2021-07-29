import {ReduxConstants} from "../constants";

export const setSortBy = (name) => ({
    type: ReduxConstants.filters.setSortBy,
    payload: name
})

export const setCategory = (catIndex) => ({
    type: ReduxConstants.filters.setCategory,
    payload: catIndex
})
