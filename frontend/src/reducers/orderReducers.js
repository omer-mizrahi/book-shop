import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_GET_REQUEST, ORDER_GET_SUCCESS, ORDER_GET_FAIL } from '../constants/orderConstants'


export const orderCreateReducers = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true }
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload }
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const ordersReducers = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_GET_REQUEST:
            return { loading: true, orders: [] }
        case ORDER_GET_SUCCESS:
            return { loading: false, orders: action.payload }
        case ORDER_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}