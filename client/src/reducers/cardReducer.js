import { 
    GETCARD_FETCH,
    GETCARD_SUCCESS,
    GETCARD_FAILURE
} from '../actions';

const initialState = {
    cards: [],
    fetching:false,
    error:''
};

export const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case GETCARD_FETCH:
            return {...state, fetching:true};
        case GETCARD_SUCCESS:
            return {...state, cards:action.payload, fetching:false};
        case GETCARD_FAILURE:
            return {...state, error:action.payload, fetching:false};
        default:
            return state;
    }
}