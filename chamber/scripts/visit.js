const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const daysPassed = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1) {
        visitMessage.textContent = 'Back so soon! Awesome!';
    } else {
        visitMessage.textContent = `You last visited ${daysPassed} day${daysPassed === 1 ? '' : 's'} ago.`;
    }
}

localStorage.setItem('lastVisit', currentVisit);
