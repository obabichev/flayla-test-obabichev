import {SET_SESSION_TOKEN_ACTION} from '../actions/session/session.types';
export const session = (state = null, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_SESSION_TOKEN_ACTION: {
            const {session} = payload;
            return session;
        }
        default:
            return state;
    }
};
