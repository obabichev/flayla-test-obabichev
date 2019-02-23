import {SET_GLOBAL_QUESTION_COUNTS} from './questionsCount.types';

export const setGlobalQuestionCounts = (questionCounts) => ({
    type: SET_GLOBAL_QUESTION_COUNTS,
    payload: {
        questionCounts
    }
});
