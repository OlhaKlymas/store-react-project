import imageBucket from './../images/bucket.svg';
import Image from './Image';
import Tooltip from './Tooltip';
import { changeItemsIdsInCart } from '../redux/thunk/cart.thunk';
import { useSelector, useDispatch } from 'react-redux';
import { setNotificationAction } from '../redux/actions/notification.action';
import { useState, useEffect } from 'react';

const Product = () => {
    const dispatch = useDispatch();

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = useSelector(state => state.productReducer.product);
    const ids = useSelector(state => state.cartReducer.idsInCart);

    const showNotification = (text) => {
        dispatch(setNotificationAction(text));
    }

    const changeItemsInCart = (id, event) => {
        dispatch(changeItemsIdsInCart(id, event, ids))
    }
    
    useEffect(() => {
        product.id && setIsAddedToCart(ids.includes(product.id.toString()));
    }, [product.id, ids])

    return (
        <>
            { product && Object.keys(product).length !== 0 ? 
                <div data-id={product.id} className="product">
                    <div className='product__column product__image'>
                        <Image 
                            src={product.image}
                            alt={product.title}
                        />
                        <div className='product__badge'>{product.category}</div>
                    </div>
                    <div className="product__column product__info">
                        <div className='product__top'>
                            <h1 className='product__title'>{product.title}</h1>                    
                            <span 
                                className={isAddedToCart ? "product__delete" : "product__delete hidden"}
                                onClick={() => {
                                    setIsAddedToCart(false)
                                    changeItemsInCart(product.id, 'remove')
                                    showNotification(`${product.title} was removed from cart`)
                                }}
                            > 
                                <Image 
                                    src={imageBucket}
                                    alt='bucket'
                                />
                            </span>
                        </div>           
                        <p className="product__description">{product.description}</p>
                        <div className='product__row'>
                            <div className="product__price">
                                <span className='product__new-price'>
                                    {product.price + ' $'}
                                </span>
                            </div>
                            <button className={isAddedToCart ? "btn btn--disabled" : "btn"}
                                onClick={() => {
                                    setIsAddedToCart(true)
                                    changeItemsInCart(product.id, 'add')
                                    showNotification(`${product.title} was added to cart`)
                                }}
                            >
                                <span className="btn__text">Buy</span>
                                {isAddedToCart && <Tooltip message='The product has already existed in the cart' />}
                            </button>
                        </div>
                    </div> 
                </div> : ''
            }
        </>
    )
}

export default Product;