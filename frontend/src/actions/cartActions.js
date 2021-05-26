import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAN } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
}

export const cleanCart = () => (dispatch) => {
    dispatch({
        type: CART_CLEAN
    })
}