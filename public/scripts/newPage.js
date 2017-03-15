let step = 0
let ingredient = 0
let ingredientArr = []
let stepArr = []

$('.add-ingredient').click(() => {
  ++ingredient
  $('.recipe-ingredient').append(
    `<div class="input-field col l3">
    <label for="ingredient-qty" class="active">Quantity</label>
    <input placeholder="1, 2, 3.." id="ingredient-qty-${ingredient}" type="text">
    </div>
    <div class="input-field col l3">
    <label for="ingredient-uom" class="active">UOM</label>
    <input placeholder="Cup, oz, each" id="ingredient-uom-${ingredient}" type="text">
    </div>
    <div class="input-field col l6">
    <label for="recipe-ingredient" class="active">Ingredient</label>
    <input placeholder="Sugar and spice and everything nice" id="recipe-ingredient-${ingredient}" type="text">
    </div>`
  )
})

$('.add-step').click(() => {
  ++step
  $('.recipe-step').append(
    `<div class="input-field">
    <input placeholder="Add step" id="recipe-step-${step}" type="text">
    <label for="recipe-step" class="active">Step ${step}</label>
    </div>`
  )
})

$('.send-recipe').click((event) => {
  event.preventDefault()
  for (var i = 1; i <= ingredient; i++) {
    if($(`#ingredient-qty-${i}`).val() !== "" || $(`#ingredient-uom-${i}`).val() !== "" || $(`#recipe-ingredient-${i}`).val()) {
      ingredientArr.push(
        {quantity: $(`#ingredient-qty-${i}`).val(),
        uom: $(`#ingredient-uom-${i}`).val(),
        name: $(`#recipe-ingredient-${i}`).val()})
    }
  }

  for (var j = 1; j <= step; j++) {
    if ($("#recipe-step").val() !== "") {
      stepArr.push(`${j}${$(`#recipe-step-${j}`).val()}`)
    }
  }

  let newRecipe = {
    title: $("#recipe-title").val(),
    username: $("#recipe-username").val(),
    description: $("#recipe-description").val(),
    image: $("#recipe-url").val(),
    ingredient: ingredientArr,
    steps: stepArr
  }
  console.log(newRecipe);
  $.ajax("https://g43recipes.herokuapp.com/recipe", {
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(newRecipe)
  })
  .then(() => {$('.recipe-form').reset()}
  )
})
