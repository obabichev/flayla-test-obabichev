import {ERROR_ACTION} from '../actions/error/error.constants';
import {setErrorAction} from '../actions/error/error.actions';

export const errorMiddleware = ({dispatch}) => next => (action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case ERROR_ACTION: {
            const {error} = payload;

            const message = error.message;
            dispatch(setErrorAction({message}));
            break;
        }
        default:
            return next(action);
    }
};
