import {
    FETCH_CATEGORIES_REQUEST, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_FAILURE
 } from '../constants/categories.constants';

const initialState = {
    categories: 'all'
}

export const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_REQUEST: 
            return {
                ...state,
            }
        case FETCH_CATEGORIES_SUCCESS: 
            return {
                ...state,
                categories: action.payload
            }
        case FETCH_CATEGORIES_FAILURE: 
            return {
                ...state
            }
        default:
            return state
    }
}
