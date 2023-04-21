import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../constants/categories.constants';

export const fetchCategoriesRequest = (payload) => ({
    type: FETCH_CATEGORIES_REQUEST,
    payload
});

export const fetchCategoriesSuccess = (payload) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload
});

export const fetchCategoriesFailure = (payload) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload
});