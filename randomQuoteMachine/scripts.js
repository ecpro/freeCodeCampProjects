let category = "famous";
let count = 1;
let loading = true;

// code to be executed when dom is ready
$(document).ready(function() {
  if (loading) {
    $(".quoteBox").css("display", "none");
    $(".loader").css("display", "block");
    getQuote(category, count);
  }
});

$(".update-js").on("click", function(event) {
  event.preventDefault();
  $(".quoteBox").css("display", "none");
  $(".loader").css("display", "block");
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
      $(".quoteBox").css("display", "block");
      $(".loader").css("display", "none");
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
  $(".quoteBox").css("display", "none");
  $(".loader").css("display", "block");
  category = "movies";
  console.log("cator", category);
  getQuote(category);
});

$("#famous").on("click", function(event) {
  event.preventDefault();
  $(".quoteBox").css("display", "none");
  $(".loader").css("display", "block");
  category = "famous";
  console.log("catorri", category);
  getQuote(category);
});
