// DESCRIPTION
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 



function cakes(recipe, available) {
    let ingredientsNeeded = Object.keys(recipe) // Array of ingredients specified by the recipe
    return ingredientsNeeded.reduce((numberOfCakes,ingredient) => { // Returns the maximum number of cakes that can be created from the available ingredients
      let cakesWorthOfIngredients = Math.floor(available[ingredient]/recipe[ingredient]) // Determine the how many whole cakes worth of ingredients are available based on the recipe
      if (cakesWorthOfIngredients) return Math.min(cakesWorthOfIngredients,numberOfCakes) // If this value is a number, the ingredient that produces the lowest cakes worth is the limiting factor and is chosen to be carried forward
      else return 0 // If this value is not a number i.e. a needed ingredient is not available, no cakes can be made
    },Infinity)
}