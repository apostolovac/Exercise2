//Managing a Collection of Recipes

const recipe1 = {
 name: "Sushi Rolls",
 cuisine: "Japanese",
 ingredients: [
  "sushi rice",
  "nori seaweed",
  "fish (e.g., salmon, tuna)",
  "vegetables (e.g., cucumber, avocado)",
 ],
 instructions:
  "Prepare sushi rice. Place nori seaweed on a bamboo mat. Spread rice on nori, add fillings, and roll tightly. Slice into rolls.",
};

const recipe2 = {
 name: "Chicken Curry",
 cuisine: "Indian",
 ingredients: [
  "chicken",
  "onions",
  "tomatoes",
  "spices (e.g., curry powder, turmeric)",
 ],
 instructions:
  "Sauté onions. Add spices and tomatoes. Cook until tomatoes break down. Add chicken and simmer until cooked through.",
};

const recipe3 = {
 name: "Spaghetti Carbonara",
 cuisine: "Italian",
 ingredients: ["spaghetti", "eggs", "bacon", "parmesan cheese", "black pepper"],
 instructions:
  "Cook spaghetti. Fry bacon until crispy. Mix eggs and parmesan cheese. Toss spaghetti with egg mixture and bacon. Season with black pepper.",
};

console.log("Recipe1:", recipe1);
console.log("Recipe2:", recipe2);
console.log("Recipe3:", recipe3);

console.log(
 "Recipe1:",
 recipe1.name,
 recipe1.cuisine,
 recipe1.ingredients,
 recipe1.instructions
);
console.log(
 "Recipe2:",
 recipe2["name"],
 recipe2["cuisine"],
 recipe2["ingredients"],
 recipe2["instructions"]
);

const recipeSummary = `${recipe2.name} is a delicious ${recipe2.cuisine} dish. It includes ${recipe2.ingredients}`;
console.log("Recipesummary:", recipeSummary);

recipe1.cuisine = "Chinese";
recipe3.ingredients = [
 "spaghetti",
 "eggs",
 "bacon",
 "parmesan cheese",
 "black pepper",
 "parsley",
];

console.log("Updated Recipe1:", recipe1.cuisine);
console.log("Updated Recipe3:", recipe3.ingredients);
