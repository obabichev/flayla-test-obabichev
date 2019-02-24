import {HORIZONTAL_LOADER_ID} from '../actions/loading/loading.constants';
import {loadingEndAction, loadingStartAction} from '../actions/loading/loading.actions';
import {errorAction} from '../actions/error/error.actions';

export const loadingActionWrapper = (action, loaderId = HORIZONTAL_LOADER_ID) => dispatch => {
    return Promise.resolve()
        .then(() => dispatch(loadingStartAction(loaderId)))
        .then(() => dispatch(action))
        .then(() => dispatch(loadingEndAction(loaderId)))
};

export const errorActionWrapper = (action) => dispatch => {
    return Promise.resolve()
        .then(() => dispatch(action))
        .catch(error => dispatch(errorAction(error)))
};

export const errorLoadingActionWrapper = (action, loaderId = HORIZONTAL_LOADER_ID) =>
    loadingActionWrapper(errorActionWrapper(action), loaderId);

export const createAction = (type, payload = {}) => ({
    type,
    payload
});
