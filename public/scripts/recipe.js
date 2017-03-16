const urlArr = window.location.href.split('=')
const recipeId = urlArr[1]

$('.edit-recipe').attr('href', './editRecipe.html?id='+recipeId)
$('.leave-review').click(() => {
  $('.review-form').toggle()
})

function renderRecipe(recipe) {
    var rating;
    recipe.avg === null ? rating = "No reviews yet" : rating = parseFloat(recipe.avg).toFixed(1)
    $('.product-page-header').append(`<h4>${recipe.title}</h4>`)
    $('.product-img').append(`<img src="${recipe.image}" height="450px">`)
    $('.product-details').append(`<p>Courtesy of: ${recipe.user_id}</p>
      <span class="stars">Average rating: ${rating}</span>`)
    $('.product-description').append(`<p>${recipe.description}</p>`)

}

function appendIngredients(ingredients) {
  ingredients.forEach(ingredient => {
    $('.ingredient-list').append(`<li>${ingredient.quantity} ${ingredient.uom} ${ingredient.name}</li>`)
  })
}

function appendSteps(step) {

    $('.steps').append(`<li class="step">${step.step_body}</li>`)
  }

function appendReview(review) {
  if (Number(recipeId) === review.recipe_id) {

    $('.reviews-area').append(
        `<article id="${review.id}" class="review z-depth-3 grid-element-wrap-col s6 m5 l10 left-align">
           <h5 class='body'>${review.body}</h5>
           <p class='author'>Review by: ${review.user_id}</p>
           <p class="rating">My rating: ${review.stars}</p>
           <button data-target="modal1" data-id="${review.id}" class="edit-review btn teal accent-4">Edit review</button>
             <div id="modal${review.id}" class="modal">
                <div class="modal-content">
                  <form>
                    <div class="row">
                      <div class="input-field">
                        <input class="review-author" type="text" value="${review.user_id}" disabled>
                        <label class="active" for="author"></label>
                      </div>
                      <div class="input-field">
                        <input class="review-rating" type="number" min="0" max="5" value="${review.stars}">
                        <label class="active" for="author"></label>
                      </div>
                      <div class="input-field">
                        <textarea class="review-body" type="text">${review.body}</textarea>
                      </div>
                      <div>
                        <a href="./recipe.html?id=${recipeId}" data-id="${review.id}" class="modal-action modal-close modal-save waves-effect btn-flat">Save</a>
                        <a href="./recipe.html?id=${recipeId}" class="modal-action modal-close modal-cancel waves-effect btn-flat">Cancel</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
           <a class="delete-review waves-effect waves-light deep-orange lighten-2 btn" id="${review.id}">Delete review</a>
        </article>`)
      // $('.review').hide()
      // $('.review')[0].reset()
    }
}

//click event to activate edit review modal
$(document).on('click', '.edit-review', function() {
   var id = $(this).data('id')
    $('.modal').modal({
      opacity: 0.7
    })
    $('#modal'+ id).modal('open')
})
//click event to edit review
$(document).on('click', '.modal-save', function(event) {
  event.preventDefault()
  var editUrl = "https://g43recipes.herokuapp.com/review/"+$(this).data('id')
  var editedReview = {}
  console.log(editUrl);
  editedReview.stars = $('.review-rating').val(),
  editedReview.body = $('review-body').val(),
  editedReview.recipe_id = recipeId,
  editedReview.user_id = $('.review-author').val()

  $.ajax(editUrl, {
    method: "PUT",
    contentTYpe: "application/json",
    data: JSON.stringify(editedReview)
  })
  .then(() => {
    window.location.reload()
  })
})

function deleteRecipe() {
  $('.delete-recipe').click((event) => {
    event.preventDefault()
    $.ajax("https://g43recipes.herokuapp.com/recipe/"+recipeId, {
      method: "DELETE"
    })
    .then(() => {window.location.reload()})
  })
}

function deleteReview() {
  $('.delete-review').click(function(event) {
    event.preventDefault()
    var reviewId = $(this).attr('id')
    $.ajax("https://g43recipes.herokuapp.com/review/"+reviewId, {
      method: "DELETE"
    })
    .then(() => {window.location.reload()})
  })
}

$.get("https://g43recipes.herokuapp.com/recipe/"+recipeId)
  .then(function(recipe) {
    renderRecipe(recipe)
    deleteRecipe(recipe)
  })
  .then(function() {
    $.get("https://g43recipes.herokuapp.com/step/"+recipeId)
    .then(steps => {
      steps.forEach(step => {
        appendSteps(step)
      })
    })
  })
  .then(function() {
    $.get("https://g43recipes.herokuapp.com/ingredient/"+recipeId)
    .then(function(ingredients) {
      appendIngredients(ingredients)
    })
  })
  .then(function() {
    $.get("https://g43recipes.herokuapp.com/review/"+recipeId)
    .then(reviews => {
      reviews.forEach(review => {
        appendReview(review)
    })
  })
  .then(deleteReview)
})
