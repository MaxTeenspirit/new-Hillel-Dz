const wrapp = document.getElementById('wrapper');

const row = document.createElement('div');
const button = document.createElement('p');
const title = document.createElement('span');
const card = document.createElement('img');
const secondCard = document.createElement('img');
const thirdCard = document.createElement('img');

title.innerText = 'Random Pix';
button.innerText = 'ClIcK';

wrapp.appendChild(title).id='title';
wrapp.appendChild(row).id='row';
row.appendChild(card).id='firstCard';
row.appendChild(secondCard).id='secondCard';
row.appendChild(thirdCard).id='thirdCard';
wrapp.appendChild(button).id='button';

function request(cardId) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://picsum.photos/400', true);
    xhr.addEventListener('load', ({target}) => {
    const a = target.responseURL;
    cardId.src = a;
    });
    xhr.send();
}

const requests = [firstCard, secondCard, thirdCard];

function eachCard() {
    requests.forEach(element => {
        request(element);
    });
};

eachCard();

button.addEventListener('click', () => {
    eachCard();
});