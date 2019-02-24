import {getRequest} from './rest/rest';
import {getLocalSession} from '../helpers/localStorage/session';

/**
 * Get new access token
 *
 * Token is used to avoid receiving the same questions twice
 *
 * Session Tokens will be deleted after 6 hours of inactivity.
 */
export const retrieveSessionTokenService = async () => {
    const params = {
        command: 'request'
    };
    return getRequest('/api_token.php', params)
        .then(data => {
            return {token: data.token};
        });
};

/**
 * Token might be reset to start receiving questions again
 */
export const resetSessionTokenService = async () => {
    const {token} = getLocalSession();
    const params = {
        command: 'reset',
        token
    };
    return getRequest('/api_token.php', params);
};
