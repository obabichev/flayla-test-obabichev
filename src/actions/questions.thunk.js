import {getQuestionsListService} from '../service/questions';
import {setQuestionsListByCategoryId} from './questions.actions';
import {generateId} from '../util/id';

export const getQuestionsListThunk = (categoryId, amount) => dispatch => {
    return getQuestionsListService(categoryId, amount)
        .then(data => {
            const responseCode = data['response_code'];
            const questions = addIdsToQuestions(data['results']);

            if (responseCode !== 0) {
                throw new Error('smth went wrong with getting questions');
            }
            dispatch(setQuestionsListByCategoryId(questions, categoryId));
        });
};

const addIdsToQuestions = questions => questions.map(question => ({id: generateId(), ...question}));
