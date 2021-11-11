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
// ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let differenceCat1 = Math.abs(cat1 - mouse);
  let differenceCat2 = Math.abs(cat2 - mouse);
  if (differenceCat1 > differenceCat2) {
    return ('cat2');
  } else if (differenceCat2 > differenceCat1) {
    return ('cat1');
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let number of numbers) {
    if (number % 15 === 0) {
      newArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      newArray.push('fizz');
    } else if (number % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
  phrase = phrase.split('');
  for (let i in phrase) {
    switch (phrase[i]) {
    case 'a':
      phrase[i] = 1;
      break;
    case 'e':
      phrase[i] = 2;
      break;
    case 'i':
      phrase[i] = 3;
      break;
    case 'o':
      phrase[i] = 4;
      break;
    case 'u':
      phrase[i] = 5;
      break;
    default:
    }
  }
  return phrase.join('')
}

function decode(phrase) {
  phrase = phrase.split('');
  for (let i in phrase) {
    switch (phrase[i]) {
    case '1':
      phrase[i] = 'a';
      break;
    case '2':
      phrase[i] = 'e';
      break;
    case '3':
      phrase[i] = 'i';
      break;
    case '4':
      phrase[i] = 'o';
      break;
    case '5':
      phrase[i] = 'u';
      break;
    default:
    }
  }
  return phrase.join('')
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
