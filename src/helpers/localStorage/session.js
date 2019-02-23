const SESSION_LOCAL_STORAGE_KEY = 'session';

export const getLocalSession = () => {
    return JSON.parse(localStorage.getItem(SESSION_LOCAL_STORAGE_KEY));
};

export const setLocalSession = (session) => {
    localStorage.setItem(SESSION_LOCAL_STORAGE_KEY, JSON.stringify(session));
};

export const removeLocalSession = () => {
    localStorage.removeItem(SESSION_LOCAL_STORAGE_KEY);
};
