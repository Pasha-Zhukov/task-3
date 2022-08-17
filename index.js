const readlineSync = require("readline-sync");

function getNumber() {
    console.log("Введите ваше число:");
    return readlineSync.question(">>> ");
}

let lengthNumber = 0;
let matched = 0;
let didNotMatch = 0;
let numberOne = '';
let numberTwo = '';
let stockMatched = '';
let stockDidNotMatch = '';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//В этой функции мы получаем количество цифр, а также сами цифры которое нужно угадать.
function getLengthNumber() {
    let endNumber = '';
    let battery;
    lengthNumber = getRandom(3, 6);
    for (let i = 0; i < lengthNumber; i++) {
        battery = getRandom(0, 9);
        endNumber += battery
    }
    return endNumber;
}
//В этой функции мы сравниваем введеные данные пользователя с данными которые мы получили в вышестоящей функции и складываем их в переменные.
function comparisonNumber(numberOne, numberTwo) {
    matched = 0;
    didNotMatch = 0;
    stockMatched = '';
    stockDidNotMatch = '';
    for (let i = 0; i < lengthNumber; i++) {
        if (numberOne[i] === numberTwo[i]) {
            matched++;
            stockMatched += numberOne[i];
        }
        else if (numberTwo.indexOf(numberOne[i]) >= 0) {
            didNotMatch++;
            stockDidNotMatch += numberOne[i];
        }
    }
}
//Функция для вывода информации пользователю о ходе и правилах игры.
function start() {
    numberOne = getLengthNumber();
    if (lengthNumber === 3) {
        console.log("Загадочное число состоит из трех цифр, у Вас 3 попытки.")
    } else if (lengthNumber === 4) {
        console.log("Загадочное число состоит из четырех цифр, у Вас 4 попытки.")
    } else if (lengthNumber === 5) {
        console.log("Загадочное число состоит из пяти цифр, у Вас 5 попыток.")
    } else {
        console.log("Загадочное число состоит из шести цифр, у Вас 6 попыток.")
    }
    for (let i = 0; i <= lengthNumber; i++) {
        numberTwo = getNumber()
        if (numberOne === numberTwo) {
            console.log("Вы выиграли!");
            break;
        }
        comparisonNumber(numberOne, numberTwo);
        console.log(`Cовпавших цифр не на своих местах ${didNotMatch} (${stockDidNotMatch}) цифр на своих местах ${matched} (${stockMatched})`);
    }
}
start();