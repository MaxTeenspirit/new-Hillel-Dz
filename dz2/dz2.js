//Среднее арифметическое
// var firstAnswer = +prompt('Введите любое число'),
// 	secondAnswer = +prompt('Ещё одно число, пожалуйста'),
// 	thirdAnswer = +prompt('И ещё одно число (на этом всё, обещаю)'),
// 	average = (firstAnswer + secondAnswer + thirdAnswer) / 3;
// console.log(average);
// alert('Среднее арифметическое значение указанных чисел: ' + average);

// Среднее арифметическое (числа через запятую)
// var question = 'Пожалуйста, введите числа через запятую';
// var num = [prompt(question)];
// num = num.toString();
// num = num.split(',');
// var sum = num.reduce((p, c) => c += p);
// var integer = parseInt(sum, 10);
// var avr = integer / num.length;
// console.log(avr);

// Конвертер c гривны в у.е.
// var answer = +prompt('Введите сумму в гривне'),
// 	converted = answer / 26.3;
// converted = converted.toFixed(2);
// var result = answer + ' UAH = ' + converted + ' USD';
// alert('Производится конвертация введенной суммы в доллар США');
// alert(result);

// Проверка на соответствие двух запрашиваемых значений
var firstVal = +prompt('Введите любое число'),
    secondVal = +prompt('Повторите введенное число');
if(firstVal === secondVal){
	alert('Спасибо)');
}
else {
	alert('Числа не соответствуют друг другу!');
}
