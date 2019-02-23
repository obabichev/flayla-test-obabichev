import {getLocalSession} from '../helpers/localStorage/session';
import {getRequest} from './rest/rest';

const DEFAULT_QUESTION_AMOUNT = 5;

export const getQuestionsListService = (categoryId, amount = DEFAULT_QUESTION_AMOUNT) => {
    //https://opentdb.com/api.php?amount=2&category=13&token=a102e2152324d0ba5a278d7e9e96c41f07877341243dce415d5fc267c3a2da0d
    const session = getLocalSession();
    const {token} = session;

    const params = {
        category: categoryId,
        amount,
        token
    };

    return getRequest('/api.php', params);
};