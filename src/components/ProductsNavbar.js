import InputSearch from '../components/InputSearch';
import InputRadio from '../components/InputRadio';
import Tabs from '../components/Tabs';
import { setCategoryAction, setSearchedAction, setSortedAction } from '../redux/actions/products.action';
import { useDispatch } from 'react-redux';

const ProductsNavbar = (props) => {
    const dispatch = useDispatch();

    const changeSearchInput = (val) => {
        dispatch(setSearchedAction(val));
    }

    const selectCategory = (val) => {
        dispatch(setCategoryAction(val))
    }

    const changeSort = (val) => {
        dispatch(setSortedAction(val))
    }

    return (
        <>
            <form className='navbar'>
                <div className='navbar__row'>
                    <div className='navbar__search'>
                        <InputSearch
                            placeholder="Enter product name..."
                            value={props.searched || ''}
                            changeSearchInput={changeSearchInput}
                        />
                    </div>
                    <div className='navbar__sort'>
                        <InputRadio 
                            label='alphabet'
                            name='sort-product'
                            value='title'
                            checked={props.sorted === 'title'}
                            changeRadioInput={changeSort}
                        />
                        <InputRadio 
                            label='price'
                            name='sort-product'
                            value='price'
                            checked={props.sorted === 'price'}
                            changeRadioInput={changeSort}
                        />
                    </div>
                </div>
                <div className='navbar__filter'>
                    <Tabs 
                        selectCategory={selectCategory} 
                        selectedCategory={props.selectedCategory}
                    />
                </div>
            </form>
        </>
    )
}

export default ProductsNavbar;