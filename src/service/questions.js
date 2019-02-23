import {getLocalSession} from '../helpers/localStorage/session';
import {getRequest} from './rest/rest';
import {DEFAULT_DOWNLOAD_QUESTION_AMOUNT} from '../selectors/questions';

export const getQuestionsListService = (categoryId, amount = DEFAULT_DOWNLOAD_QUESTION_AMOUNT) => {
    const {token} = getLocalSession();

    const params = {
        category: categoryId,
        amount,
        token
    };

    return getRequest('/api.php', params);
};

export const getGlobalQuestionsCountService = () => {
    return getRequest('/api_count_global.php');
};
