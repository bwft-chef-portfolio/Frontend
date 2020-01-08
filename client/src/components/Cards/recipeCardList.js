import React from 'react';
import RecipeCard from './recipeCard';
import styled from 'styled-components';

//styleing will go here
const RecipeList = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:space-evenly;
`
/*
   <div>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
            <h2>{recipe.title}</h2>

            <p>{recipe.type}</p>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
*/
function RecipeCardList(props) {


  return (
    <>
    <RecipeList>
       {props.recipes.map(recipe => (
         RecipeCard(recipe)
      ))}
    </RecipeList>
  </>
  );
}

export default RecipeCardList;
