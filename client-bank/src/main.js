import { browserRouter, render } from './routes';
import { home } from './components/home';
import { createCard } from './components/cards';
import { createHeader, createMain, createFooter } from './components'; 
import './scss/style.scss';

export const home = () => {
  //
  const homePage = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Home page';

  //
  homePage.appendChild(heading);

  return homePage;
};

const headerElement = createHeader();
const mainElement = createMain();
const footerElement = createFooter();

const appContainer = document.querySelector('#app');
appContainer.appendChild(headerElement);
appContainer.appendChild(mainElement);
appContainer.appendChild(footerElement);

const cardContainer = mainElement.querySelector('.card-container');
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
