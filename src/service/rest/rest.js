const baseUrl = 'https://opentdb.com';

const request = ({url, method, body, params}) => {

    const fullUrl = `${url}?${joinParams(params)}`;

    return fetch(fullUrl, {
        method,
        body: JSON.stringify(body),
        headers: {},
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Request ${url}?... failed with status ${response.status}`)
            }
            return response.json();
        })
        // .then((result) => waitPromise(result))
        .catch(error => {
            throw new Error(`Request ${url}?... failed.`)
        });
};

const joinParams = params => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
};

/**
 * This promised is useful to test behaviour with slow internet connection
 * @param result
 */
const waitPromise = (result) => new Promise(r => setTimeout(() => r(result), 500));

export const getRequest = async (path, params = {}) => {
    const url = `${baseUrl}${path}`;
    return request({url, method: 'get', params});
};