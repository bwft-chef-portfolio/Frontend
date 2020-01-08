import { 
    GETRECIPE_FETCH,
    GETRECIPE_SUCCESS,
    GETRECIPE_FAILURE,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE,
    EDIT_RECIPE_START,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
} from '../actions';

const initialState = {
    recipes: [],
    postingRecipe: false,
    updatingRecipe: false,
    error: ""
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case GETRECIPE_FETCH:
        return {
          ...state
        };
      case GETRECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload,
          error: ""
        };
      case GETRECIPE_FAILURE:
        return {
          ...state,
          error: action.error
        };
      case ADD_RECIPE_START:
        return {
          ...state
        };
      case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload,
          error: ""
        };
      case ADD_RECIPE_FAILURE:
        return {
          ...state,
          error: action.error
        };
      case DELETE_RECIPE_START:
        return {
          ...state
        };
      case DELETE_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload,
          error: ""
        };
      case DELETE_RECIPE_FAILURE:
        return {
          ...state,
          error: action.error
        };
      case EDIT_RECIPE_START:
        return {
          ...state
        };
      case EDIT_RECIPE_SUCCESS:
        return {
          ...state,
          recipes: action.payload,
          error: ""
        };
      case EDIT_RECIPE_FAILURE:
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };

  export default recipeReducer;