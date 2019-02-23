import {retrieveSessionTokenService} from '../service/session';
import {setSessionTokenAction} from './session.actions';
import {getLocalSession, removeLocalSession, setLocalSession} from '../helpers/localStorage/session';

export const retrieveSessionTokenThunk = () => dispatch => {

    const storedSession = getLocalSession();
    console.log('[obabichev] storedSession', storedSession);
    // removeLocalSession();

    if (storedSession) {
        dispatch(setSessionTokenAction(storedSession));
        return;
    }

    //TODO reset session

    return retrieveSessionTokenService()
        .then(session => {
            console.log('[obabichev] downloaded session', session);
            setLocalSession(session);
            dispatch(setSessionTokenAction(session))
        })
};
