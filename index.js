const container = document.querySelector('.container');

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    data.milkshakes.forEach(milkshake => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = milkshake.image;

      const name = document.createElement('h2');
      name.textContent = milkshake.name;

      const description = document.createElement('p');
      description.textContent = milkshake.description;

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(description);

      container.appendChild(card);
    });
  });
