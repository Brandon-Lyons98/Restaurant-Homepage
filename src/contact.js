function contactUs() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phone = document.createElement('p');
  phone.textContent = '123 - 456 - 7890';

  const address = document.createElement('p');
  address.textContent = '452 Example Boulevard, '

  contact.appendChild(phone);
  contact.appendChild(address);
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(contactUs());
}

export default loadContact;