const urlArr = window.location.href.split('=')
const recipeId = urlArr[1]

var recipe = {title: "Paella", image: "./stylesheets/food.jpg", rating: 4.5, description: "fhasaksldjasdasdal;dka;sdkals;kda"}
var ingredients = [{quantity: 5, uom: "each", name: "shrimp"}, {quantity: 5, uom: "each", name: "shrimp"}, {quantity: 5, uom: "each", name: "shrimp"}, {quantity: 5, uom: "each", name: "shrimp"}]
var steps = [{body: "fhskajsdasdk;laskd;"}, {body: "fhskajsdasdk;laskd;"}, {body: "fhskajsdasdk;laskd;"}, {body: "fhskajsdasdk;laskd;"}]
var reviews = [{recipe_id: 2, id: 1, username: "Ryan", body: "fhasjsldkasdjalskjdasjdkasdas;"}, {recipe_id: 2, id: 1, username: "Ryan", body: "fhasjsldkasdjalskjdasjdkasdas;"},{recipe_id: 1, id: 1, username: "Jim", body: "fhasjsldkasdjalskjdasjdkasdas;"}]

$('.edit-recipe').attr('href', './editRecipe.html?id='+recipeId)
$('.leave-review').click(() => {
  $('.review').toggle()
})

function renderRecipe(recipe) {

    $('.product-page-header').append(`<h4>${recipe.title}</h4>`)
    $('.product-img').append(`<img src="${recipe.image}" height="450px">`)
    $('.product-details').append(`<p>Courtesy of: ${recipe.username}</p>
      <span class="stars">Average rating: ${recipe.avg}</span>`)
    $('.product-description').append(`<p>${recipe.description}</p>`)

}

function appendIngredients(ingredients) {
  ingredients.forEach(ingredient => {
    $('.ingredient-list').append(`<li>${ingredient.quantity} ${ingredient.uom} ${ingredient.name}</li>`)
  })
}

function appendSteps(steps) {
  steps.forEach(step => {
    $('.steps').append(`<li>${step.body}</li>`)
  })
}

function appendReviews(review) {
  console.log(recipeId);

  if (Number(recipeId) === review.recipe_id) {
    $('.reviews-area').append(
        `<article id="${review.id}" class="review z-depth-3 grid-element-wrap-col s6 m5 l10">
           <h4 class='author'>${review.username}</h6>
           <p class='body'>${review.body}</p>
           <button data-target="modal1" data-id="${review.id}" class="edit-review deep-purple lighten-2 btn">Edit comment</button>
             <div id="modal${review.id}" class="modal">
                <div class="modal-content">
                  <form>
                    <div class="row">
                      <div class="input-field">
                        <input class="review-author" type="text" value="${review.username}">
                        <label class="active" for="author"></label>
                      </div>
                      <div class="input-field">
                        <textarea class="body" type="text">${review.body}</textarea>
                      </div>
                      <div>
                        <a href="/blogPage.html?id=${review.recipe_id}" data-id="${review.id}" class="modal-action modal-close modal-save waves-effect btn-flat">Save</a>
                        <a href="/blogPage.html?id=${review.recipe_id}" class="modal-action modal-close modal-cancel waves-effect btn-flat">Cancel</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
           <a class="delete-comment waves-effect waves-light red lighten-2 btn">Delete comment</a>
        </article>`)
      $('.comment-form').hide()
      $('.comment-form')[0].reset()
    }
}

//click event to activate modal
$(document).on('click', '.edit-review', function() {
   var id = $(this).data('id')
    $('.modal').modal({
      opacity: 0.7
    })
    $('#modal'+ id).modal('open')
  })

function deleteRecipe() {
  $('.delete-recipe').click((event) => {
    event.preventDefault()
    $.ajax("https://g43recipes.herokuapp.com/recipe/"+recipeId, {
      method: "DELETE"
    })
    .then(() => {window.location.href = "/index.html"})
  })
}

function deleteReview() {

}
renderRecipe(recipe)
appendSteps(steps)
appendIngredients(ingredients)
reviews.forEach(review => {appendReviews(review)})
// $.get("https://g43recipes.herokuapp.com/recipe/"+recipeId)
//   .then(function(recipe) {
//     renderRecipe(recipe)
//     deleteRecipe(recipe)
//   })
//   .then(function() {
//     $.get("https://g43recipes.herokuapp.com/step/"+recipeId)
//     .then(function(steps) {
//       appendSteps(steps)
//     })
//   })
//   .then(function() {
//     $.get("https://g43recipes.herokuapp.com/ingredient/"+recipeId)
//     .then(function(ingredients) {
//       appendIngredients(ingredients)
//     })
//   })
//   .then(function() {
//     $.get("https://g43recipes.herokuapp.com/review/"+recipeId)
//     .then(reviews => {
//       reviews.forEach(review => {
//         appendReview(review)
//     })
//   })
//   .then(deleteReview)
// })
