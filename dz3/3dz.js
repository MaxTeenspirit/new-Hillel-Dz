// Возраст через 'if' и 'else'


// var age = +prompt('Сколько тебе лет?');
// if(age >= 18 && age !== NaN) {
// 	console.log('Добро пожаловать!');
// }
// else if(age < 18 && age !== NaN) {
// 	if(age >= 12 && age !== NaN) {
// 		console.log('Рановато тебе сюда...');
// 	}
// 	else if(age < 12 && age !== NaN) {
// 		console.log('Тебе меньше 12, смотри Спанч-Боба!');
// 	}
// }
// else {
// 	console.log('Ты ввел не число!');
// }



// Тернарный оператор


// var age = +prompt('Сколько тебе лет?');
// var foo = ((age >= 18) && (age !== NaN)) ? console.log('Добро пожаловать!') : ((age < 12) && (age !== NaN)) ? console.log('Тебе меньше 12, читай Мурзилку!') : ((age >= 12) && (age !== NaN)) ? console.log('Рановато тебе сюда...') : console.log('Ты ввёл не число!');



// Опросник приёма на работу


// alert('Пожалуйста, ответь на вопросы, чтобы выяснить, годишься ли ты на хоть какую-то должность...');

// var answerAge = +prompt('Сколько тебе лет?'),
// 	answerExperience = +prompt('Введи количество лет опыта'),
// 	answerScill = prompt('Умеешь сворачивать язык в трубочку? (Ответь "да" или "нет")'),
// 	answerHumor = prompt('Есть чувство юмора? (Ответь "да" или "нет")'),
// 	result = 0,
// 	AGE_PLUS = answerAge >= 30,
// 	EXP_PLUS = answerExperience >= 3,
// 	SCILL_PLUS = answerScill === 'да',
// 	HUMOR_PLUS = answerHumor === 'да';

// if(AGE_PLUS) {
// 	++result;
// } else {
// 	--result;
// }

// if(EXP_PLUS) {
// 	++result;
// } else {
// 	--result;
// }

// if(SCILL_PLUS) {
// 	++result;
// } else {
// 	--result;
// }

// if(HUMOR_PLUS) {
// 	++result;
// } else {
// 	--result;
// }

// switch(result) {
// 	case 4:
// 		alert('НАШИ ПОЗДРАВЛЕНИЯ! ТЫ ПРИНЯТ! Выходи с понедельника :)');
// 		break;
// 	case 3:
// 	case 2:
// 		alert('Мы посовещаемся и перезвоним тебе');
// 		break;
// 	case 1:
// 	case 0:
// 	case -1:
// 	case -2:
// 	case -3:
// 	case -4:
// 		alert('Ты нам не подходишь...');
// 		break;
// }



// Конвертация валют
var answer = +prompt('Введите сумму в гривне'),
	currency = prompt('Укажите код валюты, в которую хотите конвертировать гривну: "USD" - доллар США, "EUR" - евро, "INR" - индийская рупия, "RUB" - неправильная гривна');
if(currency === 'RUB'){
	alert('Москаляку на гіляку!!!'); 
} else {
	alert('Отличный выбор!');
}
var answerMultiplied = answer;
var fooHrivna = currency === 'USD' ? answerMultiplied / 26. : currency === 'EUR' ? answerMultiplied / 29.55 : currency === 'INR' ? answerMultiplied / 0.38 : currency === 'RUB' ? (answerMultiplied / 0.41) : alert('Нет такой валюты');
var result = answer + ' UAH = ' + fooHrivna.toFixed(2) + ' ' + currency;
alert('Производится конвертация введенной суммы в ' + currency);
alert(result);