import { 
    SET_CATEGORY, 
    SET_SEARCHED,
    SET_SORTED,
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE
} from './../constants/products.constants';

export const setCategoryAction = (payload) => ({
    type: SET_CATEGORY,
    payload
});

export const setSearchedAction = (payload) => ({
    type: SET_SEARCHED,
    payload
});

export const setSortedAction = (payload) => ({
    type: SET_SORTED,
    payload
});

export const fetchProductsRequest = (payload) => ({
    type: FETCH_PRODUCTS_REQUEST,
    payload
});

export const fetchProductsSuccess = (payload) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload
});

export const fetchProductsFailure = (payload) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload
});
