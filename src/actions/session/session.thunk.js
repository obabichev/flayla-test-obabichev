import {resetSessionTokenService, retrieveSessionTokenService} from '../../service/session';
import {setSessionTokenAction} from './session.actions';
import {getLocalSession, removeLocalSession, setLocalSession} from '../../helpers/localStorage/session';

/**
 * We are trying to get Token from local storage and update it,
 * if smth went wrong just download new token
 */
export const actualizeSessionTokenThunk = () => dispatch => {

    const storedSession = getLocalSession();

    if (storedSession) {
        return resetSessionTokenService()
            .then((data) => {
                // If we have problem with token (expired or smth else) just delete it and get new one
                if (data['response_code'] !== 0) {
                    removeLocalSession();
                    return dispatch(retrieveSessionTokenThunk());
                }
                dispatch(setSessionTokenAction(storedSession));
            })
    }

    return dispatch(retrieveSessionTokenThunk());
};

const retrieveSessionTokenThunk = () => dispatch => {
    return retrieveSessionTokenService()
        .then(session => {
            setLocalSession(session);
            dispatch(setSessionTokenAction(session))
        })
};
