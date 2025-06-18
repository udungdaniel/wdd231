
import { openModal } from './modal.js';

const container = document.getElementById("project-container");

// Fetch data from local JSON
async function fetchProjects() {
  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const projects = await response.json();
    displayProjects(projects);
    localStorage.setItem("projectCount", projects.length);
  } catch (error) {
    container.innerHTML = `<p class="error">Failed to load projects: ${error.message}</p>`;
    console.error("Fetch error:", error);
  }
}

// Generate cards
function displayProjects(projects) {
  container.innerHTML = projects.map(project => `
    <div class="card" tabindex="0" aria-label="${project.title}">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="details-btn" data-id="${project.id}">Details</button>
    </div>
  `).join("");

  // Add listeners
  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const project = projects.find(p => p.id === btn.dataset.id);
      openModal(project);
    });
  });
}

fetchProjects();
