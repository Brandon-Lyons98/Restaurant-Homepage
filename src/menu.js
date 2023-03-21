function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createOption('8oz Filet', 98, 'american wagyu, oven roasted seasonal vegetables, baked potato')
  );
  menu.appendChild(
    createOption('Maine Lobster Risoto', 48, 'chorizo lobster broth, seasonal squash, butter-poached lobster')
  );
  menu.appendChild(
    createOption('Salmon', 44, 'coho salmon, roasted corn and jalapeño purée, chili oil, baby vegetables')
  );
  menu.appendChild(
    createOption('Roasted Beef Wellington', 60, 'served medium rare, glazed root vegetables, potato purée, red wine demi-glaze (contains pork)')
  );

  return menu;
}

function createOption(name, price, ingredients) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;
  
  const entreeIngredients = document.createElement('p');
  entreeIngredients.textContent = `$${price} - ${ingredients}`;

  menuItem.appendChild(foodName);
  menuItem.appendChild(entreeIngredients);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;