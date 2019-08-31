/* var moneyQuest = +prompt('Укажите количество денег для конвертации:'),
    firstCurrency = +prompt('Укажите номер исходной валюты: 1 - UAH, 2 - USD, 3 - EUR или 4 - RUB'),
    secondCurrency = +prompt('Укажите номер валюты, в которую хотите обменять: 1 - UAH, 2 - USD, 3 - EUR или 4 - RUB'),
    oneUah = {
        uah: 1,
        usd: 0.04,
        eur: 0.03,
        rub: 2.44
    },
    oneUsd = {
        uah: 26.42,
        usd: 1,
        eur: 0.89,
        rub: 64.43
    },
    oneEur = {
        uah: 29.76,
        usd: 1.13,
        eur: 1,
        rub: 72.58
    },
    oneRub = {
        uah: 0.41,
        usd: 0.02,
        eur: 0.01,
        rub: 1
    };

var exchange = function(from, to) {
    var result = (from * moneyQuest) * to;
    return alert('Результат: ' + result), console.log('Результат: ' + result);
};

var calculation = firstCurrency === 1 && secondCurrency === 2 ? exchange(oneUah.uah, oneUah.usd) : firstCurrency === 1 && secondCurrency === 3 ? exchange(oneUah.uah, oneUah.eur) : firstCurrency === 1 && secondCurrency === 4 ? exchange(oneUah.uah, oneUah.rub) : firstCurrency === 2 && secondCurrency === 1 ? exchange(oneUsd.usd, oneUsd.uah) : firstCurrency === 2 && secondCurrency === 3 ? exchange(oneUsd.usd, oneUsd.eur) : firstCurrency === 2 && secondCurrency === 4 ? exchange(oneUsd.usd, oneUsd.rub) : firstCurrency === 3 && secondCurrency === 1 ? exchange(oneEur.eur, oneEur.uah) : firstCurrency === 3 && secondCurrency === 2 ? exchange(oneEur.eur, oneEur.usd) : firstCurrency === 3 && secondCurrency === 4 ? exchange(oneEur.eur, oneEur.rub) : firstCurrency === 4 && secondCurrency === 1 ? exchange(oneRub.rub, oneRub.uah) : firstCurrency === 4 && secondCurrency === 2 ? exchange(oneRub.rub, oneRub.usd) : firstCurrency === 4 && secondCurrency === 3 ? exchange(oneRub.rub, oneRub.eur) : alert('Пытаетесь перевести в ту же валюту'); */


// Maksym-Банк
// var quest = +prompt('Введите сумму депозита'),
//     cash = quest,
//     percent = (17.5 / 100),
//     time = +prompt('На сколько лет вы планируете вложить деньги?');

// var calc = function(){
//     for (var i = 1; i <= time; i++) {
//         var result = cash + (cash * percent);
//         cash = result;
//     }
//     return alert(quest + ' денег на ' + time + ' лет даст вам ' + result.toFixed(2) + ' денег!');
// }

// if (isNaN(cash) === true || isNaN(time) === true) {
//     alert('Вводите только цифры!');
// } else if (cash <= 0) {
//     alert('У вас не кошелёк, а чёрная дыра!');
// } else {
//     calc();
// }


