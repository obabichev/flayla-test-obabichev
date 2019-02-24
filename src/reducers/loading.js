import {LOADING_END_ACTION, LOADING_START_ACTION} from '../actions/loading.constants';

export const loading = (state = {}, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case LOADING_START_ACTION: {
            const {loaderId} = payload;
            return {
                ...state,
                [loaderId]: true
            };
        }
        case LOADING_END_ACTION: {
            const {loaderId} = payload;
            return {
                ...state,
                [loaderId]: false
            };
        }
        default:
            return state;
    }
};
