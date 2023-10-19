export const cards = () => {
  const createCard = (title, description) => {
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

  //
  const card1 = createCard('Card 1', 'Description for Card 1');
  const card2 = createCard('Card 2', 'Description for Card 2');
  const card3 = createCard('Card 3', 'Description for Card 3');

  return [card1, card2, card3];
};
