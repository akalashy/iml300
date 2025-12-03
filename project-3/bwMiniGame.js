// bwMiniGame.js

$(document).ready(function () {
  // When user clicks an option inside any scenario
  $(".scenario").on("click", ".option-btn", function () {
    const $btn = $(this);
    const $scenario = $btn.closest(".scenario");
    const $feedback = $scenario.find(".feedback-text");

    // Remove active state from all buttons in this scenario
    $scenario.find(".option-btn").removeClass("active-option");

    // Add active state to the clicked one
    $btn.addClass("active-option");

    // Get feedback text from data attribute & show it
    const text = $btn.data("feedback");
    $feedback.text(text);
  });
});
