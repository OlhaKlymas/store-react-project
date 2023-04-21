import { 
    FETCH_PRODUCTS_IN_CART_REQUEST,
    FETCH_PRODUCTS_IN_CART_FAILURE,
    SET_PRODUCTS_IN_CART,
    GET_ITEMS_IDS_IN_CART,
    SET_ITEMS_IDS_IN_CART
} from '../constants/cart.constants';

const initialState = {
    products: [],
    isLoading: false,
    isEmpty: false,
    idsInCart: localStorage.getItem('cart')?.split(', ') || ''
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_IN_CART_REQUEST: 
            return {
                ...state,
                isLoading: true,
                isEmpty: false
            }
        case FETCH_PRODUCTS_IN_CART_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isEmpty: true
            }
        case SET_PRODUCTS_IN_CART: 
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case GET_ITEMS_IDS_IN_CART: 
            return { 
                ...state,
                idsInCart: action.payload.length ? action.payload?.split(', ') : []
            }
        case SET_ITEMS_IDS_IN_CART: 
            action.payload.length ? localStorage.setItem('cart', action.payload) : localStorage.removeItem('cart');
            return {
                ...state,
                idsInCart: action.payload.length ? action.payload?.split(', ') : []
            }
        default:
            return state
    }
}
