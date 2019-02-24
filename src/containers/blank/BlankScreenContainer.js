import {connect} from 'react-redux';
import {BlankScreenComponent} from '../../components/blank/BlankScreenComponent';
import {sessionSelector} from '../../selectors/session';
import {actualizeSessionTokenThunk} from '../../actions/session/session.thunk';
import {isLoadingSelector} from '../../selectors/loading';
import {errorLoadingActionWrapper} from '../../util/actions';

const mapStateToProps = (state, props) => ({
    session: sessionSelector(state),
    isLoading: isLoadingSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    actualizeSessionToken: () => dispatch(errorLoadingActionWrapper(actualizeSessionTokenThunk()))
});

export const BlankScreenContainer = connect(mapStateToProps, mapDispatchToProps)(BlankScreenComponent);
