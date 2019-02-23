import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

        return questions.map(this.renderQuestionCard);
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
        return <div key={question}>
            Question!
            {question}
            {category}
            {difficulty}
        </div>;
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
