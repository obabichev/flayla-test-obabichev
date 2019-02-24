import {SET_GLOBAL_QUESTION_COUNTS} from '../actions/questions/questionsCount.types';

export const questionCounts = (state = null, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_GLOBAL_QUESTION_COUNTS: {
            const {questionCounts} = payload;
            return questionCounts;
        }
        default:
            return state;
    }
};