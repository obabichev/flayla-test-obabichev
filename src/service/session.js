import {getRequest} from './rest/rest';
import {getLocalSession} from '../helpers/localStorage/session';
export const retrieveSessionTokenService = async () => {
    const params = {
        command: 'request'
    };
    return getRequest('/api_token.php', params)
        .then(data => {
            return {token: data.token};
        });
};

export const resetSessionTokenService = async () => {
    const {token} = getLocalSession();
    const params = {
        command: 'reset',
        token
    };
    return getRequest('/api_token.php', params);
};
