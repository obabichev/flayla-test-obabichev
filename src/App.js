import React, {Component} from 'react';
import './App.css';
import {MainRouter} from './components/router/MainRouter';
import {Store} from './components/store/Store';
import {BlankScreenComponent} from './components/blank/BlankScreenComponent';
import {BlankScreenContainer} from './containers/blank/BlankScreenContainer';

class App extends Component {
    render() {
        return <div>
            <Store>
                <BlankScreenContainer/>
            </Store>
        </div>;
    }
}

export default App;
