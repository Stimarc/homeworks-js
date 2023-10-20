export const home = () => {
  const homePage = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Home page';

  //
  homePage.appendChild(heading);

  return homePage;
};