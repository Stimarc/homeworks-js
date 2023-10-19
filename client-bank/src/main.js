import { browserRouter, render } from './routes';
import { cards } from './components/cards';
import './scss/style.scss';

const cardContainer = document.querySelector('.card-container');
const cardElements = cards(); 

cardElements.forEach((card) => {
  cardContainer.appendChild(card);
});

//
browserRouter('#app');
render(header, '.header');
render(main, '.main');
render(footer, '.footer');
