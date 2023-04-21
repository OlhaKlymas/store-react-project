import { fetchProductAPIRequest } from '../../scripts/api';
import { fetchProductsInCartRequest, fetchProductsInCartFailure, setProductsInCartAction, setItemsIdsInCartAction } from '../actions/cart.action';

export const fetchProductsInCart = (ids) => (dispatch) => {
    dispatch(fetchProductsInCartRequest());
    let cartProducts = []

    let promise = new Promise(function(resolve, reject) {      
        if (ids.length !== 0) {
            ids.map(id => {
                return fetchProductAPIRequest(id)
                    .then(good => cartProducts.push(good))
            }).then(resolve(cartProducts))
        } else {
            reject(dispatch(fetchProductsInCartFailure()));
        }
    });    
    
    promise.then(res => dispatch(setProductsInCartAction(res)))
}

export const changeItemsIdsInCart = (id, event, ids) => (dispatch) => {
    let newCartItems = [...ids];
    id = id.toString();
    if (event === 'add') {
        newCartItems.push(id);
    } else if (event === 'remove') {
        newCartItems = newCartItems.filter(item => item !== id);
    }
    newCartItems = [...new Set(newCartItems)].join(', ');
    newCartItems.length ? localStorage.setItem('cart', newCartItems) : localStorage.removeItem('cart');
    dispatch(setItemsIdsInCartAction(newCartItems));
}
