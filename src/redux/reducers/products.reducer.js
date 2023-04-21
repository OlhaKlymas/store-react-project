import {
    SET_CATEGORY,
    SET_SORTED,
    SET_SEARCHED,
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE
 } from './../constants/products.constants';

const initialState = {
    selectedCategory: 'all',
    sorted: null,
    searched: null,
    products: [],
    isLoading: false,
    isError: false
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORY: 
            return {
                ...state,
                selectedCategory: action.payload
            }
        case SET_SORTED: 
            return {
                ...state,
                sorted: action.payload
            }
        case SET_SEARCHED: 
            return {
                ...state,
                searched: action.payload
            }
        case FETCH_PRODUCTS_REQUEST: 
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_PRODUCTS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}
