import { setUser, logout } from "../components/withAuth/services";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//USE_ID
export const SET_ID = "SET_ID";

export const storeUserId = (user_id) => (dispatch) => {
  dispatch({ type: SET_ID, payload: user_id });
};

// LOGIN
export const LOGINFETCH = "LOGINFETCH";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAILURE = "LOGINFAILURE";

// #stateManagement

export const login = (username, password) => (dispatch) => {
  dispatch({ type: LOGINFETCH });
  return (
    axiosWithAuth()
      // #workingWithAPIS
      // receives and sends the password and username to the login post endpoint and sets token to localstorage
      .post(`/auth/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        // #client-side-auth
        // takes the token from the response and sets to the localStorage as token for authentication
        localStorage.setItem("token", res.data.token);
        if (res.data.user_id) {
          localStorage.setItem("user_id", res.data.user_id);
        }
        console.log(res.data);
        dispatch({ type: LOGINSUCCESS, payload: res.data });
        return true;
      })
      .catch((res) => {
        logout((callback) => {
          alert(res);
        });
        dispatch({
          type: LOGINFAILURE,
          payload: res.data,
        });
      })
  );
};

//REGISTRATION

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = (addUser) => (dispatch) => {
  console.log(addUser);
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(`/auth/register`, addUser)
    .then((res) => {
      console.log(res);
      // #client-side-auth
      // Also sets token to the localstorage
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
    });
};

//FETCH DATA
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => (dispatch) => {
  console.log();
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get(`/recipes`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

//FETCH SINGLE CARD DATA

//ADD RECIPE
export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const addRecipe = (addRecipe) => (dispatch) => {
  console.log("add recipe", addRecipe);
  dispatch({ type: ADD_RECIPE_START });
  axiosWithAuth()
    .post("/recipes", addRecipe)
    .then((res) => {
      console.log("res", res);
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err.response });
    });
};

//DELETE RECIPES
export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const deleteRecipe = (id) => (dispatch) => {
  dispatch({ type: DELETE_RECIPE_START });
  axiosWithAuth()
    .delete(`/recipes/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({ type: DELETE_RECIPE_FAILURE, payload: err.response });
    });
};

//EDIT RECIPES
export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const editRecipe = (id, editedRecipe) => (dispatch) => {
  dispatch({ type: EDIT_RECIPE_START });
  axiosWithAuth()
    .put(`/recipes/${id}`, editedRecipe)
    .then((res) => {
      console.log(res);
      dispatch({ type: EDIT_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EDIT_RECIPE_FAILURE, payload: err.response });
    });
};

//GETCARD
export const GETCARD_FETCH = "GETCARD_FETCH";
export const GETCARD_SUCCESS = "GETCARD_SUCCESS";
export const GETCARD_FAILURE = "GETCARD_FAILURE";

const URL = "https://backendchefls.herokuapp.com/api";
export const getCard = () => (dispatch) => {
  dispatch({ type: GETCARD_FETCH });
  axios
    .get(`${URL}/recipes`)
    .then((res) => {
      dispatch({ type: GETCARD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GETCARD_FAILURE, payload: err });
    });
};
