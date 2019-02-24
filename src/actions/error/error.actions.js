import {ERROR_ACTION, ERROR_DEL_ACTION, ERROR_SET_ACTION} from './error.constants';
import {createAction} from '../../util/actions';

export const setErrorAction = (error) => createAction(ERROR_SET_ACTION, {error});

export const closeErrorAction = () => createAction(ERROR_DEL_ACTION, {});

export const errorAction = (error) => createAction(ERROR_ACTION, {error});
