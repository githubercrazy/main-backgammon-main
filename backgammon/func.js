document.addEventListener('DOMContentLoaded', function() {
  // Select the buttons
  const buttonH2H = document.querySelector('.news-box-header-btn-toggle'); // Button for H2H
  const buttonAchievements = document.querySelector('.news-box-header-btn-achievements'); // Button for Achievements

  // Select the divs
  const tournamentsDiv = document.getElementById('tournaments');
  const matchDiv = document.getElementById('match');
  const h2hDiv = document.getElementById('h2h');
  const achievementsDiv = document.getElementById('achievements');

  // Function to toggle visibility for H2H
  function toggleH2H() {
      if (h2hDiv.style.display === 'none' || h2hDiv.style.display === '') {
          // Hide tournaments, match, and achievements
          tournamentsDiv.style.display = 'none';
          matchDiv.style.display = 'none';
          achievementsDiv.style.display = 'none';
          // Show H2H
          h2hDiv.style.display = 'block';
      } else {
          // Show tournaments and match
          tournamentsDiv.style.display = 'block';
          matchDiv.style.display = 'block';
          achievementsDiv.style.display = 'none';
          // Hide H2H
          h2hDiv.style.display = 'none';
      }
  }

  // Function to toggle visibility for Achievements
  function toggleAchievements() {
      if (achievementsDiv.style.display === 'none' || achievementsDiv.style.display === '') {
          // Hide tournaments, match, and h2h
          tournamentsDiv.style.display = 'none';
          matchDiv.style.display = 'none';
          h2hDiv.style.display = 'none';
          // Show achievements
          achievementsDiv.style.display = 'block';
      } else {
          // Show tournaments and match
          tournamentsDiv.style.display = 'block';
          matchDiv.style.display = 'block';
          h2hDiv.style.display = 'none';
          // Hide achievements
          achievementsDiv.style.display = 'none';
      }
  }

  // Check if buttons exist before adding event listeners
  if (buttonH2H) {
      buttonH2H.addEventListener('click', toggleH2H);
  }

  if (buttonAchievements) {
      buttonAchievements.addEventListener('click', toggleAchievements);
  }
});
