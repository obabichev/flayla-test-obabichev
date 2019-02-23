import React, {Component} from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {QuestionDetailsComponent} from '../questions/QuestionDetailsComponent';
import {createBrowserHistory} from 'history';
import {PageNotFount} from './PageNotFount';
import {QuestionsScreenContainer} from '../../containers/questions/QuestionsScreenContainer';

export const history = createBrowserHistory();

export class MainRouter extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route exact path="/questions" component={QuestionsScreenContainer}/>
                <Route exact path="/">
                    <Redirect to="/questions"/>
                </Route>
                <Route exact path="/question" component={QuestionDetailsComponent}/>
                <Route component={PageNotFount}/>
            </Switch>
        </Router>;
    }
}