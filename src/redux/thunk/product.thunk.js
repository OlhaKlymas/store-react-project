import {
    fetchProductRequest, 
    fetchProductSuccess, 
    fetchProductFailure
} from "../actions/product.action";
import { fetchProductAPIRequest } from "../../scripts/api";

export const fetchProduct = (id) => (dispatch) => {
    dispatch(fetchProductRequest());

    return fetchProductAPIRequest(id)
        .then(response => dispatch(fetchProductSuccess(response)))
        .catch(error => dispatch(fetchProductFailure(error)))
}
