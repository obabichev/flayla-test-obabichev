import {connect} from 'react-redux';
import {ErrorModalComponent} from '../../components/base/ErrorModalComponent';
import {errorSelector} from '../../selectors/error';
import {closeErrorAction} from '../../actions/error/error.actions';

const mapStateToProps = (state) => ({
    error: errorSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    closeHint: () => dispatch(closeErrorAction())
});

export const ErrorModalContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorModalComponent);