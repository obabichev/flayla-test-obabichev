import {SET_CATEGORIES_LIST_ACTION} from './categories.types';

export const setCategoriesListAction = (categories) => ({
    type: SET_CATEGORIES_LIST_ACTION,
    payload: {categories}
});
