// main.js - ES Module
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const menuButton = document.getElementById("menu-button");
  const navList = document.querySelector("nav ul");

  menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuButton.classList.toggle("open");
  });

  // Modal
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.background = "rgba(0,0,0,0.7)";
  modal.style.color = "#fff";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";
  modal.innerHTML = `
    <div style="background: #1e3a8a; padding: 2rem; border-radius: 8px; max-width: 500px;">
      <h2>Welcome!</h2>
      <p>Thanks for visiting my portfolio website. Check out my latest blog posts below!</p>
      <button id="close-modal" style="margin-top: 1rem; padding: 0.5rem 1rem;">Close</button>
    </div>
  `;
  document.body.appendChild(modal);

  if (!localStorage.getItem("modalShown")) {
    modal.style.display = "flex";
    localStorage.setItem("modalShown", "true");
  }

  document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Load Blog Posts
  async function loadBlogPosts() {
    const blogContainer = document.getElementById("blog-container");

    try {
      const response = await fetch("data/blog.json");
      if (!response.ok) throw new Error("Data fetch failed");

      const blogData = await response.json();
      const latestPosts = blogData.slice(0, 15); // At least 15

      latestPosts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("blog-card");
        card.innerHTML = `
          <h3>${post.title}</h3>
          <p><strong>Date:</strong> ${post.date}</p>
          <p>${post.summary}</p>
          <p><em>Tag: ${post.tag}</em></p>
        `;
        blogContainer.appendChild(card);
      });

      // Example: Filter posts tagged "featured"
      const featured = blogData.filter(p => p.tag === "featured");
      console.log(`Featured Posts (${featured.length}):`, featured);

    } catch (error) {
      console.error("Error loading blog posts:", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Sorry, we couldn't load the blog posts right now.";
      blogContainer.appendChild(errorMessage);
    }
  }

  loadBlogPosts();
});
