import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({ recipe }) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlfor="name" className="recipe-edit__label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          className="recipe-edit__input"
        />
        <label htmlfor="name" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="CookTime"
          value={recipe.cookTime}
          id="CookTime"
          className="recipe-edit__input"
        />
        <label htmlfor="name" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          name="Servings"
          min="1"
          id="servings"
          value={recipe.servings}
          className="recipe-edit__input"
        />
        <label htmlFor=" instructions" className="recipe-edit__label">
          Instruction
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
        >
          {recipe.instructions}
        </textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add ingredient</button>
      </div>
    </div>
  );
}
