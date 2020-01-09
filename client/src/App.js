import React, { useState, useEffect } from "react";
import axios from 'axios';
import Registration from './components/SignUp/SignUp';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/withAuth/authRouter';
import RecipeCardList from './components/Cards/recipeCardList';
import {BASE_URL} from './utils/axiosWithAuth';
import CreateNewRecipe from './components/Cards/createNewRecipe';


function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + '/recipes')
      .then(res => setRecipes(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Route exact path='/registration' component={Registration} />
      <Route path='/login' component={Login} />
      <Route 
        exact path='/recipes-list' 
        render={props => (
          <RecipeCardList 
            {...props}


            recipes={recipes}
          />
        )}
      />
      <PrivateRoute path='/user-recipes-list'/>
      <Route path='/add-recipe-card' component={CreateNewRecipe} />
      
    </div>
  );
}

export default App;
