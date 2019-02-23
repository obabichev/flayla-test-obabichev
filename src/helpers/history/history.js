import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

export const navigateBack = () => history.goBack();

export const navigateForward = (path) => history.push(path);
