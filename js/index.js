$(document).ready(function () {
  function loadHTML(elementId) {
    $(`#${elementId}`).load(`./templates/${elementId}.html`);
  }

  loadHTML("mainContent");
  loadHTML("whatWeDo");
  loadHTML("whyChooseUs");
  loadHTML("ourProject");
  loadHTML("expertsGrowth");
  loadHTML("clientsFeedback");
  loadHTML("footer");
  loadHTML("popUpForm");
});
