document.addEventListener("DOMContentLoaded", function () {
  const buttonRanking = document.querySelector("#rank");

  // Use querySelectorAll to get NodeLists
  const newsHeaderDivs = document.querySelectorAll(".news-header-content");
  const newsContentDivs = document.querySelectorAll(".news-content");
  const infoHeaderDivs = document.querySelectorAll(".info-header-content");
  const infoContentDivs = document.querySelectorAll(".info-content");
  const rankElement = document.getElementById("rank");

  function toggleRank() {
    if (
      rankElement.style.display === "none" ||
      rankElement.style.display === ""
    ) {
      // Hide other elements
      newsHeaderDivs.forEach((div) => (div.style.display = "none"));
      newsContentDivs.forEach((div) => (div.style.display = "none"));
      infoHeaderDivs.forEach((div) => (div.style.display = "none"));
      infoContentDivs.forEach((div) => (div.style.display = "none"));
      // Show the rank element
      rankElement.style.display = "block";
    } else {
      // Show other elements
      newsHeaderDivs.forEach((div) => (div.style.display = "block"));
      newsContentDivs.forEach((div) => (div.style.display = "block"));
      infoHeaderDivs.forEach((div) => (div.style.display = "block"));
      infoContentDivs.forEach((div) => (div.style.display = "block"));
      // Hide the rank element
      rankElement.style.display = "none";
    }
  }

  if (buttonRanking) {
    buttonRanking.addEventListener("click", toggleRank);
  }
});


let currentIndex = 0;
const carouselInner = document.querySelector(".carousel-inner");
const newsItems = document.querySelectorAll(".news-item");

function moveCarousel(direction) {
  const totalItems = newsItems.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * (newsItems[0].offsetWidth + 10);
  carouselInner.style.transform = `translateX(${offset}px)`;
}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    moveCarousel(1);
  } else {
    moveCarousel(-1);
  }
});
