import React, {Component} from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import './QuestionDetailsCardComponent.css'
import {Icon} from '../basic/Icon';
import {navigateBack} from '../../helpers/history/history';

export class QuestionDetailsCardComponent extends Component {

    onBackClick = (event) => {
        navigateBack()
    };

    render() {
        console.log('[obabichev] QuestionDetailsCardComponent.props', this.props);

        const {question} = this.props;

        if (!question) {
            return <div>
                You have to open question from the table with questions
            </div>
        }

        return <div>
            {this.renderCard(question)}
        </div>;
    }

    renderCard = (question) => {

        return <div className="question-card__container">
            <div className="register-input-container">
                <div className="question-card__question-label-container">
                    <div className="question-card__question-back"
                         onClick={this.onBackClick}>
                        <Icon icon="back" width="20" height="20"/>
                    </div>
                    <div className="question-card__question-label">{he.decode(question.question)}</div>
                </div>
                <div className="question-card__category-difficulty">
                    {he.decode(question.category)} ({he.decode(question.difficulty)})
                </div>
            </div>
            <div className="question-card__answer">
                Answer: <span className="question-card__answer__correct">{he.decode(this.rightAnswer(question))}</span>
            </div>
            {this.renderWrongAnswers(question)}
        </div>;
    };

    renderWrongAnswers = (question) => {
        if (!this.isMultipleChoiceQuestion(question)) {
            return null;
        }

        return <div className="question-card__wrong-answers-container">
            <div>Wrong:</div>
            <div className="question-card__wrong-answers__incorrect">
                {question.incorrect_answers.map(this.renderWrongAnswer)}
            </div>
        </div>;
    };

    renderWrongAnswer = (answer, index) => {
        return <div key={index}>
            {answer}
        </div>;
    };

    rightAnswer = (question) => {
        if (this.isMultipleChoiceQuestion(question)) {
            return question.correct_answer;
        } else {
            return this.boolToAnswer(question.correct_answer === 'True');
        }
    };

    boolToAnswer = (bool) => {
        return bool ? 'Yes' : 'No';
    };

    static propTypes = {
        questionId: PropTypes.number.isRequired
    };

    isMultipleChoiceQuestion = (question) => question.type === 'multiple';
}

// category: "Entertainment: Television"
// correct_answer: "Screech"
// difficulty: "easy"
// id: 2
// incorrect_answers: (3) ["Zack", "Mr. Belding", "A.C. Slater"]
// question: "Which character was played by Dustin Diamond in the sitcom &#039;Saved by the Bell&#039;?"
// type: "multiple"