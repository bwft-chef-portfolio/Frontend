import { combineReducers } from 'redux';
import {registrationReducer as registration} from './registrationReducer';
import { loginReducer} from './loginReducer';

export default combineReducers({
    registration, loginReducer
});