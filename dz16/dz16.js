function Human() {
    this.type = 'Human';
}

Human.prototype.who = function() {
    console.log('I`m only ' + this.type + ' after all');
}

function Student() {
    Human.call(this);
    this.interests = ['study', 'drink', 'sleep'];
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.doSomething = function() {
    console.log('I`ll do it next time');
}

function Nerd() {
    Student.call(this);
    this.passion = 'Hobbits!';
}

Nerd.prototype = Object.create(Student.prototype);
Nerd.prototype.constructor = Nerd;
Nerd.prototype.getGirl = function() {
    console.log('Books only');
}

function Geek() {
    Nerd.call(this);
    this.brain = 'Hardware';
}

Geek.prototype = Object.create(Nerd.prototype);
Geek.prototype.constructor = Geek;
Geek.prototype.goClubbing = function() {
    console.log('I would rather solder the boards');
}

function Mr_Robot() {
    Geek.call(this);
    this.hobby = 'Hack your computer';
}

Mr_Robot.prototype = Object.create(Geek.prototype);
Mr_Robot.prototype.constructor = Mr_Robot;
Mr_Robot.prototype.doNotHackMePls = function(){
    console.log('Sorry, U Hacked');
}

function Java_Developer() {
    Mr_Robot.call(this);
    this.salary = 89120670293461;
}

Java_Developer.prototype = Object.create(Mr_Robot.prototype);
Java_Developer.prototype.constructor = Java_Developer;
Java_Developer.prototype.develop = function() {
    console.log(this.salary++);
}


var person = new Java_Developer;
console.log(person);
person.who();
person.doSomething();
person.getGirl();
person.goClubbing();
person.doNotHackMePls();
person.develop();
