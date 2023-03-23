export const getCartItems = () => {
    return localStorage.getItem('cart')?.split(', ') || [];
}

const setCartItems = (ids) => {
    ids.length ? localStorage.setItem('cart', ids.toString()) : localStorage.removeItem('cart');
}

export const changeCart = (id, event) => {
    let ids = getCartItems();
    let newCartItems = [...ids];
    id = id.toString();
    if (event === 'add') {
        ids = ids.concat(id);
    } else if (event === 'remove') {
        ids = ids.filter(item => item !== id);
    }
    newCartItems = [...new Set([...ids])].join(', ');
    setCartItems(newCartItems)
    return newCartItems;
}
