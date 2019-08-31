var startHealth = 100,
    startDistance = 0;

function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = startHealth;
    this.distance = distance;
    this.maxDistance = 100;
 }

var resources = [
    new MilitaryResource('air', 80, 10),
    new MilitaryResource('air', 20, 90),
    new MilitaryResource('land', 95, 10),
    new MilitaryResource('land', 50, 99),
    new MilitaryResource('water', 80, 75),
    new MilitaryResource('land', 100, 5),
    new MilitaryResource('water', 45, 25)
]

MilitaryResource.prototype.isReadyToMove = function(){
    return this.distance < (this.maxDistance - 10);
}

MilitaryResource.prototype.isReadyToFight = function(){
    return this.health > (this.maxHealth - 50);
}

MilitaryResource.prototype.restore = function(){
    return this.health = this.maxHealth, this.distance = startDistance;
}

MilitaryResource.prototype.clone = function() {
    return new MilitaryResource(this.type, this.maxHealth, this.distance, this.maxDistance);
}





function Squad(resources) {
    this.resources = resources && resources.length ? resources : [];
}



/* console.log(resources[1].isReadyToFight());
console.log(resources[2].isReadyToFight());
console.log(resources[3].isReadyToFight());
console.log(resources[4].isReadyToFight());
console.log(resources[5].isReadyToFight());
console.log(resources[6].isReadyToFight()); */