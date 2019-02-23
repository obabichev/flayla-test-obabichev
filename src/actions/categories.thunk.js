import {getCategoriesListService} from '../service/categories';
import {setCategoriesListAction} from './categories.actions';

export const getCategoriesListThunk = () => dispatch => {
    return getCategoriesListService()
        .then(categories => {
            dispatch(setCategoriesListAction(categories));
        });
};
