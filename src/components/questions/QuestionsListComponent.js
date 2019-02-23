import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {limitStr} from '../../util/strings';
import './QuestionsListComponent.css';
import he from 'he';
import {navigateForward} from '../../helpers/history/history';
import {Button} from '../basic/Button';

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

    onDownloadMoreClick = event => {
        const {getQuestionsList, categoryId, questionsToDownloadCount} = this.props;

        getQuestionsList(categoryId, questionsToDownloadCount);
    };

    onQuestionCardClick = id => event => {
        navigateForward(`/question/${id}`);
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

    renderQuestionCard = ({id, category, difficulty, question}) => {
        return <tr key={id}
                   className="questions-list__table-row"
                   onClick={this.onQuestionCardClick(id)}>
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
        return <Button onClick={this.onDownloadMoreClick}>
            {questionsToDownloadCount} more...
        </Button>;
    };

    static propTypes = {
        categoryId: PropTypes.number.isRequired,
        questions: PropTypes.array.isRequired,
        questionsToDownloadCount: PropTypes.number.isRequired
    };
}
