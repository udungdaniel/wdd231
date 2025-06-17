const container = document.getElementById('cards-container');

fetch('data/discover.json')
    .then(res => res.json())
    
    .then(data => { 
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
            
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}" loading="lazy"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

            container.appendChild(card);
        });
    });
