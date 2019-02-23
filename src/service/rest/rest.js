const baseUrl = 'https://opentdb.com';

const request = ({url, method, body, params}) => {

    const fullUrl = `${url}?${joinParams(params)}`;
    console.log('[obabichev] fullUrl', fullUrl);

    return fetch(fullUrl, {
        method,
        body: JSON.stringify(body),
        headers: {},
    })
        .then(response => {
            // if (response.status !== 200 && response.status !== 201) {
            //     throw networkErrorException(response.status, response.statusText);
            // }

            return response.json();
        })
        .then((result) => waitPromise(result));
};

const joinParams = params => {
    console.log('[obabichev] params', params);
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
};

const waitPromise = (result) => new Promise(r => setTimeout(() => r(result), 1));

export const getRequest = async (path, params = {}) => {
    const url = `${baseUrl}${path}`;
    return request({url, method: 'get', params});
};