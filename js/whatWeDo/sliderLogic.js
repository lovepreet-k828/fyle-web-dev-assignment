let currentSlide = 0;

function showSlide(index) {
  const slider = document.getElementById("imageSlider");
  const slides = slider.querySelectorAll(".slide-img");
  const totalSlides = slides.length;
  const slideWidth = 270; // Fixed width of each image
  const visibleSlides = Math.floor(slider.clientWidth / slideWidth);
  const totalDots = Math.ceil(totalSlides / visibleSlides);

  if (index >= 0 && index < totalDots) {
    currentSlide = index;
    const offset = index * slideWidth * visibleSlides;
    slider.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    // Update dots
    updateActiveDot(index);
    console.log("active dot", index);
  }
}

function generateDots() {
  const slider = document.getElementById("imageSlider");
  const slides = slider.querySelectorAll(".slide-img");
  const totalSlides = slides.length;
  const slideWidth = 270; // Fixed width of each image
  const visibleSlides = Math.floor(slider.clientWidth / slideWidth);
  const totalDots = Math.ceil(totalSlides / visibleSlides);
  const dotsContainer = document.getElementById("dotsContainer");
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.appendChild(document.createElement("div"));
    dot.className = "dot";
    dot.onclick = () => showSlide(i);
    dotsContainer.appendChild(dot);
  }

  // Initialize the first dot as active
  updateActiveDot(0);
}

function updateActiveDot(index) {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function onSliderScroll() {
  const slider = document.getElementById("imageSlider");
  const slideWidth = 270; // Fixed width of each image
  const scrollLeft = slider.scrollLeft;
  const visibleSlides = Math.floor(slider.clientWidth / slideWidth);
  const newSlideIndex = Math.ceil(scrollLeft / (slideWidth * visibleSlides));
  updateActiveDot(newSlideIndex);
}

window.addEventListener("resize", () => {
  generateDots();
  showSlide(currentSlide);
});

// Initialize the slider on page load
window.addEventListener("load", () => {
  generateDots();
  showSlide(0);
});

generateDots();
showSlide(0);
// Add scroll event listener
document
  .getElementById("imageSlider")
  .addEventListener("scroll", onSliderScroll);

const slider = document.getElementById("imageSlider");
self.setInterval(() => {
  if (slider.scrollLeft < slider.scrollWidth) {
    slider.scrollTo({
      left: slider.scrollLeft + 270,
      behavior: "smooth",
    });
  }
  if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
}, 1500);
