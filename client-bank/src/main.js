import { browserRouter, render } from './routes';
import './scss/style.scss';



// Создаем компоненты для header, main и footer
const createHeader = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  
  const homeLink = document.createElement('li');
  const homeAnchor = document.createElement('a');
  homeAnchor.href = '#';
  homeAnchor.textContent = 'Home';
  homeLink.appendChild(homeAnchor);
  
  const cardsLink = document.createElement('li');
  const cardsAnchor = document.createElement('a');
  cardsAnchor.href = '#/cards';
  cardsAnchor.textContent = 'Cards';
  cardsLink.appendChild(cardsAnchor);
  
  ul.appendChild(homeLink);
  ul.appendChild(cardsLink);
  nav.appendChild(ul);
  header.appendChild(nav);
  
  return header;
};

const createMain = () => {
  
  const main = document.createElement('main');
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to Client-Bank';
  
  const p = document.createElement('p');
  p.textContent = 'This is the main page of Client-Bank. Here you can learn about our services and products.';
  
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  
  main.appendChild(h1);
  main.appendChild(p);
  main.appendChild(cardContainer);
  
  return main;

};

const createFooter = () => {
  const footer = document.createElement('footer');
  const nav = document.createElement('nav');
  nav.classList.add('footer-menu');
  const ul = document.createElement('ul');
  
  const aboutUsLink = document.createElement('li');
  const aboutUsAnchor = document.createElement('a');
  aboutUsAnchor.href = '#';
  aboutUsAnchor.textContent = 'About us';
  aboutUsLink.appendChild(aboutUsAnchor);
  
  const servicesLink = document.createElement('li');
  const servicesAnchor = document.createElement('a');
  servicesAnchor.href = '#';
  servicesAnchor.textContent = 'Services';
  servicesLink.appendChild(servicesAnchor);
  
  const contactsLink = document.createElement('li');
  const contactsAnchor = document.createElement('a');
  contactsAnchor.href = '#';
  contactsAnchor.textContent = 'Contacts';
  contactsLink.appendChild(contactsAnchor);
  
  ul.appendChild(aboutUsLink);
  ul.appendChild(servicesLink);
  ul.appendChild(contactsLink);
  nav.appendChild(ul);
  footer.appendChild(nav);
  
  return footer;
};

// Получаем ссылки на контейнеры
const appContainer = document.querySelector('#app');
const cardContainer = createMain().querySelector('.card-container');

// Создаем карточки
const cardData = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' },
];

cardData.forEach((data) => {
  const card = createCard(data.title, data.description);
  cardContainer.appendChild(card);
});

// Добавляем компоненты на страницу и запускаем роутер
appContainer.appendChild(createHeader());
appContainer.appendChild(createMain());
appContainer.appendChild(createFooter());
browserRouter('#app');
render(header, '.header');
render(main, '.main');
render(footer, '.footer');
