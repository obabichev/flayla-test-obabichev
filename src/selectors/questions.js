import {createSelector} from 'reselect';
import {categoryIdPropsSelector} from './categories';
import _ from 'lodash';

export const DEFAULT_DOWNLOAD_QUESTION_AMOUNT = 20;


export const questionIdPropsSelector = (state, props) => props.questionId;

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
        return _.get(questionCounts, `categories.${categoryId}.total_num_of_verified_questions`, 0);
    }
);

export const questionsToDownloadCountByCategoryIdSelector = createSelector(
    [questionsByCategoryIdSelector, totalQuestionsCountByCategoryIdSelector],
    (questions, totalQuestionsCount) => {
        return Math.min(totalQuestionsCount - questions.length, DEFAULT_DOWNLOAD_QUESTION_AMOUNT);
    }
);

export const questionByIdSelector = createSelector(
    [questionIdPropsSelector, questionsByCategoryIdsSelector],
    (questionId, questions) => {
        return _.find(_.flatten(_.values(questions)), {id: questionId});
    }
);