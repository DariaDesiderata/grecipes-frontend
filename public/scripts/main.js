// $submit.click(function(evt) {
//   evt.preventDefault();
//   $('html, body').animate({
//     scrollTop: $('#chartArea').offset().top
//   }, 1000)
//   $('.chartText').fadeOut(700)

const $recipeCard = $('.recipe')

function addRecipes(recipes) {

  recipes.forEach(recipe => {
    $recipeCard.append(
      `<div class="card-image">
        <img class ="recipe-img" src="${recipe.image}">
        <span class="card-title">${recipe.title}</span>
      </div>
      <div class="card-content">
        <p class="recipe-description">${recipe.description}</p>
        <span class="stars">${recipe.review_stars}</span>
      </div>
      <div class="card-action">
        <a href="./recipe/${recipe.id}">See recipe</a>
      </div>
      `
    )
    //function to convert numerical value into bananas
    $.fn.stars = function() {
      return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        console.log(size, val);
        // Replace the numerical value with bananas
        $(this).html($span);
      });
    }
    //call the function
    $(function() {
        $('span.stars').stars();
    });
  })
}

// $.get("/recipes")
// .then(addRecipes)
// .catch(err => {
//   console.log(err)
// })
