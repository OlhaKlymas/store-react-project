export const fetchProducts = async (category) => {
    const commonUrl = category === 'all' ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${category}`;
    let response = await fetch(commonUrl);
    return response.json();
}

export const fetchProduct = async (id) => {
    const commonUrl = `https://fakestoreapi.com/products/${id}`;
    let response = await fetch(commonUrl);
    return response.json();
}

export const fetchCategories = async () => {
    const commonUrl = 'https://fakestoreapi.com/products/categories';
    let response = await fetch(commonUrl);
    return response.json();
}
