const urlArr = window.location.href.split('=')
const recipeId = urlArr[1]

// var recipeArr = [
//   {id: 1,  image: "./stylesheets/img1.jpg", title:"Paella", avgRating: 4.5, },
//   {id: 2,  image: "./stylesheets/img2.jpg", title:"Paella", avgRating: 4.5, },
//   {id: 3,  image: "./stylesheets/img1.jpg", title:"Paella", avgRating: 4.5, },
//   {id: 4,  image: "./stylesheets/img2.jpg", title:"Paella", avgRating: 4.5, }
// ]


function renderRecipe(recipe) {

    $('.product-page-header').append(`<h4>${recipe.title}</h4>`)
    $('.product-img').append(`<img src="${recipe.image}">`)
    $('.product-details').append(`<p>${recipe.title}/${recipe.username}</p>
      <span class="stars">${recipe.rating}</span>`)
    $('.product-description').append(`<p>${recipe.description}</p>`)

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
    $('.reviews-area').append(
        `<article id="${review.id}" class="review z-depth-3 grid-element-wrap-col s6 m5 l10">
           <h4 class='author'>${review.username}</h6>
           <p class='body'>${review.body}</p>
           <button data-target="modal1" data-id="${review.id}" class="edit deep-purple lighten-2 btn">Edit comment</button>
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


// $.get("https://g43recipes.herokuapp.com/recipe/"+recipeId)
//   .then(function(recipe) {
//     renderRecipe(recipe)
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
