const slidesList = [
  {
    image: "1/1.png",
    heading: "WEB DEVELOPMENT",
    paragraph:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.",
    link: "https://www.fylehq.com",
  },
  {
    image: "2/2.png",
    heading: "WEB DEVELOPMENT",
    paragraph:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.",
    link: "https://www.fylehq.com",
  },
  {
    image: "image/image.png",
    heading: "WEB DEVELOPMENT",
    paragraph:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.",
    link: "https://www.fylehq.com",
  },
  {
    image: "3/3.png",
    heading: "WEB DEVELOPMENT",
    paragraph:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.",
    link: "https://www.fylehq.com",
  },
];
var slides = "";
itr = 3;
while (itr--)
  for (let slideIdx in slidesList) {
    slides += `
    <div class="card">
    <img src="images/${slidesList[slideIdx].image}" class="slide-img w-100 h-100" alt="Service 1" />
    <div class="card-img-overlay text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center overlay">
      <img src="images/icon/icon.png" alt="icon" style="width:40px;height:40px;"/>
        <h5 class="text-white my-3">${slidesList[slideIdx].heading}</h5>
      <p class="text-white mb-5">
        ${slidesList[slideIdx].paragraph}
      </p>
      <a class="btn btn-light" style="color: #f64e60; font-size:0.9rem; vertical-align:middle;" href="${slidesList[slideIdx].link}" target="_blank">
        READ MORE <span style="font-size:2.5rem; line-height:8px;">
            &rarr;</span></a>
    </div>
  </div>
    `;
  }
document.getElementById("imageSlider").innerHTML = slides;
