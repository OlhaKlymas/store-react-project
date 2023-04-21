import {
    fetchCategoriesRequest, 
    fetchCategoriesSuccess, 
    fetchCategoriesFailure
} from "../actions/categories.action";
import { fetchCategoriesAPIRequest } from "../../scripts/api";

export const fetchCategories = (id) => (dispatch) => {
    dispatch(fetchCategoriesRequest());

    return fetchCategoriesAPIRequest(id)
        .then(response => dispatch(fetchCategoriesSuccess(response)))
        .catch(error => dispatch(fetchCategoriesFailure(error)))
}
