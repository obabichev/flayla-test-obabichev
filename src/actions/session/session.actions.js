import {SET_SESSION_TOKEN_ACTION} from './session.types';
import {createAction} from '../../util/actions';

export const setSessionTokenAction = (session) => createAction(
    SET_SESSION_TOKEN_ACTION,
    {session}
);
