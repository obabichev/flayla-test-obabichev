import {SET_GLOBAL_QUESTION_COUNTS} from './questionsCount.types';
import {createAction} from '../../util/actions';

export const setGlobalQuestionCounts = (questionCounts) => createAction(
    SET_GLOBAL_QUESTION_COUNTS,
    {questionCounts}
);

