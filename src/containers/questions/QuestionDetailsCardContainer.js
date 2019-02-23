import {connect} from 'react-redux';
import {QuestionDetailsCardComponent} from '../../components/questions/QuestionDetailsCardComponent';
import {questionByIdSelector} from '../../selectors/questions';

const mapStateToProps = (state, props) => ({
    question: questionByIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({});

export const QuestionDetailsCardContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsCardComponent);
