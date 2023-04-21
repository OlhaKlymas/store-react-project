import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/Loader';
import CartEmpty from '../components/CartEmpty';
import CartList from '../components/CartList';
import '../scss/pages/cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsInCart } from '../redux/thunk/cart.thunk';

const CartPage = () => {
    const dispatch = useDispatch();
    
    const isLoading = useSelector(state => state.cartReducer.isLoading);
    const isEmpty = useSelector(state => state.cartReducer.isEmpty);
    const products = useSelector(state => state.cartReducer.products);
    const ids = useSelector(state => state.cartReducer.idsInCart);

    const getProducts = () => {
        dispatch(fetchProductsInCart(ids));
    }

    useEffect(() => {
        getProducts()
    }, [ids])

    return (
        <MainLayout>
            {isLoading ? <Loader /> : isEmpty ? <CartEmpty /> : <CartList products={products} /> }
        </MainLayout>
    )
}

export default CartPage;