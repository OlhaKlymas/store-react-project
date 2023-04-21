import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Notification from '../components/Notification';
import MainLayout from '../layouts/MainLayout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/thunk/product.thunk';
import { useEffect } from 'react';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const errorMessage = `It seems that such a product with id ${id} does not exist`;

    const isLoading = useSelector(state => state.productReducer.isLoading);
    const isError = useSelector(state => state.productReducer.isError);
    
    const getProduct = () => {
        dispatch(fetchProduct(id))
    }

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <MainLayout>
            {isLoading ? <Loader /> : isError ? <Error message={errorMessage} /> : 
            <>
                <Product/>
                <Notification />
            </>}
        </MainLayout>        
    )
}

export default ProductPage;