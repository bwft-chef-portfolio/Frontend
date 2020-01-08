import React from 'react';


function RecipeCardList(props) {


  return (
    <div>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.img_url}></img>
            <p>{recipe.type}</p>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeCardList;
