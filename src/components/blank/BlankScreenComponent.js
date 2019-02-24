import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MainRouter} from '../router/MainRouter';
import {FooterComponent} from './FooterComponent';
import {HorizontalLoader} from '../basic/HorizontalLoader';
import {ErrorModalContainer} from '../../containers/blank/ErrorModalContainer';

export class BlankScreenComponent extends Component {

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

        //TODO choose between empty screen and main router is not task of BlankScreenComponent

        if (!session) {
            return <div>
            </div>;
        }

        return <MainRouter/>;
    };

    static propTypes = {
        session: PropTypes.object,
        isLoading: PropTypes.bool,
        actualizeSessionToken: PropTypes.func.isRequired
    }
}
