document.addEventListener("DOMContentLoaded", function () {
  // Select the buttons
  


  // rating.html
  const buttonH2H = document.querySelector(".news-box-header-btn-toggle");
  const buttonAchievements = document.querySelector(
    ".news-box-header-btn-achievements"
  );
  const buttonGallery = document.querySelector(".news-box-header-btn-gallery");
  const buttonMatches = document.querySelector(".news-box-header-btn-main");
  const buttonVideo = document.querySelector(".news-box-header-btn-video");
  const buttonRank = document.querySelector(".news-box-header-btn-rating")
  // Select the divs
  const tournamentsDiv = document.getElementById("tournaments");
  const matchDiv = document.getElementById("match");
  const h2hDiv = document.getElementById("h2h");
  const achievementsDiv = document.getElementById("achievements");
  const galleryDivElement = document.getElementById("gallery");
  const videoDivElement = document.getElementById("video");
  const rankElement = document.getElementById("rank");
  // Function to toggle visibility for H2H


  function toggleRank() {
    if (
      rankElement.style.display === "none" ||
      rankElement.style.display === ""
    ) {
      tournamentsDiv.style.display = "none";
      matchDiv.style.display = "none";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      galleryDivElement.style.display = "none";
      videoDivElement.style.display = "none";
      rankElement.style.display = "block";
    } else{
      tournamentsDiv.style.display = "block";
      matchDiv.style.display = "block";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      galleryDivElement.style.display = "none";
      videoDivElement.style.display = "none";
      rankElement.style.display = "none";
    }
  }

  function toggleH2H() {
    if (h2hDiv.style.display === "none" || h2hDiv.style.display === "") {
      tournamentsDiv.style.display = "none";
      matchDiv.style.display = "none";
      videoDivElement.style.display = "none";
      achievementsDiv.style.display = "none";
      galleryDivElement.style.display = "none";
      h2hDiv.style.display = "block";
      rankElement.style.display = "none";
    } else {
      tournamentsDiv.style.display = "block";
      matchDiv.style.display = "block";
      achievementsDiv.style.display = "none";
      h2hDiv.style.display = "none";
      videoDivElement.style.display = "none";
      rankElement.style.display = "none";
    }
  }

  // Function to toggle visibility for Achievements
  function toggleAchievements() {
    if (
      achievementsDiv.style.display === "none" ||
      achievementsDiv.style.display === ""
    ) {
      tournamentsDiv.style.display = "none";
      videoDivElement.style.display = "none";
      matchDiv.style.display = "none";
      h2hDiv.style.display = "none";
      galleryDivElement.style.display = "none";
      achievementsDiv.style.display = "block";
      rankElement.style.display = "none";
    } else {
      tournamentsDiv.style.display = "block";
      matchDiv.style.display = "block";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "none";
      rankElement.style.display = "none";
    }
  }

  // Function to toggle visibility for Gallery
  function toggleGallery() {
    if (
      galleryDivElement.style.display === "none" ||
      galleryDivElement.style.display === ""
    ) {
      tournamentsDiv.style.display = "none";
      matchDiv.style.display = "none";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "none";
      galleryDivElement.style.display = "flex";
      rankElement.style.display = "none";
    } else {
      tournamentsDiv.style.display = "block";
      matchDiv.style.display = "block";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "none";
      galleryDivElement.style.display = "none";
      rankElement.style.display = "none";
    }
  }

  // Function to toggle visibility for Matches
  function toggleMatches() {
    if (matchDiv.style.display === "none" || matchDiv.style.display === "") {
      tournamentsDiv.style.display = "block";
      matchDiv.style.display = "block";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "none";
      galleryDivElement.style.display = "none";
      rankElement.style.display = "none";
    } else {
      tournamentsDiv.style.display = "block";
      matchDiv.style.display = "block";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "none";
      galleryDivElement.style.display = "none";
      rankElement.style.display = "none";
    }
  }

  function toggleVideo() {
    if (
      galleryDivElement.style.display === "none" ||
      galleryDivElement.style.display === ""
    ) {
      tournamentsDiv.style.display = "none";
      matchDiv.style.display = "none";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "block";
      galleryDivElement.style.display = "none";
      rankElement.style.display = "none";
    } else {
      tournamentsDiv.style.display = "none";
      matchDiv.style.display = "none";
      h2hDiv.style.display = "none";
      achievementsDiv.style.display = "none";
      videoDivElement.style.display = "block";
      galleryDivElement.style.display = "none";
      rankElement.style.display = "none";
    }
  }

  // Add event listeners
  if (buttonH2H) {
    buttonH2H.addEventListener("click", toggleH2H);
  }

  if (buttonAchievements) {
    buttonAchievements.addEventListener("click", toggleAchievements);
  }

  if (buttonGallery) {
    buttonGallery.addEventListener("click", toggleGallery);
  }

  if (buttonMatches) {
    buttonMatches.addEventListener("click", toggleMatches);
  }
  if (buttonVideo) {
    buttonVideo.addEventListener("click", toggleVideo);
  }
  if (buttonRank){
    buttonRank.addEventListener("click", toggleRank)
  }
});
