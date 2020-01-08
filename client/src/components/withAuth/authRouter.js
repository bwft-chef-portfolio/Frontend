import React, {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import RecipeCardList from '../Cards/recipeCardList';
import {BASE_URL} from '../../utils/axiosWithAuth';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [recipes, setRecipes] = useState([]);
  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');
  useEffect(() => {
    axiosWithAuth()
      .get(BASE_URL + `/recipes/${userId}`) // /${userId}
      .then(res => setRecipes(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <RecipeCardList 
          {...props}
          recipes={recipes}
        />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;