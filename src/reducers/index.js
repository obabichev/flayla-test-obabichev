import {combineReducers} from 'redux';
import {categories} from './categories';
import {session} from './session';
import {questions} from './questions';

export const rootReducer = combineReducers({
    session,
    categories,
    questions
});