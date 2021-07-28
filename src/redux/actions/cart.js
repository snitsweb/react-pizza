export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const setTotalCount = (count) => ({
    type: 'SET_TOTAL_COUNT',
    payload: count
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
    payload: {
        totalCount: 0,
        totalPrice: 0,
        items: {}
    }
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
})

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})