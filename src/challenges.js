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
// Ajustada a função footballPoints seguindo code review (@SrTonn - Wellington Rodrigues)

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

/* function winner(answer, differenceCat1, differenceCat2) {
  if (differenceCat1 > differenceCat2) {
    answer = 'cat2';
  } else if (differenceCat2 > differenceCat1) {
    answer = 'cat1';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }

  return answer;
} */

// Ajustada a função catAndMouse seguindo code review (@julianoboese - Juliano Boese).

function catAndMouse(mouse, cat1, cat2) {
  let differenceCat1 = Math.abs(cat1 - mouse);
  let differenceCat2 = Math.abs(cat2 - mouse);
  let answer;

  if (differenceCat1 > differenceCat2) {
    answer = 'cat2';
  } else if (differenceCat2 > differenceCat1) {
    answer = 'cat1';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }

  return (answer);
}

// Desafio 8
function fizzBuzzAux(newArray, div3, div5) {
  if (div3 === 0 && div5 === 0) {
    newArray.push('fizzBuzz');
  } else if (div3 === 0) {
    newArray.push('fizz');
  } else if (div5 === 0) {
    newArray.push('buzz');
  } else {
    newArray.push('bug!');
  }
}

function fizzBuzz(numbers) {
  let newArray = [];
  let div3;
  let div5;
  for (let number of numbers) {
    div3 = number % 3;
    div5 = number % 5;
    fizzBuzzAux(newArray, div3, div5);
  }
  return newArray;
}

// Desafio 9
function encodeAux(char) {
  return ('aeiou'.indexOf(char) + 1);
}

function encode(phrase) {
  phrase = phrase.split('');
  for (let index in phrase) {
    if ('aeiou'.includes(phrase[index])) {
      phrase[index] = encodeAux(phrase[index]);
    }
  }
  return phrase.join('');
}

function decodeAux(char) {
  return ('aeiou'[char - 1]);
}

function decode(phrase) {
  phrase = phrase.split('');
  for (let index in phrase) {
    if ('12345'.includes(phrase[index])) {
      phrase[index] = decodeAux(phrase[index]);
    }
  }
  return phrase.join('');
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
