const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, item) => item.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            }

            const totalCount = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].items.length + sum,
                0)
            const totalPrice = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].totalPrice + sum,
                0)
            return {
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: totalPrice
            }
        case 'CLEAR_CART':
            return {
                ...state,
                ...action.payload
            }
        case 'REMOVE_CART_ITEM':
            const cartItems = {
                ...state.items
            }
            const currentTotalPrice = cartItems[action.payload].totalPrice;
            const currentTotalCount = cartItems[action.payload].items.length;

            delete cartItems[action.payload]
            return {
                ...state,
                items: cartItems,
                totalCount: state.totalCount - currentTotalCount,
                totalPrice: state.totalPrice - currentTotalPrice
            }
        case 'PLUS_CART_ITEM':

            const plusItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: plusItems,
                        totalPrice: getTotalPrice(plusItems),
                    }
                },
                totalPrice: state.totalPrice + state.items[action.payload].items[0].price,
                totalCount: state.totalCount + 1
            }
        case
        'MINUS_CART_ITEM':
            const minusItems = state.items[action.payload].items.length > 1
                ? state.items[action.payload].items.slice(1)
                : []

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: minusItems,
                        totalPrice: getTotalPrice(minusItems),
                    }
                },
                totalPrice: state.totalPrice - state.items[action.payload].items[0].price,
                totalCount: state.totalCount - 1
            }
        default:
            return state
    }
}

export default cart