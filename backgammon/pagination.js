document.addEventListener("DOMContentLoaded", function () {
    function initializePagination(containerId, rowsPerPage, paginationContainerClass) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID '${containerId}' not found.`);
            return;
        }

        // Check if it's a table or carousel
        let items;
        if (container.tagName.toLowerCase() === 'table') {
            const rows = Array.from(container.querySelectorAll("tbody tr"));  // Get all table rows
            items = rows;
        } else if (container.classList.contains('carousel-inner')) {
            items = Array.from(container.querySelectorAll(".news-item"));  // Get all carousel items
        }

        if (!items || items.length === 0) {
            console.error("No items found to paginate.");
            return;
        }

        const paginationContainer = document.querySelector(paginationContainerClass);
        if (!paginationContainer) {
            console.error(`Pagination container with class '${paginationContainerClass}' not found.`);
            return;
        }

        const totalPages = Math.ceil(items.length / rowsPerPage);
        let currentPage = 1;

        // Function to create pagination buttons
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

        // Function to show a specific page
        function showPage(page) {
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            // Show or hide items based on pagination
            items.forEach((item, index) => {
                item.style.display = index >= start && index < end ? "" : "none";
            });

            updateActiveButton();
        }

        // Function to update the active button for pagination
        function updateActiveButton() {
            const buttons = paginationContainer.querySelectorAll(".pagination-btn");
            buttons.forEach((button, index) => {
                button.classList.toggle("active", index + 1 === currentPage);
            });
        }

        // Initialize the view for table or carousel
        createPaginationButtons();
        showPage(currentPage);
    }

    // Initialize pagination for both tables and carousel
    initializePagination("tournamentTable", 10, ".pagination-container");
    initializePagination("matchTable", 10, ".pagination-container-match");
    initializePagination("carousel-inner", 10, ".pagination-container-carousel");
});
