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
        <div data-id={props.product.id} className="product">
            <div className='product__column product__image'>
                <Image 
                    src={props.product.image}
                    alt={props.product.title}
                />
                <div className='product__badge'>{props.product.category}</div>
            </div>
            <div className="product__column product__info">
                <div className='product__top'>
                    <h1 className='product__title'>{props.product.title}</h1>                    
                    <span 
                        className={isAddedToCart ? "product__delete" : "product__delete hidden"}
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
                </div>           
                <p className="product__description">{props.product.description}</p>
                <div className='product__row'>
                    <div className="product__price">
                        <span className='product__new-price'>
                            {props.product.price + ' $'}
                        </span>
                    </div>
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
        </div>
    )
}

export default Product;