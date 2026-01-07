const container = document.querySelector('.container');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');

h1.textContent = 'T44 - Obiekty DOM - przykłady wykonywane na zajęciach'
p.textContent = 'To jest tekst dopisany za pomocą JavaScript';

container.appendChild(h1);
container.appendChild(p);