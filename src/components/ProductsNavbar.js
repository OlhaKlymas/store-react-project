import InputSearch from '../components/InputSearch';
import InputRadio from '../components/InputRadio';
import Tabs from '../components/Tabs';

const ProductsNavbar = (props) => {
    return (
        <>
            <form className='navbar'>
                <div className='navbar__row'>
                    <div className='navbar__search'>
                        <InputSearch
                            placeholder="Enter product name..."
                            value={props.searched || ''}
                            changeSearchInput={props.changeSearchInput}
                        />
                    </div>
                    <div className='navbar__sort'>
                        <InputRadio 
                            label='alphabet'
                            name='sort-product'
                            value='title'
                            checked={props.sorted === 'title'}
                            changeRadioInput={props.changeSort}
                        />
                        <InputRadio 
                            label='price'
                            name='sort-product'
                            value='price'
                            checked={props.sorted === 'price'}
                            changeRadioInput={props.changeSort}
                        />
                    </div>
                </div>
                <div className='navbar__filter'>
                    <Tabs 
                        selectCategory={props.selectCategory} 
                        selectedCategory={props.selectedCategory}
                    />
                </div>
            </form>
        </>
    )
}

export default ProductsNavbar;