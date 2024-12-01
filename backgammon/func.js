document.addEventListener("DOMContentLoaded", function () {
    // Select the buttons
    const buttonH2H = document.querySelector(".news-box-header-btn-toggle"); // Button for H2H
    const buttonAchievements = document.querySelector(".news-box-header-btn-achievements"); // Button for Achievements
    const buttonGallery = document.querySelector(".news-box-header-btn-gallery"); // Button for Gallery
    
    // Select the divs
    const tournamentsDiv = document.getElementById("tournaments");
    const matchDiv = document.getElementById("match");
    const h2hDiv = document.getElementById("h2h");
    const achievementsDiv = document.getElementById("achievements");
    const galleryDivElement = document.getElementById("gallery"); // Renamed to avoid conflict
  
    // Function to toggle visibility for H2H
    function toggleH2H() {
      if (h2hDiv.style.display === "none" || h2hDiv.style.display === "") {
        tournamentsDiv.style.display = "none";
        matchDiv.style.display = "none";
        achievementsDiv.style.display = "none";
        galleryDivElement.style.display = "none";
        h2hDiv.style.display = "block";
      } else {
        tournamentsDiv.style.display = "block";
        matchDiv.style.display = "block";
        achievementsDiv.style.display = "none";
        h2hDiv.style.display = "none";
      }
    }
  
    // Function to toggle visibility for Achievements
    function toggleAchievements() {
      if (achievementsDiv.style.display === "none" || achievementsDiv.style.display === "") {
        tournamentsDiv.style.display = "none";
        matchDiv.style.display = "none";
        h2hDiv.style.display = "none";
        galleryDivElement.style.display = "none";
        achievementsDiv.style.display = "block";
      } else {
        tournamentsDiv.style.display = "block";
        matchDiv.style.display = "block";
        h2hDiv.style.display = "none";
        achievementsDiv.style.display = "none";
      }
    }
  
    // Function to toggle visibility for Gallery
    function toggleGallery() {
      if (galleryDivElement.style.display === "none" || galleryDivElement.style.display === "") {
        tournamentsDiv.style.display = "none";
        matchDiv.style.display = "none";
        h2hDiv.style.display = "none";
        achievementsDiv.style.display = "none";
        galleryDivElement.style.display = "block";
      } else {
        tournamentsDiv.style.display = "block";
        matchDiv.style.display = "block";
        h2hDiv.style.display = "none";
        achievementsDiv.style.display = "none";
        galleryDivElement.style.display = "none";
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
  });
  