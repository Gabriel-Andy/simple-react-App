import React, { useState, useEffect } from "react";
import "../css/App.css";
import RecipeList from "./RecipeList";
import uuid from "react-uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";
function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
  };
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Ins",
      ingredients: [{ id: uuid(), name: "Name", amout: "1 Ts" }],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}/>
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}
const sampleRecipes = [
  {
    id: 1,
    name: "plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      " 1.Put salt on Chicken \n2.put chicken in oven\n3.Eat chicken",
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 Pounds" },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Porks",
    servings: 5,
    cookTime: "0:45",
    instructions: " 1.Put salt on Pork \n2.put Porks in oven\n3.Eat Pork",
    ingredients: [
      { id: 1, name: "Pork", amount: "3 Pounds" },
      {
        id: 2,
        name: "Paproka",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
