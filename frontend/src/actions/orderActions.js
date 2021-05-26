import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_GET_REQUEST, ORDER_GET_SUCCESS, ORDER_GET_FAIL } from '../constants/orderConstants'
import axios from 'axios'


export const createOrder = (order) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const { data } = await axios.post('/api/orders', order)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getListOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ORDER_GET_REQUEST })
        const { data } = await axios.get('/api/orders')

        dispatch({
            type: ORDER_GET_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: ORDER_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}