import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductsNavbar from '../components/ProductsNavbar';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Notification from '../components/Notification';
import { fetchProducts } from '../redux/thunk/products.thunk';
import { useSelector, useDispatch } from 'react-redux';
import '../scss/pages/products.scss';
import { setNotificationAction } from '../redux/actions/notification.action';

const ProductListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const errorMessage = 'Sorry, something went wrong... Please, check your internet connection';

    const selectedCategory = useSelector(state => state.productsReducer.selectedCategory);
    const products = useSelector(state => state.productsReducer.products);
    const isLoading = useSelector(state => state.productsReducer.isLoading);
    const isError = useSelector(state => state.productsReducer.isError);
    const sorted = useSelector(state => state.productsReducer.sorted);
    const searched = useSelector(state => state.productsReducer.searched);

    const getProducts = () => {
        setSearchParamsToUrl();
        dispatch(fetchProducts(selectedCategory, searched, sorted))
    }

    const setSearchParamsToUrl = () => {
        if(searched && searched.trim() !== '') {
            searchParams.set('search', searched);
        } else {
            searchParams.delete('search');
        }

        if(selectedCategory !== 'all') {
            searchParams.set('category', selectedCategory);
        } else {
            searchParams.delete('category');
        }

        sorted && searchParams.set('sort', sorted);

        navigate({ search: searchParams.toString() });
    }
    
    const showNotification = (text) => {
        dispatch(setNotificationAction(text));
    }
    
    useEffect(() => {
        getProducts();
    }, [sorted, searched, selectedCategory])
    
    return (
        <MainLayout> 
            <>
                <ProductsNavbar 
                    selectedCategory={selectedCategory}
                    sorted={sorted}
                    searched={searched}
                />
                
                {isLoading ? <Loader /> : isError ? <Error message={errorMessage}/> :
                    <ProductList 
                        products={products}
                        showNotification={showNotification}
                    />
                }
                <Notification />
            </>
        </MainLayout>
    )
}

export default ProductListPage;