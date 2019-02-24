import {getLocalSession} from '../helpers/localStorage/session';
import {getRequest} from './rest/rest';
import {DEFAULT_DOWNLOAD_QUESTION_AMOUNT} from '../selectors/questions';

/**
 * Download list of questions from certain category
 *
 * API does not allow to upload more then 50 questions
 *
 * Response codes:
 * Code 0: Success Returned results successfully.
 * Code 1: No Results Could not return results.
 * Code 2: Invalid Parameter Contains an invalid parameter.
 * Code 3: Token Not Found Session Token does not exist.
 * Code 4: Token Empty Session Token has returned all possible questions for the specified query
 *
 * More details on https://opentdb.com/api_config.php
 *
 * @param categoryId
 * @param amount
 * @return {Promise}
 */
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
