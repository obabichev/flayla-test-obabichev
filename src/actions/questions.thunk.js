import {getQuestionsListService} from '../service/questions';

export const getQuestionsListThunk = (categoryId) => dispatch => {
    return getQuestionsListService(categoryId)
        .then(questions => {
            console.log('[obabichev] questions', questions);
        });
};
