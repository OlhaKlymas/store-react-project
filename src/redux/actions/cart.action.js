import { 
    FETCH_PRODUCTS_IN_CART_REQUEST,
    FETCH_PRODUCTS_IN_CART_FAILURE,
    SET_PRODUCTS_IN_CART,
    GET_ITEMS_IDS_IN_CART,
    SET_ITEMS_IDS_IN_CART
} from '../constants/cart.constants';

export const fetchProductsInCartRequest = (payload) => ({
    type: FETCH_PRODUCTS_IN_CART_REQUEST,
    payload
});

export const fetchProductsInCartFailure = (payload) => ({
    type: FETCH_PRODUCTS_IN_CART_FAILURE,
    payload
});

export const setProductsInCartAction = (payload) => ({
    type: SET_PRODUCTS_IN_CART,
    payload
});

export const getItemsIdsInCartAction = (payload) => ({
    type: GET_ITEMS_IDS_IN_CART,
    payload
});

export const setItemsIdsInCartAction = (payload) => ({
    type: SET_ITEMS_IDS_IN_CART,
    payload
});
