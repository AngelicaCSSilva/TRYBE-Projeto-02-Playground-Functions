// Desafio 1
function compareTrue(arg1, arg2) {
  return (arg1 && arg2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  return (string.split(' '));
}

// Desafio 4
/* ref. eslint: https://eslint.org/docs/rules/prefer-template
  Foi utilizado a formatação `${}` conforme orientações. */
function concatName(array) {
  return (`${array[(array.length - 1)]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
/* ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max#retornando_o_maior_elemento_de_um_array
  Utilizado o método com operador spread. */
function highestCount(numbers) {
  let max = Math.max(...numbers);
  let count = 0;
  for (let number of numbers) {
    if (number === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
