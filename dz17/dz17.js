var wrapp = document.getElementById('wrapper');

var row = document.createElement('div'),
    button = document.createElement('p'),
    title = document.createElement('span'),
    card = document.createElement('img'),
    secondCard = document.createElement('img'),
    thirdCard = document.createElement('img');

title.innerText = 'Random Pix';
button.innerText = 'ClIcK';


// body.insertBefore(title, body.firstChild).id='title'.innerText='PPP';
wrapp.appendChild(title).id='title';
wrapp.appendChild(row).id='row';
row.appendChild(card).id='firstCard';
row.appendChild(secondCard).id='secondCard';
row.appendChild(thirdCard).id='thirdCard';
wrapp.appendChild(button).id='button';

var card1 = document.getElementById('firstCard'),
    card2 = document.getElementById('secondCard'),
    card3 = document.getElementById('thirdCard');

function request(cardId) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://picsum.photos/400', true);
    xhr.addEventListener('load', function(e) {
    var a = e.target.responseURL;
    cardId.src = a;
    });
    xhr.send();
}

request(firstCard);
request(secondCard);
request(thirdCard);

button.addEventListener('click', function(){
    request(firstCard);
    request(secondCard);
    request(thirdCard);
});