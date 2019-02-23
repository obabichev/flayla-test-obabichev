import {getRequest} from './rest/rest';
export const retrieveSessionTokenService = async () => {
    const params = {
        command: 'request'
    };
    return getRequest('/api_token.php', params)
        .then(data => {
            console.log('[obabichev] retrieveSessionTokenService.data', data);
            return {token: data.token};
        });
};

export const resetSessionTokenService = async () => {

};
