import {connect} from 'react-redux';
import {getCategoriesListThunk} from '../../actions/categories.thunk';
import {QuestionsScreenComponent} from '../../components/questions/QuestionsScreenComponent';
import {categoriesSelectInputSelector} from '../../selectors/categories';

const mapStateToProps = (state) => ({
    categoriesSelectInput: categoriesSelectInputSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getCategoriesList: () => dispatch(getCategoriesListThunk())
});

export const QuestionsScreenContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsScreenComponent);