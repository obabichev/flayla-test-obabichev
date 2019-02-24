import {getRequest} from './rest/rest';

/**
 * Service to upload list of all categories
 */
export const getCategoriesListService = async () => {
    return getRequest('/api_category.php')
        .then(data => data['trivia_categories']);
};
