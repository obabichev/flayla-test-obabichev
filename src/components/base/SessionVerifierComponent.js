import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MainRouter} from '../router/MainRouter';
import {HorizontalLoader} from '../basic/HorizontalLoader';
import {FooterComponent} from './FooterComponent';
import {ErrorModalContainer} from '../../containers/base/ErrorModalContainer';
import {BlankScreenComponent} from './BlankScreenComponent';

export class SessionVerifierComponent extends Component {

    componentDidMount() {
        const {session, actualizeSessionToken} = this.props;
        if (!session) {
            actualizeSessionToken();
        }
    }

    render() {
        return <div>
            {this.renderLoader()}
            {this.renderContent()}
            <FooterComponent/>
            <ErrorModalContainer/>
        </div>;
    }

    renderLoader = () => {
        const {isLoading} = this.props;

        if (!isLoading) {
            return null;
        }
        return <HorizontalLoader/>;
    };

    renderContent = () => {
        const {session} = this.props;

        if (!session) {
            return <BlankScreenComponent/>;
        }

        return <MainRouter/>;
    };

    static propTypes = {
        session: PropTypes.object,
        isLoading: PropTypes.bool,
        actualizeSessionToken: PropTypes.func.isRequired
    }

}
