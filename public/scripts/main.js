const $recipeCard = $('.recipe')

// var recipeArr = [
//   {id: 1,  image: "./stylesheets/img1.jpg", title:"Paella", avgRating: 4.5, },
//   {id: 2,  image: "./stylesheets/img2.jpg", title:"Paella", avgRating: 4.5, },
//   {id: 3,  image: "./stylesheets/img1.jpg", title:"Paella", avgRating: 4.5, },
//   {id: 4,  image: "./stylesheets/img2.jpg", title:"Paella", avgRating: 4.5, }
// ]

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
// addRecipes(recipeArr)

$.get("https://g43recipes.herokuapp.com/recipe")
.then(addRecipes)
.catch(err => {
  console.log(err)
})
//get request for Average
//if recipe.id === review.recipe_id
//then append it to the recipeCard
