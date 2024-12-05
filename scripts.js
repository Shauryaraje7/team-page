const navItems = document.querySelectorAll('.nav-item');
const teamSections = document.querySelectorAll('.team-section');
const highlighter = document.querySelector('.highlighter');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const selectedItemDisplay = document.querySelector('.selected-item');

// Function to move the highlighter to the clicked link
function moveHighlighter(element) {
  const rect = element.getBoundingClientRect();
  highlighter.style.width = `${rect.width}px`;
  highlighter.style.left = `${element.offsetLeft}px`;
}

// Set initial position of the highlighter to the first active link
const activeLink = document.querySelector('.nav-item.active');
if (activeLink) {
  moveHighlighter(activeLink);
}

// Add click event listener to each link
navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior

    // Update the selected item's name (only visible on mobile)
    selectedItemDisplay.textContent = this.textContent;

    // Update active link styling
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    moveHighlighter(this);

    // Hide all team sections and show the selected one
    teamSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the team section based on the clicked link
    const team = this.getAttribute('data-team');
    document.getElementById(team).style.display = 'block';

    // Close the mobile menu after clicking a link (for Android and mobile views)
    if (window.innerWidth <= 1200) {
      navLinks.classList.remove('show');
    }
  });
});

// Toggle menu for smaller screens
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Adjust highlighter position on window resize
window.addEventListener('resize', () => {
  const currentActive = document.querySelector('.nav-item.active');
  if (currentActive) {
    moveHighlighter(currentActive);
  }
});

// Dummy team members for each team
const teamMembers = {
  "tech-team": [
    { name: "Alice Johnson", role: "Project Manager", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/alice-johnson" },
    { name: "Bob Smith", role: "Developer", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/bob-smith" },
    { name: "Charlie Brown", role: "Designer", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/charlie-brown" },
    { name: "Diana Ross", role: "QA Engineer", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/diana-ross" }
  ],
  "operating-team": [
    { name: "Eve White", role: "Operations Lead", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/eve-white" },
    { name: "Frank Green", role: "Operations Analyst", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/frank-green" },
    { name: "Grace Lee", role: "Logistics Manager", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/grace-lee" }
  ],

  "creative-team": [
    { name: "Eve White", role: "Operations Lead", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/eve-white" },
    { name: "Frank Green", role: "Operations Analyst", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/frank-green" },
    { name: "Grace Lee", role: "Logistics Manager", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/grace-lee" }
  ],
  "outreach-team": [
    { name: "James Hall", role: "Outreach Coordinator", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/james-hall" },
    { name: "Kathy Nelson", role: "Community Manager", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/kathy-nelson" }
  ],
  "media-team": [
    { name: "Leo Harris", role: "Media Specialist", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/leo-harris" },
    { name: "Mia Young", role: "Photographer", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/mia-young" }
  ],
  "content-team": [
    { name: "Nina Martin", role: "Content Writer", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/nina-martin" },
    { name: "Oscar King", role: "Content Strategist", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/oscar-king" }
  ],
  "corporate-team": [
    { name: "Paul Walker", role: "Business Analyst", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/paul-walker" },
    { name: "Quinn Adams", role: "Corporate Strategy Lead", img: "https://via.placeholder.com/200", linkedin: "https://www.linkedin.com/in/quinn-adams" }
  ]
};

// Function to generate team cards
function generateTeamCards(teamId, teamContainer, members) {
  if (!teamContainer) {
    console.error(`Container for team ${teamId} not found.`);
    return;
  }

  teamContainer.innerHTML = '';  // Clear previous team cards

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('team-card');

    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}">
      <div class="name">${member.name}</div>
      <div class="role">${member.role}</div>
      <a href="${member.linkedin}" target="_blank" class="linkedin-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2013.png" alt="LinkedIn" class="linkedin-logo">
      </a>
    `;

    teamContainer.appendChild(card);
  });
}

// Generate cards for each team
Object.keys(teamMembers).forEach(team => {
  const teamContainer = document.getElementById(`${team}Container`);
  if (teamContainer) {
    generateTeamCards(team, teamContainer, teamMembers[team]);
  }
});

// Default team: Show the first team
const defaultTeam = 'tech-team';
document.getElementById(defaultTeam).style.display = 'block';

// Menu toggle functionality for smaller screens
const menuIcon = document.getElementById('menu-icon');
const navLinksFirst = document.getElementById('nav-links-first');
const navItemsFirst = document.querySelectorAll('.nav-links-first a');

// Toggle menu open/close on clicking the menu icon
menuIcon.addEventListener('click', () => {
  navLinksFirst.classList.toggle('open');
});

// Close menu when a nav item is clicked
navItemsFirst.forEach(item => {
  item.addEventListener('click', () => {
    navLinksFirst.classList.remove('open');
  });
});
