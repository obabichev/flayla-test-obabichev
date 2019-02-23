import {connect} from 'react-redux';
import {QuestionsListComponent} from '../../components/questions/QuestionsListComponent';
import {
    questionsByCategoryIdSelector, questionsToDownloadCountByCategoryIdSelector,
} from '../../selectors/questions';
import {getQuestionsListThunk} from '../../actions/questions.thunk';


const mapStateToProps = (state, props) => ({
    questions: questionsByCategoryIdSelector(state, props),
    questionsToDownloadCount: questionsToDownloadCountByCategoryIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    getQuestionsList: (categoryId, amount) => dispatch(getQuestionsListThunk(categoryId, amount))
});

export const QuestionsListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);
