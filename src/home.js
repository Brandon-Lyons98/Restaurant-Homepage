function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const para1 = document.createElement('p');
  title.textContent = 'Looking for your new favorite restaurant?';
  
  const para2 = document.createElement('p');
  para.textContent = 'Join us for a 3 star dining experience!';

  const chefImg = document.createElement('img');
  chefImg.src = '../dist/images/chef.jpg';

  const para3 = document.createElement('p');
  para.textContent = 'We look forward to seeing you!';

  home.appendChild(para1);
  home.appendChild(para2);
  home.appendChild(chefImg);
  home.appendChild(para3);

  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;