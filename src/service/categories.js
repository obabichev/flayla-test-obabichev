import {getRequest} from './rest/rest';

export const getCategoriesListService = async () => {
    return getRequest('/api_category.php')
        .then(data => data['trivia_categories']);
};
