import {
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false,
    users: [],
    addUser: []
  };
  
  export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTRATION_START:
        return {
          ...state,
          error: '',
          fetchingData: true
          
        };
      case REGISTRATION_SUCCESS:
        return {
          ...state,
          addUser: action.payload,
          error: '',
          fetchingData: false,
          users: action.payload
          
        };
      case REGISTRATION_FAILURE:
          return {
              ...state,
              error: action.payload,
              fetchingData: false
          }
      default:
          return state 
    }
  
  }