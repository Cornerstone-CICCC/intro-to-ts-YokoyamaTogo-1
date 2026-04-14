"use strict";
function doubleNumber(num) {
    return num * 2;
}
function squareNumber(num) {
    return num * num;
}
function isEven(num) {
    return num % 2 === 0;
}
function isAdult(age) {
    return age >= 18;
}
function reverseString(text) {
    return text.split('').reverse().join('');
}
function capitalizeString(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
console.log('doubleNumber:', doubleNumber(6));
console.log('squareNumber:', squareNumber(5));
console.log('isEven:', isEven(8));
console.log('isAdult:', isAdult(20));
console.log('reverseString:', reverseString('togoyokoyama'));
console.log('capitalizeString:', capitalizeString('togoyokoyama'));
