const urlArr = window.location.href.split('=')
const recipeId = urlArr[1]

function renderRecipe(recipe) {

    $('.product-page-header').append(`<h4>${recipe.title}</h4>`)
    $('.product-img').append(`<img src="${recipe.image}">`)
    $('.product-details').append(`<p>${recipe.title}/${recipe.username}/${}</p>
      <span class="stars">${avgRating}</span>`)
    $('.product-ingredients').append(`<p>${recipe.description}</p>`)

}

function appendIngredients(ingredients) {
  ingredients.forEach(ingredient => {
    $('.ingredient-list').append(`<li>${ingredient.quantity}${ingredient.uom}${ingredient.name}</li>`)
  })
}

function appendSteps(steps) {
  steps.forEach(step => {
    $('.steps').append(`<li>step.body</li>`)
  })
}

function appendReviews(reviews) {
  if (Number(id) === review.recipe_id) {
}


$.get("https://g43recipes.herokuapp.com/recipes/"+recipeId)
  .then(function(recipe) {
    renderRecipe(recipe)
  })
  .then(function() {
    $.get("https://g43recipes.herokuapp.com/steps/"+recipeId)
    .then(function(steps) {
      appendSteps(steps)
    })
  })
  .then(function() {
    $.get("https://g43recipes.herokuapp.com/ingredients/"+recipeId)
    .then(function(ingredients) {
      appendIngredients(ingredients)
    })
  })
  .then(function() {
    $.get("https://g43recipes.herokuapp.com/reviews/"+recipeId)
    .then(function(reviews) {
      appendReviews(reviews)
    })
  })
})
