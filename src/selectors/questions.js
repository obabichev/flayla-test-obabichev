import {createSelector} from 'reselect';
import {categoryIdPropsSelector} from './categories';


export const DEFAULT_DOWNLOAD_QUESTION_AMOUNT = 20;


export const questionsByCategoryIdsSelector = state => state.questions;

export const questionCountsSelector = state => state.questionCounts;

export const questionsByCategoryIdSelector = createSelector(
    categoryIdPropsSelector,
    questionsByCategoryIdsSelector,
    (categoryId, questions) => {
        return questions[categoryId] || [];
    }
);

export const totalQuestionsCountByCategoryIdSelector = createSelector(
    [categoryIdPropsSelector, questionCountsSelector],
    (categoryId, questionCounts) => {
        return questionCounts['categories'][categoryId]['total_num_of_verified_questions'];
    }
);

export const questionsToDownloadCountByCategoryIdSelector = createSelector(
    [questionsByCategoryIdSelector, totalQuestionsCountByCategoryIdSelector],
    (questions, totalQuestionsCount) => {
        return Math.min(totalQuestionsCount - questions.length, DEFAULT_DOWNLOAD_QUESTION_AMOUNT);
    }
);
