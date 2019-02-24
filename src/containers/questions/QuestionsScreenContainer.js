import {connect} from 'react-redux';
import {getCategoriesListThunk} from '../../actions/categories/categories.thunk';
import {QuestionsScreenComponent} from '../../components/questions/QuestionsScreenComponent';
import {categoriesSelectInputSelector} from '../../selectors/categories';
import {errorLoadingActionWrapper} from '../../util/actions';
import {SELECT_CATEGORY_LOADER_ID} from '../../actions/loading/loading.constants';
import {isLoadingSelector} from '../../selectors/loading';

const mapStateToProps = (state) => ({
    categoriesSelectInput: categoriesSelectInputSelector(state),
    isLoading: isLoadingSelector(state, {loaderId: SELECT_CATEGORY_LOADER_ID})
});

const mapDispatchToProps = (dispatch) => ({
    getCategoriesList: () => dispatch(errorLoadingActionWrapper(getCategoriesListThunk(), SELECT_CATEGORY_LOADER_ID))
});

export const QuestionsScreenContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsScreenComponent);