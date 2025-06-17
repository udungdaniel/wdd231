// Get DOM elements
const themeToggle = document.querySelector('#theme-toggle');
const greeting = document.querySelector('#greeting');

// Set default state on load
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  greetUser();
});

// Load theme from localStorage
function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }
}

// Save theme to localStorage
themeToggle?.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Save and greet user
function greetUser() {
  let userName = localStorage.getItem('userName');

  if (!userName) {
    userName = prompt('Welcome! Please enter your name:');
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }

  if (userName && greeting) {
    greeting.innerHTML = `👋 Welcome back, <strong>${userName}</strong>!`;
  }
}
