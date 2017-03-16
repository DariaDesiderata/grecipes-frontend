const urlArr = window.location.href.split('=')
const recipeId = urlArr[1]
console.log(recipeId);
let step = 0
let ingredient = 0
let ingredientArr = []
let stepArr = []

function parseRecipe(recipe) {

  $('.edit-recipe-header').html(recipe.title)
  $('.recipe-title').val(recipe.title)
  $('.recipe-username').val(recipe.user_id)
  $('.recipe-desciption').val(recipe.description)
  $('.recipe-url').attr("src", recipe.image)
}

function parseSteps(steps) {

  steps.forEach(step => {
    ++step
    $('.recipe-step').append(
      `<div class="input-field">
      <input id="recipe-step-${step}" type="text">
      <label for="recipe-step" class="active">Step ${step}</label>${step.body}
      </div>`
    )
  })
}

function parseIngredients(ingredients) {
  arrOfObj.forEach(ingredient => {
    ++ingredient
    $('.recipe-ingredient').append(
      `<div class="input-field col l3">
      <label for="ingredient-qty" class="active">Quantity</label>
      <input id="ingredient-qty-${ingredient}" type="text" value="ingredient.quantity">
      </div>
      <div class="input-field col l3">
      <label for="ingredient-uom" class="active">UOM</label>
      <input id="ingredient-uom-${ingredient}" type="text" value="ingredient.uom">
      </div>
      <div class="input-field col l6">
      <label for="recipe-ingredient" class="active">Ingredient</label>
      <input id="recipe-ingredient-${ingredient}" type="text" value="ingredient.name">
      </div>`
    )
  })
}

$('.edit-recipe').click(event => {
  event.preventDefault()
})

$.get("https://g43recipes.herokuapp.com/recipe/"+recipeId)
  .then(recipe => {
    parseRecipe(recipe)
  })
  .then(steps => {
    $.get("https://g43recipes.herokuapp.com/step/"+recipeId)
    .then(steps => {
      parseSteps(steps)
    })
  })
  .then(ingredients => {
    $.get("https://g43recipes.herokuapp.com/ingredient/"+recipeId)
    .then(ingredients => {
      parseIngredients(ingredients)
    })
  })
  .catch(err => {
    console.log(err)
  })
