document.addEventListener("DOMContentLoaded", function () {
    function initializePagination(tableId, rowsPerPage, paginationContainerClass) {
        const table = document.getElementById(tableId);
        if (!table) {
            console.error(`Table with ID '${tableId}' not found.`);
            return;
        }

        // Get the header row and data rows
        const headerRow = table.querySelector("thead");  // Header row
        const rows = Array.from(table.querySelectorAll("tbody tr"));  // Data rows
        const totalPages = Math.ceil(rows.length / rowsPerPage);
        const paginationContainer = document.querySelector(paginationContainerClass);

        if (!paginationContainer) {
            console.error(`Pagination container with class '${paginationContainerClass}' not found.`);
            return;
        }

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

            // Always show the header row
            if (headerRow) {
                headerRow.style.display = "";  // Make sure header is always visible
            }

            // Show or hide data rows based on pagination
            rows.forEach((row, index) => {
                row.style.display = index >= start && index < end ? "" : "none";
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

        // Initialize the table view
        if (rows.length > 0) {
            createPaginationButtons();
            showPage(currentPage);
        } else {
            paginationContainer.innerHTML = "<p>No rows to display</p>";
        }
    }

    // Initialize pagination for both tables
    initializePagination("tournamentTable", 10, ".pagination-container");
    initializePagination("matchTable", 10, ".pagination-container-match");
});
