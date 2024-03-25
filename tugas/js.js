const aboutButton = document.querySelector(".about button");
const container = document.querySelector(".container");
const closeButton = document.querySelector(".container button");

aboutButton.addEventListener("click", function () {
  if (window.innerWidth >= 1200 || getComputedStyle(container).display === "none") {
    container.style.display = "flex";
  } else {
    container.style.display = "none";
  }
});

if (closeButton) {
  closeButton.addEventListener("click", function () {
    container.style.display = "none";
  });
}
