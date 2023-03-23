import imageBucket from './../images/bucket.svg';
import Image from './Image';
import Tooltip from './Tooltip';
import { changeCart, getCartItems } from './../scripts/cart';
import { useState, useEffect } from 'react';

const Product = (props) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        let ids = getCartItems();
        setIsAddedToCart(ids.includes(props.product.id.toString()));
    }, [props.product.id])

    return (
        <div data-id={props.product.id} className="product-list__item tile">
            <div className="tile__link">
                <span className="tile__top">
                    {props.product.category && <span className="tile__badge tile__badge--new">{props.product.category}</span>}
                    <span 
                        className={isAddedToCart ? "tile__delete" : "tile__delete hidden"}
                        onClick={() => {
                            setIsAddedToCart(false)
                            changeCart(props.product.id, 'remove')
                            props.showNotification(`${props.product.title} was removed from cart`)
                        }}
                    > 
                        <Image 
                            src={imageBucket}
                            alt='bucket'
                        />
                    </span>
                </span>
                <a href={`/products/${props.product.id}`} className="tile__image">
                    <Image 
                        src={props.product.image}
                        alt={props.product.title}
                    />
                </a>
                <a href={`/products/${props.product.id}`} className="tile__title">
                    {props.product.title}
                </a>
            </div>
            <div className="tile__info">
                <span className="tile__price">
                    <span className="tile__new-price">{props.product.price + ' $'}</span>
                </span>
                <button className={isAddedToCart ? "btn btn--disabled" : "btn"}
                    onClick={() => {
                        setIsAddedToCart(true)
                        changeCart(props.product.id, 'add')
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