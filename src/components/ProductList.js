import ProductTile from './ProductTile';

const ProductList = (props) => {
    return (
        <ul className='product-list'>
            {props.products.map(product => product.price !== '0.0' && <ProductTile key={product.id} product={product} showNotification={props.showNotification} />)}
        </ul>
    )
}

export default ProductList;