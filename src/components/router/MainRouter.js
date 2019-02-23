import React, {Component} from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {QuestionDetailsComponent} from '../questions/QuestionDetailsComponent';
import {PageNotFount} from './PageNotFount';
import {QuestionsScreenContainer} from '../../containers/questions/QuestionsScreenContainer';
import {history} from '../../helpers/history/history';

export class MainRouter extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route exact path="/questions" component={QuestionsScreenContainer}/>
                <Route exact path="/questions/:categoryId([\d]*)" component={QuestionsScreenContainer}/>
                <Route exact path="/">
                    <Redirect to="/questions"/>
                </Route>
                <Route exact path="/question/:questionId([\d]+)" component={QuestionDetailsComponent}/>
                <Route component={PageNotFount}/>
            </Switch>
        </Router>;
    }
}
