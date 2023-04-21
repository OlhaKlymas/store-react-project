import { useState, useEffect } from 'react';
import { memo } from "react";
import { fetchCategoriesAPIRequest } from '../scripts/api';

const ProductTabs = memo((props) => {
    const [categories, setCategories] = useState(['all']);

    useEffect(() => {
        fetchCategoriesAPIRequest().then((res) => {
            setCategories(['all', ...res])
        });
    }, [])

    return (
        <>
            {categories && categories.length > 1 ? 
                <ul className='tabs'>
                    {categories.map((category, index) => {
                        return (
                            <button 
                                type='button'
                                key={index}
                                className={category === props.selectedCategory ? 'tabs__item tabs__item--active' : 'tabs__item'}
                                onClick={() => props.selectCategory(category)}
                            >
                                {category}
                            </button>
                        )
                    })}
                </ul> : ''}
        </>
        
    )
}, (prevProps, nextProps) => prevProps.selectedCategory === nextProps.selectedCategory)

export default ProductTabs;