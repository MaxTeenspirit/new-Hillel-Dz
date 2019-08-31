//Display health scale
var firstResourceHealth = document.getElementById('first_health').style.width = resources[0].health + '%',
    secondResourceHealth = document.getElementById('second_health').style.width = resources[3].health + '%',
    thirdResourceHealth = document.getElementById('third_health').style.width = resources[resources.length - 1].health + '%';

//Display stamina scale
var firstResourceHealth = document.getElementById('first_stamina').style.width = (resources[0].maxDistance - resources[0].distance) + '%',
    secondResourceHealth = document.getElementById('second_stamina').style.width = (resources[3].maxDistance - resources[3].distance) + '%',
    thirdResourceHealth = document.getElementById('third_stamina').style.width = resources[resources.length - 1].maxDistance - resources[resources.length - 1].distance + '%';

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
