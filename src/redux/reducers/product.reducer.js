import {
    FETCH_PRODUCT_REQUEST, 
    FETCH_PRODUCT_SUCCESS, 
    FETCH_PRODUCT_FAILURE
 } from '../constants/product.constants';

const initialState = {
    isLoading: false,
    isError: false,
    product: {},
    isAddedToCart: false
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_REQUEST: 
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_PRODUCT_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                product: action.payload
            }
        case FETCH_PRODUCT_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}
