// $submit.click(function(evt) {
//   evt.preventDefault();
//   $('html, body').animate({
//     scrollTop: $('#chartArea').offset().top
//   }, 1000)
//   $('.chartText').fadeOut(700)

const $recipeCard = $('.recipe')

function addRecipes(recipes) {

  recipes.forEach(recipe => {

    $.get("https://g43recipes.herokuapp.com/review/${recipe.id}")
    .then((reviews) => {
      var sum = 0
      var avgRating = sum/reviews.length
      for (var i = 0; i < reviews.length; i++) {
        var rating = reviews[i].stars
        sum +=rating
      }
        $recipeCard.append(
          `<div class="card-image">
            <img class ="recipe-img" src="${recipe.image}">
            <span class="card-title">${recipe.title}</span>
          </div>
          <div class="card-content">
            <p class="recipe-description">${recipe.description}</p>
            <span class="stars">${avgRating}</span>
          </div>
          <div class="card-action">
            <a href="./recipe.html?id=${recipe.id}">See recipe</a>
          </div>
          `
        )
    )}
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

$.get("https://g43recipes.herokuapp.com/recipes")
.then(addRecipes)
.catch(err => {
  console.log(err)
})
