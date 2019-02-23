import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from '../../reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunk,
];

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            ...middleware
        ))
);

export const Store = (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);
