import { combineReducers } from 'redux';
import { productsReducer } from './products.reducer';
import { productReducer } from './product.reducer';
import { categoriesReducer } from './categories.reducer';
import { notificationReducer } from './notification.reducer';
import { cartReducer } from './cart.reducer';

export const rootReducer = combineReducers({
    productsReducer,
    productReducer,
    categoriesReducer,
    cartReducer,
    notificationReducer
});
