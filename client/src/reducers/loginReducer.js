import { LOGINFETCH, LOGINSUCCESS, LOGINFAILURE } from '../actions';

const initialState = {
    isLoadingLOGIN: false,
    successLOGIN: false,
    user:''
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGINFETCH:
            return {
                ...state,
                isLoadingLOGIN: true,
                successLOGIN: false
            };
        case LOGINSUCCESS:
            return {
                ...state,
                isLoadingLOGIN: false,
                successLOGIN: true,
                user: action.payload
            };
        case LOGINFAILURE:
            return {
                ...state,
                isLoadingLOGIN: false,
                successLOGIN: false,
                user: ""
            };

        default:
            return state;
    }
}