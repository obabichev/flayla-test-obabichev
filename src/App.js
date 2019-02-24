import React, {Component} from 'react';
import './App.css';
import {Store} from './components/store/Store';
import {ApplicationLoaderContainer} from './containers/base/SessionVerifierContainer';

class App extends Component {
    render() {
        return <div className="app__content-container">
            <div className="app__content">
                <Store>
                    <ApplicationLoaderContainer/>
                </Store>
            </div>
        </div>;
    }
}

export default App;
