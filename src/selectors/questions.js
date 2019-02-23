import {createSelector} from 'reselect';
import {categoryIdPropsSelector} from './categories';

export const questionsByCategoryIdsSelector = state => state.questions;

export const questionsByCategoryIdSelector = createSelector(
    categoryIdPropsSelector,
    questionsByCategoryIdsSelector,
    (categoryId, questions) => {
        return questions[categoryId] || [];
    }
);
