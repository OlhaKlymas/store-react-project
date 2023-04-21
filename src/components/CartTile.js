import imageBucket from './../images/bucket.svg';
import Image from './Image';
import { changeItemsIdsInCart } from '../redux/thunk/cart.thunk';
import { useSelector, useDispatch } from 'react-redux';

const CartTile = (props) => {
    const dispatch = useDispatch();
    const ids = useSelector(state => state.cartReducer.idsInCart);

    const changeItemsInCart = (id, event) => {
        dispatch(changeItemsIdsInCart(id, event, ids))
    }

    console.log(props)

    return (
        <li data-id={props.product.id} className="cart-list__item cart-tile">
            <a href={`/products/${props.product.id}`} className="cart-tile__link">
                <span className="cart-tile__image">
                    <Image 
                        src={props.product.image}
                        alt={props.product.title}
                    />
                </span>
                <span className="cart-tile__info">
                    <span className='cart-tile__row'>                        
                        <span className="cart-tile__title">
                            {props.product.title}
                        </span>
                        <span 
                            className="cart-tile__delete"
                            onClick={(e) => {
                                e.preventDefault();
                                changeItemsInCart(props.product.id, 'remove')
                                props.showNotification(`${props.product.title} was removed from cart`)
                            }}
                        > 
                            <Image 
                                src={imageBucket}
                                alt='bucket'
                            />
                        </span>
                    </span>
                    {props.product.category && <span className="cart-tile__badge cart-tile__badge--new">{props.product.category}</span>}
                    <span className="cart-tile__price">
                        <span className="cart-tile__new-price">{props.product.price + ' $'}</span>
                    </span>
                </span>
            </a>
        </li>
    )
}

export default CartTile;