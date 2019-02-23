import React, {Component} from 'react';
import './App.css';
import {MainRouter} from './components/router/MainRouter';
import {Store} from './components/store/Store';

class App extends Component {
    render() {
        return <div>
            <Store>
                <MainRouter/>
            </Store>
        </div>;
    }
}

export default App;
