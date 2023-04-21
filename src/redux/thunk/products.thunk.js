import { 
    fetchProductsRequest, 
    fetchProductsSuccess, 
    fetchProductsFailure
} from "../actions/products.action";
import { fetchProductsAPIRequest } from "../../scripts/api";

export const fetchProducts = (selectedCategory, searched, sorted) => (dispatch) => {
    dispatch(fetchProductsRequest());

    return fetchProductsAPIRequest(selectedCategory)
        .then(goods => {
            goods = searched ? goods.filter(items => items.title.toLowerCase().includes(searched)) : goods;
            goods = sorted === 'price' ? goods.sort((a, b) => a.price - b.price) : sorted === 'title' ? goods.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1) : goods;
            dispatch(fetchProductsSuccess(goods))
        })
        .catch(error => dispatch(fetchProductsFailure(error)))
}
