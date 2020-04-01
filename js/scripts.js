$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();

    var userWords = $("#userInput").val();
    function minusNonAlphabet(all) {
      return all.replace([^a-zA-Z0-9_]);
    };

    console.log();
  });
});