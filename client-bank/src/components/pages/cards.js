export const createCard = (title, description) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;

  const cardDescription = document.createElement('p');
  cardDescription.textContent = description;

  card.appendChild(cardTitle);
  card.appendChild(cardDescription);

  return card;
};



