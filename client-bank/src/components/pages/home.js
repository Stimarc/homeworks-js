
export const createHeader = () => {
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
export const createMain = () => {
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
export const createFooter = () => {
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
