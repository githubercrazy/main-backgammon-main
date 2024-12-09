document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const table = document.querySelector(".h2h-table");
    const h2hTitles = table.querySelectorAll(".h2h-title");
    const h2hData = table.querySelectorAll(".h2h-data");
  
    // Initially hide the titles and data
    table.style.display = "none";
  
    toggleButton.addEventListener("click", function () {
      const isHidden = table.style.display === "none";
  
      if (isHidden) {
        table.style.display = "table";
        toggleButton.textContent = "closed";
      } else {
        table.style.display = "none";
        toggleButton.textContent = "all matches";
      }
    });
  });
  