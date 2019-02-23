import {connect} from 'react-redux';
import {BlankScreenComponent} from '../../components/blank/BlankScreenComponent';
import {sessionSelector} from '../../selectors/session';
import {retrieveSessionTokenThunk} from '../../actions/session.thunk';

const mapStateToProps = (state) => ({
    session: sessionSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    retrieveSessionToken: () => dispatch(retrieveSessionTokenThunk())
});

export const BlankScreenContainer = connect(mapStateToProps, mapDispatchToProps)(BlankScreenComponent);
