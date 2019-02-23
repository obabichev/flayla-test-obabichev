import React, {Component} from 'react';
import './App.css';
import {Store} from './components/store/Store';
import {BlankScreenContainer} from './containers/blank/BlankScreenContainer';

class App extends Component {
    render() {
        return <div className="app__content-container">
            <div className="app__content">
                <Store>
                    <BlankScreenContainer/>
                </Store>
            </div>
        </div>;
    }
}

export default App;
