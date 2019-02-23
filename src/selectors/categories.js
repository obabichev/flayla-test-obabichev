import {createSelector} from 'reselect';

export const categoriesSelector = (state) => state.categories;

export const categoriesSelectInputSelector = createSelector(
    categoriesSelector,
    (categories) => categories.map(({id, name}) => ({value: id, label: name}))
);
