const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }
            const itemsArr = [].concat.apply([], Object.values(newItems))
            return {
                ...state,
                items: newItems,
                totalCount: itemsArr.length,
                totalPrice: itemsArr.reduce((sum, item) => sum + item.price, 0)
            }
        default:
            return state
    }
}

export default cart