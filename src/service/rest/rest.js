const baseUrl = 'https://opentdb.com';

const request = ({url, method, body, params}) => {

    const fullUrl = `${url}?${joinParams(params)}`;

    return fetch(fullUrl, {
        method,
        body: JSON.stringify(body),
        headers: {},
    })
        .then(response => {
            return response.json();
        })
        .then((result) => waitPromise(result));
};

const joinParams = params => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
};

const waitPromise = (result) => new Promise(r => setTimeout(() => r(result), 500));

export const getRequest = async (path, params = {}) => {
    const url = `${baseUrl}${path}`;
    return request({url, method: 'get', params});
};