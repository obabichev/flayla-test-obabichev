const baseUrl = 'https://opentdb.com';

const request = ({url, method, body}) => {
    let user = JSON.parse(localStorage.getItem('user'));

    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
        },
    })
        .then(response => {
            // if (method === 'delete') {
            //     return null;
            // }
            //
            // if (response.status !== 200 && response.status !== 201) {
            //     throw networkErrorException(response.status, response.statusText);
            // }

            return response.json();
        })
        .then((result) => waitPromise(result));
};

const waitPromise = (result) => new Promise(r => setTimeout(() => r(result), 1));

export const getRequest = async (path) => {
    const url = `${baseUrl}${path}`;
    return request({url, method: 'get'});
};