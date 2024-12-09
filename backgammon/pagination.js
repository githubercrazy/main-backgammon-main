document.addEventListener("DOMContentLoaded", function () {
    function initializePagination(containerId, itemSelector, itemsPerPage, paginationContainerClass) {
      const container = document.getElementById(containerId);
      if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
      }
  
      const items = Array.from(container.querySelectorAll(itemSelector));
      if (!items || items.length === 0) {
        console.error(`No items found inside the container '${containerId}'. Check if '${itemSelector}' elements exist.`);
        return;
      }
  
      const paginationContainer = document.querySelector(paginationContainerClass);
      if (!paginationContainer) {
        console.error(`Pagination container with class '${paginationContainerClass}' not found.`);
        return;
      }
  
      const totalPages = Math.ceil(items.length / itemsPerPage);
      let currentPage = 1;
  
      // Create pagination buttons
      function createPaginationButtons() {
        paginationContainer.innerHTML = ""; // Clear existing buttons
        for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement("button");
          button.textContent = i;
          button.classList.add("pagination-btn");
          if (i === currentPage) {
            button.classList.add("active");
          }
          button.addEventListener("click", () => {
            currentPage = i;
            showPage(currentPage);
          });
          paginationContainer.appendChild(button);
        }
      }
  
      // Show specific page of items
      function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
    
        items.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = "table-row"; // For table rows
            } else {
                item.style.display = "none"; // Hide items outside the current page
            }
        });
    
        updateActiveButton();
    }
    
  
      // Update the active button for pagination
      function updateActiveButton() {
        const buttons = paginationContainer.querySelectorAll(".pagination-btn");
        buttons.forEach((button, index) => {
          button.classList.toggle("active", index + 1 === currentPage);
        });
      }
  
      // Initialize the view
      createPaginationButtons();
      showPage(currentPage);
    }
  
    // Initialize pagination for different sections
    const paginatedSections = [
      { containerId: "tournamentTable", itemSelector: "tbody tr", itemsPerPage: 10, paginationClass: ".pagination-container" },
      { containerId: "matchTable", itemSelector: "tbody tr", itemsPerPage: 50, paginationClass: ".pagination-container-match" },
      { containerId: "gallery-inner", itemSelector: ".gallery-item", itemsPerPage: 50, paginationClass: ".pagination-container-gallery" },
      { containerId: "video-inner", itemSelector: ".video-item", itemsPerPage: 50, paginationClass: ".pagination-container-video" },
      { containerId: "rankData", itemSelector: "tbody tr", itemsPerPage: 50, paginationClass: ".pagination-container-rank" }, // Add this line for rank table pagination
    ];
    
  
    paginatedSections.forEach(({ containerId, itemSelector, itemsPerPage, paginationClass }) =>
      initializePagination(containerId, itemSelector, itemsPerPage, paginationClass)
    );
  });
  