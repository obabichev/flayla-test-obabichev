import {combineReducers} from 'redux';
import {categories} from './categories';
import {session} from './session';
import {questions} from './questions';
import {questionCounts} from './questionCounts';
import {loading} from './loading';

export const rootReducer = combineReducers({
    session,
    loading,
    categories,
    questions,
    questionCounts
});