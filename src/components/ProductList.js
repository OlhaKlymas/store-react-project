import ProductTile from './ProductTile';

const ProductList = (props) => {
    const isEmpty = props.products && props.products.length === 0

    return (
        <>
            {isEmpty ? 
            <div className='product-list product-list--empty'><span>Empty list</span></div> : 
            <ul className='product-list'>
                {props.products.map(product => product.price !== '0.0' &&
                    <ProductTile key={product.id} product={product} showNotification={props.showNotification} />)}
            </ul>}
        </>
    )
}

export default ProductList;