const directory = document.getElementById("directory");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching members:', error);
    directory.innerHTML = "<p>Sorry, we couldn't load the directory at the moment.</p>";
  }
}

function displayMembers(members) {
  directory.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    
    if (member.membershipLevel === 3) {
      card.classList.add("premium");
    } else if (member.membershipLevel === 2) {
      card.classList.add("standard");
    }

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="100" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    directory.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  directory.classList.add("grid-view");
  directory.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list-view");
  directory.classList.remove("grid-view");
});

getMembers();
