let category = "famous";
let count = 1;
let loading = true;
let selected = "selected";

// code to be executed when dom is ready
$(document).ready(function() {
  getQuote(category, count);
});

$(".update-js").on("click", function(event) {
  event.preventDefault();
  $(".quoteBox").removeClass("show");
  $(".loader").removeClass("hide");
  getQuote(category);
});

function getQuote(category, count) {
  console.log(category);
  count = count || 1;
  $.ajax(`https://andruxnet-random-famous-quotes.p.mashape.com/`, {
    data: {
      cat: category,
      count: count
    },
    success: function(data, status, xhr) {
      console.info(data);
      data = JSON.parse(data);
      loading = false;
      $(".quoteBox").addClass("show");
      $(".loader").addClass("hide");
      $(".quoteBox .quote").text(data.quote);
      $(".quoteBox .author").text(data.author);
    },
    error: function() {
      console.error("quote api not responding..");
    },
    method: "GET",
    headers: {
      "X-Mashape-Key": "98qfXDFVeDmshdS655fPZD9oDwg8p1YGHi5jsnKf6eWoboBwg9",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    }
  });
}

$("#movies").on("click", function(event) {
  event.preventDefault();
  $(".quoteBox").removeClass("show");
  $(".loader").removeClass("hide");
  category = "movies";
  $(this).toggleClass(selected);
  $("#famous").toggleClass(selected);
  console.log("cator", category);
  getQuote(category);
});

$("#famous").on("click", function(event) {
  event.preventDefault();
  $(".quoteBox").removeClass("show");
  $(".loader").removeClass("hide");
  category = "famous";
  $(this).toggleClass(selected);
  $("#movies").toggleClass(selected);
  console.log("catorri", category);
  getQuote(category);
});
