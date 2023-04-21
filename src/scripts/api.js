export const fetchProductsAPIRequest = async (category) => {
    const commonUrl = category === 'all' ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${category}`;
    let response = await fetch(commonUrl);
    return response.json();
}

export const fetchProductAPIRequest = async (id) => {
    const commonUrl = `https://fakestoreapi.com/products/${id}`;
    let response = await fetch(commonUrl);
    return response.json();
}

export const fetchCategoriesAPIRequest = async () => {
    const commonUrl = 'https://fakestoreapi.com/products/categories';
    let response = await fetch(commonUrl);
    return response.json();
}
