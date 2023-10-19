import { header } from './components/header';
import { main } from './components/main';
import { footer } from './components/footer';
import { browserRouter, render } from './routes';
import './scss/style.scss';


// add cards
const cardContainer = document.querySelector('.card-container');

const cardData = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' },
];

cardData.forEach((data) => {
  const card = createCard(data.title, data.description);
  cardContainer.appendChild(card);
});

browserRouter('#app');

render(header, '.header');
render(main, '.main');
render(footer, '.footer');
