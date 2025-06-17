// modal.js

// Select elements
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  closeModalBtn.focus(); // Accessibility: move focus into modal
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  openModalBtn.focus(); // Return focus to trigger
});

// Close with Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    openModalBtn.focus();
  }
});

// Optional: Close when clicking outside modal content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    openModalBtn.focus();
  }
});
