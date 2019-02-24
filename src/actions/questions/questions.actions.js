import {SET_QUESTIONS_LIST_BY_CATEGORY_ID} from './questions.types';
import {createAction} from '../../util/actions';

export const setQuestionsListByCategoryId = (questions, categoryId) => createAction(
    SET_QUESTIONS_LIST_BY_CATEGORY_ID,
    {questions, categoryId}
);
