const growthCardsList = [
  {
    image: "likeIcon.png",
    heading: "199+",
    text: "Satisfied Customers",
    class: "growth-card",
  },
  {
    image: "clockIcon.png",
    heading: "1591+",
    text: "Days of Operation",
    class: "growth-card",
  },
  {
    image: "tickIcon.png",
    heading: "283+",
    text: "Complete Projects",
    class: "growth-card",
  },
  {
    image: "winIcon.png",
    heading: "75+",
    text: "Win Awards",
    class: "growth-card",
  },
];
var growthCards = "";
for (let idx in growthCardsList) {
  growthCards += `
        <div class="${growthCardsList[idx].class}">
            <img src="./images/${growthCardsList[idx].image}" alt="Icon Image" class="mb-2" style="width:30px; height:30px;" />
            <h2>${growthCardsList[idx].heading}</h2>
            <p>${growthCardsList[idx].text}</p>
        </div>
        `;
}
document.getElementById("growth-cards").innerHTML = growthCards;
