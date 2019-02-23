import React, {Component} from 'react';
import {QuestionDetailsCardContainer} from '../../containers/questions/QuestionDetailsCardContainer';
import _ from 'lodash';

export class QuestionDetailsComponent extends Component {

    render() {
        const questionId = parseInt(_.get(this.props, 'match.params.questionId'));

        return <div>
            <QuestionDetailsCardContainer
                questionId={questionId}/>
        </div>;
    }

}
