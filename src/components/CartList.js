import CartTile from './CartTile';

const CartList = (props) => {
    return (
        <ul className='cart-list'>
            <p>55555</p>
            {props.products.map(product => <CartTile key={product.id} product={product} />)}
        </ul>
    )
}

export default CartList;