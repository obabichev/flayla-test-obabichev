import React, {Component} from 'react';
import './App.css';
import {Store} from './components/store/Store';
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
