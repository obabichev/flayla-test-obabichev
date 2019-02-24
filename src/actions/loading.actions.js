import {HORIZONTAL_LOADER_ID, LOADING_END_ACTION, LOADING_START_ACTION} from './loading.constants';

export const loadingStartAction = (loaderId = HORIZONTAL_LOADER_ID) => ({
    type: LOADING_START_ACTION,
    payload: {loaderId}
});

export const loadingEndAction = (loaderId = HORIZONTAL_LOADER_ID) => ({
    type: LOADING_END_ACTION,
    payload: {loaderId}
});
