const projectContentList = [
  {
    image: "1/1.png",
    heading: "Genderless Kei - Japan's Hot",
    paragraph:
      "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    class: "project-content",
  },
  {
    image: "image/image.png",
    heading: "Better Strategy & Quality",
    paragraph:
      "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    class: "project-content active",
  },
  {
    image: "2/2.png",
    heading: "Genderless Kei - Japan's Hot",
    paragraph:
      "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    class: "project-content",
  },
];

var projects = "";
for (let idx in projectContentList) {
  projects += `
        <div class='${projectContentList[idx].class}' data-image='./images/${projectContentList[idx].image}'
        style="height:23vh; overflow:auto;">
            <div class="font-weight-bold mb-1">${projectContentList[idx].heading}</div>
            <p>${projectContentList[idx].paragraph}</p>
        </div>
        `;
}
document.getElementById("projects-list").innerHTML = projects;

$(".project-content").on("click", function () {
  var imageUrl = $(this).data("image");
  $("#projectImage").attr("src", imageUrl);

  // Remove active class from all project contents and add to the clicked one
  $(".project-content").removeClass("active");
  $(this).addClass("active");
});
