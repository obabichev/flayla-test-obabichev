import {createSelector} from 'reselect';

export const categoryIdPropsSelector = (state, props) => props.categoryId;

export const categoriesSelector = (state) => state.categories;

export const categoriesSelectInputSelector = createSelector(
    categoriesSelector,
    (categories) => categories.map(({id, name}) => ({value: id, label: name}))
);
