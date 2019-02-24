import {connect} from 'react-redux';
import {SessionVerifierComponent} from '../../components/base/SessionVerifierComponent';
import {sessionSelector} from '../../selectors/session';
import {isLoadingSelector} from '../../selectors/loading';
import {actualizeSessionTokenThunk} from '../../actions/session/session.thunk';
import {errorLoadingActionWrapper} from '../../util/actions';

const mapStateToProps = (state, props) => ({
    session: sessionSelector(state),
    isLoading: isLoadingSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    actualizeSessionToken: () => dispatch(errorLoadingActionWrapper(actualizeSessionTokenThunk()))
});

export const ApplicationLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(SessionVerifierComponent);
