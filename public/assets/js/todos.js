// 'use strict';
// $("#create-recipe").on("submit", event => {
//   event.preventDefault();

//   $.ajax({
//     url: "/api/post",
//     method: "POST",
//     data: {
//       title: $("#title").val().trim(),
//     }
//   })
// });
  // this will need to be uncommented to sent to other page 
  // .then(newTodo => {
  //   location.reload("all");
  // });


  // todo
  // event:click on searchButton
  // Get value of input field
  // AJAX request post /nutrition

  function renderIngredients(Ingredient){

  const queryURL = "https://api.edamam.com/api/nutrition-data?app_id=7b0446a5&app_key=5221d18a089642fa6c1b4023c16a168c&ingr=$" + Ingredient ;
  $.ajax({
    type: "POST",
    url: queryURL,
    data: data,
    success: success
  });
}

// ***********************findIngredients takes user input and passes it to renderIngredients function**************************
  function findIngredients(){
    var nutritionInput = ("#nutrition").val().trim();
    renderIngredients(nutritionInput)
  }
  // *************************On-click event runs findIngredients function********************************
  $("#searchBTN").on("click", function(event){
    $("#nutritionResult").empty().append();
    event.preventDefault();
    findIngredients();
  }


// $(".complete").on("change", event => {
//   const id = $(event.target).parent().attr('data-id');

//   $.ajax({
//     url: `/api/todos/${id}`,
//     method: "PUT",
//     data: {
//       isCompleted: event.target.checked
//     }
//   }).then(() => {
//     console.log(`toggled ID ${id}`);
//   }).catch(err => {
//     console.log(err);
//     location.reload();
//   });
// });

// $(".destroy").on("click", event => {
//   const id = $(event.target).parent().attr("data-id");

//   $.ajax({
//     url: `/api/todos/${id}`,
//     method: "DELETE"
//   }).then(() => {
//     console.log(`deleted ID ${id}`);
//     location.reload();
//   }).catch(err => {
//     console.log(err);
//     location.reload();
//   });
// });