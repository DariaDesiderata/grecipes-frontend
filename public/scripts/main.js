const $recipeCard = $('.recipe')



function addRecipes(recipes) {

  recipes.forEach(recipe => {
        $recipeCard.append(
          `<div class="col l6 s12 m6">
            <div class="card medium animated hoverable">
              <div class="card-image">
                <img class ="recipe-img" src="${recipe.image}">
              </div>
              <div class="card-content">
                <span class="card-title">${recipe.title}</span>
                <p class="rating">Average rating: ${recipe.avgRating}</p>
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
//get request for Average
//if recipe.id === review.recipe_id
//then append it to the recipeCard
