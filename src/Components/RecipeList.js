import React, { useContent, useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

const RecipeList = ({ recipes }) => {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list_add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
