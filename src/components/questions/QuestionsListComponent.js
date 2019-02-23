import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {limitStr} from '../../util/strings';
import './QuestionsListComponent.css';
import he from 'he';

export class QuestionsListComponent extends Component {

    componentDidMount() {
        const {categoryId, questions} = this.props;

        this.initData(categoryId, questions);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categoryId !== this.props.categoryId) {
            this.initData(nextProps.categoryId, nextProps.questions);
        }
    }

    initData = (categoryId, questions) => {
        const {getQuestionsList} = this.props;

        if (!questions || questions.length === 0) {
            getQuestionsList(categoryId);
        }
    };

    onDownloadMoreClick = (event) => {
        const {getQuestionsList, categoryId, questionsToDownloadCount} = this.props;

        getQuestionsList(categoryId, questionsToDownloadCount);
    };

    render() {
        return <div>
            {this.renderQuestions()}
            {this.renderDownloadMoreButton()}
        </div>;
    }

    renderQuestions = () => {
        const {questions} = this.props;

        return <table className="questions-list__table">
            <tbody >
            {questions.map(this.renderQuestionCard)}
            </tbody>
        </table>;
    };

    /**
     * Unfortunately question have no id,
     * I will use as a key for react components 'question' field from questions,
     * but in the case of duplicated questions we will have a problem...
     *
     * @param category
     * @param difficulty
     * @param question
     * @return {XML}
     */
    renderQuestionCard = ({category, difficulty, question}) => {
        return <tr key={question}
                   className="questions-list__table-row">
            <td className="questions-list__table-cell">{limitStr(he.decode(question))}</td>
            <td className="questions-list__table-cell">{limitStr(he.decode(category))}</td>
            <td className="questions-list__table-cell">{he.decode(difficulty)}</td>
        </tr>;
    };

    renderDownloadMoreButton = () => {
        const {questionsToDownloadCount} = this.props;
        if (!questionsToDownloadCount > 0) {
            return null;
        }
        return <button onClick={this.onDownloadMoreClick}>
            {questionsToDownloadCount} more...
        </button>;
    };

    static propTypes = {
        categoryId: PropTypes.number.isRequired,
        questions: PropTypes.array.isRequired,
        questionsToDownloadCount: PropTypes.number.isRequired
    };
}
