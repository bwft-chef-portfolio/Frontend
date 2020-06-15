import React, { useState, useEffect } from "react";
import axios from "axios";
import Registration from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/withAuth/authRouter";
import RecipeCardList from "./components/Cards/recipeCardList";
import { BASE_URL } from "./utils/axiosWithAuth";
import CreateNewRecipe from "./components/Cards/createNewRecipe";
import UserRecipeCardList from "./components/Cards/userRecipeCardList";
import EditRecipe from "./components/Cards/editRecipe";
import DisplayCard from "./components/Cards/displayCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "/recipes")
      .then((res) => setRecipes(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    // #routing-client-side
    // handled routing with some private routes that require a user to be authenticated to access
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/recipes-list"
        render={(props) => <RecipeCardList {...props} recipes={recipes} />}
      />
      <PrivateRoute path="/user-recipes-list" component={UserRecipeCardList} />
      <PrivateRoute path="/add-recipe-card" component={CreateNewRecipe} />
      <PrivateRoute path="/edit-recipe/:id" component={EditRecipe} />
      <Route path="/card/:id" compontent={DisplayCard} />
    </div>
  );
}

export default App;
