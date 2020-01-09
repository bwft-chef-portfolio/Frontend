import React from 'react';
import RecipeCard from './recipeCard';
import SearchForm from './SearchForm'
import styled from 'styled-components';

//styleing will go here
const RecipeList = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:space-evenly;
`

function RecipeCardList(props) {


  return (
    <RecipeList>
        {SearchForm(props.recipes)}
       {/*props.recipes.map(recipe => (RecipeCard(recipe)))*/}
    </RecipeList>
  );
}

export default RecipeCardList;
