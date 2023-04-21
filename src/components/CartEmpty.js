import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <div className='cart-list cart-list--empty'>
            <p>Your cart is empty</p>
            <Link to='/products' className='btn'>
                <span className='cart-list__btn btn__text'>Go shopping!</span>
            </Link>
        </div>
    )
}

export default CartEmpty;