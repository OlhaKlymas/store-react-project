import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductsNavbar from '../components/ProductsNavbar';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Notification from '../components/Notification';
import { fetchProducts } from '../scripts/api';
import '../scss/pages/products.scss';

const ProductListPage = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const errorMessage = 'Sorry, something went wrong... Please, check your internet connection';

    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [sorted, setSorted] = useState(searchParams.get('sort'));
    const [searched, setSearched] = useState(searchParams.get('search'));
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [notification, setNotification] = useState('');

    const getProducts = () => {
        setSearchParamsToUrl();
        fetchProducts(selectedCategory)
            .then(goods => {
                goods = searched ? goods.filter(items => items.title.toLowerCase().includes(searched)) : goods;
                goods = sorted === 'price' ? goods.sort((a, b) => a.price - b.price) : sorted === 'title' ? goods.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1) : goods;
                setProducts(goods);
                setIsLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
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

    const changeSearchInput = (val) => {
        setSearched(val);
    }

    const selectCategory = (val) => {
        setSelectedCategory(val)
    }

    const changeSort = (val) => {
        setSorted(val)
    }

    const showNotification = (text) => {
        setNotification(text);
    }
    
    useEffect(() => {
        getProducts();
    }, [searched, selectedCategory, sorted])

    return (
        <MainLayout>
            {isLoading ? <Loader /> : isError ? <Error message={errorMessage}/> : 
            <>
                <ProductsNavbar 
                    changeSearchInput={changeSearchInput}
                    changeSort={changeSort}
                    selectCategory={selectCategory}
                    selectedCategory={selectedCategory}
                    sorted={sorted}
                    searched={searched}
                />
                <ProductList 
                    products={products}
                    showNotification={showNotification}
                />
                <Notification message={notification} />
            </>}
        </MainLayout>
    )
}

export default ProductListPage;