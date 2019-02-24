import {HORIZONTAL_LOADER_ID, LOADING_END_ACTION, LOADING_START_ACTION} from './loading.constants';
import {createAction} from '../../util/actions';

export const loadingStartAction = (loaderId = HORIZONTAL_LOADER_ID) => createAction(
    LOADING_START_ACTION,
    {loaderId}
);


export const loadingEndAction = (loaderId = HORIZONTAL_LOADER_ID) => createAction(
    LOADING_END_ACTION,
    {loaderId}
);
