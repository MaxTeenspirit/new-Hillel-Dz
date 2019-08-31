var firstCard = document.getElementById('first_resource'),
    secondCard = document.getElementById('second_resource'),
    thirdCard = document.getElementById('third_resource');

var firstHealth = document.createElement('div'),
    secondHealth = document.createElement('div'),
    thirdHealth = document.createElement('div'),
    firstStamina = document.createElement('div'),
    secondStamina = document.createElement('div'),
    thirdStamina = document.createElement('div');



firstHealth.className = 'health'; 
secondHealth.className = 'health';
thirdHealth.className = 'health';
firstHealth.id = 'first_health';
secondHealth.id = 'second_health';
thirdHealth.id = 'third_health';
    
firstStamina.className = 'stamina';
secondStamina.className = 'stamina';
thirdStamina.className = 'stamina';
firstStamina.id = 'first_stamina';
secondStamina.id = 'second_stamina';
thirdStamina.id = 'third_stamina';

//Display health bar
firstHealth.style.width = resources[0].health + '%';
secondHealth.style.width = resources[3].health + '%';
thirdHealth.style.width = resources[6].health + '%';

//Display stamina bar
firstStamina.style.width = (resources[0].maxDistance - resources[0].distance) + '%';
secondStamina.style.width = (resources[3].maxDistance - resources[3].distance) + '%';
thirdStamina.style.width = (resources[6].maxDistance - resources[6].distance) + '%';

//Display card title and image
var firstType = document.getElementById('first_type'),
    secondType = document.getElementById('second_type'),
    thirdType = document.getElementById('third_type');

if (resources[0].type === 'air') {
    firstType.innerText = 'Air';
    document.getElementById('first_img').id = 'air';
} else if (resources[0].type === 'land') {
    firstType.innerText = 'Land';
    document.getElementById('first_img').id = 'land';
} else {
    firstType.innerText = 'Water';
    document.getElementById('first_img').id = 'water';
}

if (resources[3].type === 'air') {
    secondType.innerText = 'Air';
    document.getElementById('second_img').id = 'air';
} else if (resources[3].type === 'land') {
    secondType.innerText = 'Land';
    document.getElementById('second_img').id = 'land';
} else {
    secondType.innerText = 'Water';
    document.getElementById('second_img').id = 'water';
}

if (resources[resources.length - 1].type === 'air') {
    thirdType.innerText = 'Air';
    document.getElementById('third_img').id = 'air';
} else if (resources[resources.length - 1].type === 'land') {
    thirdType.innerText = 'Land';
    document.getElementById('third_img').id = 'land';
} else {
    thirdType.innerText = 'Water';
    document.getElementById('third_img').id = 'water';
}

//Health subtraction
function minusHealth () {
    this.health -= 5;
}

firstHealth.onclick = function() {
    minusHealth.apply(resources[0]);
    firstHealth.style.width = resources[0].health + '%';
}

secondHealth.onclick = function() {
    minusHealth.apply(resources[3]);
    secondHealth.style.width = resources[3].health + '%';
}

thirdHealth.onclick = function() {
    minusHealth.apply(resources[6]);
    thirdHealth.style.width = resources[6].health + '%';
}

//Stamina subtraction
function minusStamina () {
    console.log('click');
    this.distance += 5;
}

firstStamina.onclick = function() {
    minusStamina.apply(resources[0]);
    firstStamina.style.width = (resources[0].maxDistance - resources[0].distance) + '%';
}

secondStamina.onclick = function() {
    minusStamina.apply(resources[3]);
    secondStamina.style.width = (resources[3].maxDistance - resources[3].distance) + '%';
}

thirdStamina.onclick = function() {
    minusStamina.apply(resources[6]);
    thirdStamina.style.width = (resources[6].maxDistance - resources[6].distance) + '%';
}



firstCard.insertBefore(firstHealth, firstCard.children[0]);
secondCard.insertBefore(secondHealth, secondCard.children[0]);
thirdCard.insertBefore(thirdHealth, thirdCard.children[0]);
firstCard.insertBefore(firstStamina, firstCard.children[1]);
secondCard.insertBefore(secondStamina, secondCard.children[1]);
thirdCard.insertBefore(thirdStamina, thirdCard.children[1]);