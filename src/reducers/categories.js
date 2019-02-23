import {SET_CATEGORIES_LIST_ACTION} from '../actions/categories.types';
export const categories = (state = [], action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CATEGORIES_LIST_ACTION: {
            return payload.categories;
        }
        default: {
            return state;
        }
    }

};