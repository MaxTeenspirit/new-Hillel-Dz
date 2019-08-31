var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numOfStrings = +prompt('Сколько строк создать?'),
    numOfCharMin = +prompt('Какая минимальная длина строк?'),
    numOfCharMax = +prompt('Какая максимальная длина строк?'),
    stringArr = [],
    resultArr = [];

for (; resultArr.length <= numOfStrings; resultArr.push(word)) {
    while (stringArr.length <= Math.floor(Math.random() * (numOfCharMax - numOfCharMin) + numOfCharMin)) {
        stringArr.push(alphabet[Math.floor(Math.random () * alphabet.length)]);
    }
    var word = stringArr.join('');
};
console.log(resultArr);
