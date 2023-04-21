import imageBucket from './../images/bucket.svg';
import Image from './Image';
import Tooltip from './Tooltip';
import { changeItemsIdsInCart } from '../redux/thunk/cart.thunk';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const dispatch = useDispatch();
    const ids = useSelector(state => state.cartReducer.idsInCart);
    
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const changeItemsInCart = (id, event) => {
        dispatch(changeItemsIdsInCart(id, event, ids))
    }

    useEffect(() => {
        props.product.id && setIsAddedToCart(ids.includes(props.product.id.toString()));
    }, [props.product.id, ids])

    return (
        <div data-id={props.product.id} className="product-list__item tile">
            <div className="tile__link">
                <span className="tile__top">
                    {props.product.category && <span className="tile__badge tile__badge--new">{props.product.category}</span>}
                    <span 
                        className={isAddedToCart ? "tile__delete" : "tile__delete hidden"}
                        onClick={() => {
                            setIsAddedToCart(false)
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
                <Link to={`/products/${props.product.id}`} className="tile__image">
                    <Image 
                        src={props.product.image}
                        alt={props.product.title}
                    />
                </Link>
                <Link to={`/products/${props.product.id}`} className="tile__title">
                    {props.product.title}
                </Link>
            </div>
            <div className="tile__info">
                <span className="tile__price">
                    <span className="tile__new-price">{props.product.price + ' $'}</span>
                </span>
                <button className={isAddedToCart ? "btn btn--disabled" : "btn"}
                    onClick={() => {
                        setIsAddedToCart(true)
                        changeItemsInCart(props.product.id, 'add')
                        props.showNotification(`${props.product.title} was added to cart`)
                    }}
                >
                    <span className="btn__text">Buy</span>
                    {isAddedToCart && <Tooltip message='The product has already existed in the cart' />}
                </button>
            </div>
        </div>
    )
}

export default Product;