import React from "react";

const RecipeIngredientEdit = (props) => {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        value={ingredient.name}
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        value={ingredient.amount}
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
};

export default RecipeIngredientEdit;
