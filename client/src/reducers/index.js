import { combineReducers } from 'redux';
import {registrationReducer as registration} from './registrationReducer';
import { loginReducer} from './loginReducer';
import { chefPageReducer } from './chefPageReducer';
import { cardReducer } from './cardReducer';

export default combineReducers({
    registration, loginReducer, chefPageReducer, cardReducer

});