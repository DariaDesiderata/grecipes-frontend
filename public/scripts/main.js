const $recipeCard = $('.recipe')

function addRecipes(recipes) {
  recipes.forEach(recipe => {
    var rating;
    recipe.avg === null ? rating = "No reviews yet" : rating = parseFloat(recipe.avg).toFixed(1)

        $recipeCard.append(
          `<div class="col l6 s12 m6">
            <div class="card medium animated hoverable">
              <div class="card-image">
                <img class="recipe-img" src="${recipe.image}">
              </div>
              <div class="card-content">
                <span class="card-title">${recipe.title}</span>
                <p class="rating">Average rating: ${rating}</p>
              </div>
              <div class="card-action">
                <a href="./recipe.html?id=${recipe.id}">See recipe</a>
              </div>
            <div>
          </div>`
        )
    })
}

$.get("https://g43recipes.herokuapp.com/recipe")
.then(addRecipes)
.catch(err => {
  console.log(err)
})
