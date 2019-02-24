import {ERROR_DEL_ACTION, ERROR_SET_ACTION} from '../actions/error/error.constants';

const defaultState = null;

export const error = (state = defaultState, action = {}) => {
    const {payload} = action;

    switch (action.type) {
        case ERROR_SET_ACTION: {
            return payload.error;
        }
        case ERROR_DEL_ACTION: {
            return defaultState;
        }
        default:
            return state;
    }
};
