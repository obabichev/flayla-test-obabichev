import {resetSessionTokenService, retrieveSessionTokenService} from '../service/session';
import {setSessionTokenAction} from './session.actions';
import {getLocalSession, removeLocalSession, setLocalSession} from '../helpers/localStorage/session';

export const retrieveSessionTokenThunk = () => dispatch => {

    const storedSession = getLocalSession();

    if (storedSession) {
        return resetSessionTokenService()
            .then((data) => {
                dispatch(setSessionTokenAction(storedSession));
            })
    }

    return retrieveSessionTokenService()
        .then(session => {
            setLocalSession(session);
            dispatch(setSessionTokenAction(session))
        })
};
