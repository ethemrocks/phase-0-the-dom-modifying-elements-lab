const mainElement = document.querySelector('main#main');
mainElement.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Ethem Kacic is the champion";
document.body.appendChild(newHeader);