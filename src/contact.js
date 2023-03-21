function contactUs() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phone = document.createElement('p');
  phone.textContent = 'Phone number: 123 - 456 - 7890';

  const address = document.createElement('p');
  address.textContent = 'Street Address: 3655 S Las Vegas Blvd, Las Vegas, NV 89109'

  contact.appendChild(phone);
  contact.appendChild(address);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(contactUs());
}

export default loadContact;