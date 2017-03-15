function createNewRecipe() {


  $('.add-ingredient').click(() => {
    $('.recipe-ingredient').append(
        `<input placeholder="Add ingredient" id="recipe-ingredient" type="text">
        <label for="recipe-ingredient" class="active">Ingredient</label>`
    )
  })

  $('.add-step').click(() => {
    $('.recipe-step').append(
      `<input placeholder="Add step" id="recipe-step" type="text">
      <label for="recipe-step" class="active">Step</label>`
    )
  })

}
