import React, { useState } from "react";
import "../css/App.css";
import RecipeList from "./RecipeList";

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

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

export default App;
