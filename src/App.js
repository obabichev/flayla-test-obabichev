import React, {Component} from 'react';
import './App.css';
import {Store} from './components/store/Store';
import {SessionVerifierContainer} from './containers/base/SessionVerifierContainer';

class App extends Component {
    render() {
        return <div className="app__content-container">
            <div className="app__content">
                <Store>
                    <SessionVerifierContainer/>
                </Store>
            </div>
        </div>;
    }
}

export default App;
