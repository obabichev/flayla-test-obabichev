import {SET_QUESTIONS_LIST_BY_CATEGORY_ID} from './questions.types';
export const setQuestionsListByCategoryId = (questions, categoryId) => ({
    type: SET_QUESTIONS_LIST_BY_CATEGORY_ID,
    payload: {
        questions,
        categoryId
    }
});