const spotlightContainer = document.getElementById("spotlight-container");

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const eligible = data.members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
    const spotlights = shuffleArray(eligible).slice(0, 3);
    spotlights.forEach(createSpotlightCard);
  } catch (error) {
    console.error("Error loading spotlight members:", error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createSpotlightCard(member) {
  const card = document.createElement("div");
  card.className = "spotlight-card";

  card.innerHTML = `
    <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
    <h3>${member.name}</h3>
    <p><strong>Address:</strong> ${member.address}</p>
    <p><strong>Phone:</strong> ${member.phone}</p>
    <a href="${member.website}" target="_blank">Visit Website</a>
    <p class="level">${member.membershipLevel === 3 ? 'Gold' : 'Silver'} Member</p>
  `;

  spotlightContainer.appendChild(card);
}

fetchMembers();
