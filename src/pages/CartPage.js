import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/Loader';
import Error from '../components/Error';
import CartTile from '../components/CartTile';
import { getCartItems } from '../scripts/cart';
import { fetchProduct } from '../scripts/api';
import '../scss/pages/cart.scss';

const CartPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const errorMessage = 'Sorry, something went wrong... Please, check your internet connection';

    const getProducts = () => {
        let ids = [];
        let allProducts = getCartItems();
        allProducts.map(id => {
            fetchProduct(id)
                .then(good => {
                    ids.push(good);
                    setProducts(ids);
                    setIsLoading(false);
                })
                .then()
                .catch(() => {
                    setIsError(true);
                    setIsLoading(false);
                });
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <MainLayout>
            {isLoading ? <Loader /> : isError ? <Error message={errorMessage} /> : 
                <ul className='cart-list'>
                    {products.map(product => <CartTile key={product.id} product={product} /> )}
                </ul>
            }
        </MainLayout>
    )
}

export default CartPage;