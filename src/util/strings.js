const DEFAULT_STRING_LIMIT = 40;

export const limitStr = (str, len = DEFAULT_STRING_LIMIT) => {
    if (!str) {
        return str;
    }

    if (str.length <= len) {
        return str;
    }

    return `${str.slice(0, len)}...`;
};
