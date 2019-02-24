import {createSelector} from 'reselect';
import {HORIZONTAL_LOADER_ID} from '../actions/loading.constants';

const loaderIdPropsSelector = (state, {loaderId = HORIZONTAL_LOADER_ID}) => loaderId;

const loadingSelector = state => state.loading;

export const isLoadingSelector = createSelector(
    [loaderIdPropsSelector, loadingSelector],
    (loaderId, loading) => {
        return !!loading[loaderId];
    }
);

