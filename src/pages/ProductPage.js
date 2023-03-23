import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Notification from '../components/Notification';
import MainLayout from '../layouts/MainLayout';
import { fetchProduct } from '../scripts/api';

const ProductPage = () => {
    const { id } = useParams();
    const errorMessage = `It seems that such a product with id ${id} does not exist`;
    
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [notification, setNotification] = useState('');

    const getProduct = () => {
        fetchProduct(id)
            .then(res => {
                setProduct(res);
                setIsLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }

    const showNotification = (text) => {
        setNotification(text);
    }

    useEffect(() => {
        getProduct();
    }, [id])

    return (
        <MainLayout>
            {isLoading ? <Loader /> : isError ? <Error message={errorMessage} /> : 
            <>
                <Product product={product} showNotification={showNotification} />
                <Notification message={notification} />
            </>}
        </MainLayout>        
    )
}

export default ProductPage;