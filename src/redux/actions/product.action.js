import {
    FETCH_PRODUCT_REQUEST, 
    FETCH_PRODUCT_SUCCESS, 
    FETCH_PRODUCT_FAILURE
} from '../constants/product.constants';

export const fetchProductRequest = (payload) => ({
    type: FETCH_PRODUCT_REQUEST,
    payload
});

export const fetchProductSuccess = (payload) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload
});

export const fetchProductFailure = (payload) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload
});
