import {SET_QUESTIONS_LIST_BY_CATEGORY_ID} from '../actions/questions/questions.types';
export const questions = (state = {}, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_QUESTIONS_LIST_BY_CATEGORY_ID: {
            const {questions, categoryId} = payload;

            return {
                ...state,
                [categoryId]: [...(state[categoryId] || []), ...questions]
            };
        }
        default: {
            return state;
        }
    }
};
