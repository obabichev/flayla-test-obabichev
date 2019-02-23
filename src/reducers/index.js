import {combineReducers} from 'redux';
import {categories} from './categories';
import {session} from './session';
import {questions} from './questions';
import {questionCounts} from './questionCounts';

export const rootReducer = combineReducers({
    session,
    categories,
    questions,
    questionCounts
});