import {connect} from 'react-redux';
import {getCategoriesListThunk} from '../actions/categories.thunk';
import {QuestionsListComponent} from '../components/questions/QuestionsListComponent';
import {categoriesSelectInputSelector} from '../selectors/categories';

const mapStateToProps = (state) => ({
    categoriesSelectInput: categoriesSelectInputSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getCategoriesList: () => dispatch(getCategoriesListThunk())
});

export const QuestionsListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsListComponent);