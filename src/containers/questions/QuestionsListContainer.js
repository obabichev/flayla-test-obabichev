import {connect} from 'react-redux';
import {QuestionsListComponent} from '../../components/questions/QuestionsListComponent';
import {questionsByCategoryIdSelector} from '../../selectors/questions';
import {getQuestionsListThunk} from '../../actions/questions.thunk';

const mapStateToProps = (state, props) => ({
    questions: questionsByCategoryIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    getQuestionsList: (categoryId) => dispatch(getQuestionsListThunk(categoryId))
});

export const QuestionsListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);
