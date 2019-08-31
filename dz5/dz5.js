//Итерация с do/while
/* var i = 0;
do {i++}
while (confirm('R U happy with ' + i + '?')); */


// Итерация с while
/* var i = 0;
while (confirm('R U happy with ' + ++i + '?')); */


// Угадывание числа
var guess,
    guessNum = 0,
    rand = Math.round(Math.random() * 10);
do {
    guess = +prompt('Угадай число от 1 до 10!');
    guessNum++;
} while (guess !== rand && confirm('Ещё попытка?'));
console.log('Количество попыток: ' + guessNum);


// Запрос числа с выводом кратных
/* var questNum = +prompt('Введи число, кратные которому хочешь увидеть');
for (var i = 0; i < 100; i++) {
    if (i % questNum === 0) {
        console.log(i);
    }
} */

// Запрос числа с выводом кратных и запросом количества выводов
/* var questNum = +prompt('Введи число, кратные которому хочешь увидеть'),
    questTimes = +prompt('Сколько кратных вывести?'),
    timesArray = [];
for (var i = 0; ; i++) {
    if (i % questNum === 0) timesArray.push(i);
    if (timesArray.length === questTimes) break;
}
console.log(timesArray); */