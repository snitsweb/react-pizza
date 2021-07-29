import {ReduxConstants} from "../constants";

export const addPizzaToCart = (pizzaObj) => ({
    type: ReduxConstants.cart.addPizzaCart,
    payload: pizzaObj
})

export const clearCart = () => ({
    type: ReduxConstants.cart.clearCart,
    payload: {
        totalCount: 0,
        totalPrice: 0,
        items: {}
    }
})

export const removeCartItem = (id) => ({
    type: ReduxConstants.cart.removeCartItem,
    payload: id
})

export const plusCartItem = (id) => ({
    type: ReduxConstants.cart.plusCartItem,
    payload: id
})

export const minusCartItem = (id) => ({
    type: ReduxConstants.cart.minusCartItem,
    payload: id
})