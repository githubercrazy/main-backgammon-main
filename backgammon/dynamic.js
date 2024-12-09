document.addEventListener("DOMContentLoaded", function () {
    // Select the buttons
    const buttonH2H = document.querySelector(".news-box-header-btn-toggle"); 
    const buttonAchievements = document.querySelector(".news-box-header-btn-achievements"); 
    const buttonGallery = document.querySelector(".news-box-header-btn-gallery"); 
    const buttonMatches = document.querySelector(".news-box-header-btn-main");
    const buttonRank = document.querySelector(".news-box-header-btn-rating")
    const buttons = document.querySelectorAll(".button-container-news button");


    buttons.forEach((button) => {
        button.addEventListener("click", function () {

            buttons.forEach((b) => b.classList.remove("green-background"));


            this.classList.add("green-background");
            changeBackgroundColor(this);


            if (this === buttonH2H) {
                toggleSection("h2h");
            } else if (this === buttonAchievements) {
                toggleSection("achievements");
            } else if (this === buttonGallery) {
                toggleSection("gallery");
            } else if (this === buttonRank) {
                toggleSection("rank");
            } 
        });
    });


    function toggleSection(section) {

        const sections = ["tournaments", "match", "h2h", "achievements", "gallery", "rank"];
        sections.forEach((sectionId) => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) { 
                sectionElement.style.display = "none";
            }
        });

        // Show the selected section if it exists
        const selectedSection = document.getElementById(section);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    }


    function changeBackgroundColor(button) {

        button.style.backgroundColor = "green";
        button.style.color = "white"; 

        buttons.forEach((b) => {
            if (b !== button) {
                b.style.backgroundColor = ""; 
                b.style.color = "";
            }
        });
    }
});
