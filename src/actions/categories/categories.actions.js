import {SET_CATEGORIES_LIST_ACTION} from './categories.types';
import {createAction} from '../../util/actions';

export const setCategoriesListAction = (categories) => createAction(
    SET_CATEGORIES_LIST_ACTION, {categories}
);
