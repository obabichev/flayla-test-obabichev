import {connect} from 'react-redux';
import {BlankScreenComponent} from '../../components/blank/BlankScreenComponent';
import {sessionSelector} from '../../selectors/session';
import {actualizeSessionTokenThunk} from '../../actions/session.thunk';
import {isLoadingSelector} from '../../selectors/loading';
import {loadingActionWrapper} from '../../util/actions';

const mapStateToProps = (state, props) => ({
    session: sessionSelector(state),
    isLoading: isLoadingSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    actualizeSessionToken: () => dispatch(loadingActionWrapper(actualizeSessionTokenThunk()))
});

export const BlankScreenContainer = connect(mapStateToProps, mapDispatchToProps)(BlankScreenComponent);
