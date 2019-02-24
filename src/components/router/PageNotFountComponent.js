import React, {Component} from 'react';
import {Button} from '../basic/Button';
import {navigateForward} from '../../helpers/history/history';
import './PageNotFountComponent.css';

export class PageNotFountComponent extends Component {

    onHomeClock = () => {
        navigateForward('/');
    };

    render() {
        return <div>
            <div className="page-not-found__text">
                Page not found
            </div>
            <Button onClick={this.onHomeClock}>Go home</Button>
        </div>;
    }

}
