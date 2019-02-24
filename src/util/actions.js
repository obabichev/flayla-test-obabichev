// import {loadingIds} from '../actions/loading.constants';
import {HORIZONTAL_LOADER_ID} from '../actions/loading.constants';
import {loadingEndAction, loadingStartAction} from '../actions/loading.actions';
// import {loadingEndAction, loadingStartAction} from '../actions/loading.actions';
// import {errorAction} from '../core/actions/error.actions';

export const loadingActionWrapper = (action, loaderId = HORIZONTAL_LOADER_ID) => dispatch => {
    return Promise.resolve()
        .then(() => dispatch(loadingStartAction(loaderId)))
        .then(() => dispatch(action))
        .then(() => dispatch(loadingEndAction(loaderId)))
};

// export const errorActionWrapper = (action) => dispatch => {
//     return Promise.resolve()
//         .then(() => dispatch(action))
//         .catch(error => dispatch(errorAction(error)))
// };
//
// export const errorLoadingActionWrapper = (action) => loadingActionWrapper(errorActionWrapper(action));
