import {SET_SESSION_TOKEN_ACTION} from './session.types';

export const setSessionTokenAction = (session) => ({
    type: SET_SESSION_TOKEN_ACTION,
    payload: {
        session
    }
});
