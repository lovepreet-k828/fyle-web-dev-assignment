const performanceCardsList = [
  {
    image: "visionIcon.png",
    heading: "Clarified Vision & Target",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    image: "performanceIcon.png",
    heading: "High Performance",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    image: "securityIcon.png",
    heading: "Maintain Security",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    image: "strategyIcon.png",
    heading: "Better Strategy & Quality",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
];
var performanceCards = "";
for (let idx in performanceCardsList) {
  performanceCards += `
          <div>
              <img src="./images/${performanceCardsList[idx].image}" style="width:50px;height:50px;"/>
              <div class="font-weight-bold my-1">${performanceCardsList[idx].heading}</div>
              <p>${performanceCardsList[idx].text}</p>
          </div>
          `;
}
document.getElementById("performance-cards").innerHTML = performanceCards;
