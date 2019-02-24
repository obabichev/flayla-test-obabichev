import {connect} from 'react-redux';
import {QuestionsListComponent} from '../../components/questions/QuestionsListComponent';
import {
    questionsByCategoryIdSelector, questionsToDownloadCountByCategoryIdSelector,
} from '../../selectors/questions';
import {getQuestionsListThunk} from '../../actions/questions.thunk';
import {loadingActionWrapper} from '../../util/actions';
import {QUESTIONS_LIST_LOADER_ID} from '../../actions/loading.constants';
import {isLoadingSelector} from '../../selectors/loading';


const mapStateToProps = (state, props) => ({
    questions: questionsByCategoryIdSelector(state, props),
    questionsToDownloadCount: questionsToDownloadCountByCategoryIdSelector(state, props),
    isLoading: isLoadingSelector(state, {loaderId: QUESTIONS_LIST_LOADER_ID})
});

const mapDispatchToProps = (dispatch) => ({
    getQuestionsList: (categoryId, amount) =>
        dispatch(loadingActionWrapper(getQuestionsListThunk(categoryId, amount), QUESTIONS_LIST_LOADER_ID))
});

export const QuestionsListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);
