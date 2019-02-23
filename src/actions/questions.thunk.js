import {getQuestionsListService} from '../service/questions';
import {setQuestionsListByCategoryId} from './questions.actions';

export const getQuestionsListThunk = (categoryId) => dispatch => {
    return getQuestionsListService(categoryId)
        .then(data => {
            const responseCode = data['response_code'];
            const questions = data['results'];

            if (responseCode !== 0) {
                throw new Error('smth went wrong with getting questions');
            }
            dispatch(setQuestionsListByCategoryId(questions, categoryId));
        });
};
