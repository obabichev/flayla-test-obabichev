import React, {Component} from 'react';
import {MainRouter} from '../router/MainRouter';

export class BlankScreenComponent extends Component {

    componentDidMount() {
        const {session, retrieveSessionToken} = this.props;
        if (!session) {
            retrieveSessionToken();
        }
    }

    render() {
        const {session} = this.props;

        //TODO choose between empty screen and main router is not task of BlankScreenComponent

        if (!session) {
            return <div>
                BlankScreenComponent
            </div>;
        }

        return <MainRouter/>;
    }

}
