import {
    home,
    cards,
    contacts,
    page404
  } from './../components/pages.js';

  import { getHash } from '../utils/utils.js';

  const routes = [
    {path: '/', component:home},
    {path: '/cards', component:cards},
    {path: '/contacts', component:contacts},
    {path: '**', component:page404},
  ];

export function renderRoutes(selector) {
    let route = getHash();

    let resource;   
  
    if (route === '') {
      route = '/';
    }
  
    resource = routes.find(r => r.path === route);

     if (!resource) {
       resource = routes.find(r => r.path === '**');
     }  

    
  
    render(resource.component);
  
    function render(component) {
      const App = document.querySelector(selector);
      App.innerHTML = component();
    }
  }