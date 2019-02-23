import {getCategoriesListService} from '../service/categories';
import {setCategoriesListAction} from './categories.actions';

export const getCategoriesListThunk = () => dispatch => {
    return getCategoriesListService()
        .then(categories => {
            console.log('[obabichev] categories', JSON.stringify(categories));
            dispatch(setCategoriesListAction(categories));
        });
};
