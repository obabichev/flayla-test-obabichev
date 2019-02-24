const BASE_URL = 'https://opentdb.com';

export const getRequest = async (path, params = {}) => {
    const url = `${BASE_URL}${path}`;
    return request({url, method: 'get', params});
};

const request = ({url, method, body, params}) => {

    const fullUrl = `${url}?${joinParams(params)}`;

    return fetch(fullUrl, {
        method,
        body: JSON.stringify(body),
        headers: {}
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Request ${url}?... failed with status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            throw new Error(`Request ${url}?... failed.`)
        });
};

const joinParams = params => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
};
