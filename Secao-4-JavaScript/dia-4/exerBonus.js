// Os exercícios a seguir são mais desafiadores do que os anteriores, e te permitem utilizar vários conceitos adquiridos até o momento no curso para construir um código melhor estruturado como solução. Aproveite para treinar suas habilidades e testar coisas novas!

const { toLower } = require("lodash");

// Exercício 1

// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

function choices(number) {
  switch (number) {
    case "i":
      number = 1;
      break;
    case "v":
      number = 5;
      break;
    case "x":
      number = 10;
      break;
    case "l":
      number = 50;
      break;
    case "c":
      number = 100;
      break;
    case "d":
      number = 500;
      break;
    case "m":
      number = 1000;
      break;
  }
  return number;
}
function romanAlg(alg) {
  alg = toLower(alg);
  alg = alg.split("");
  let count = 0;
  let arr = [];
  let sum = [];
  for (let i = 0; i < alg.length; i += 1) {
    arr.push(choices(alg[i]));
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
      count += arr[i + 1] - arr[i];
      i += 1;
    } else {
      count += arr[i];
    }
  }
  sum.push(count);
  console.log(sum);
}
romanAlg("CCCLXXXVI");

// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

function retornaPar(array) {
  let par = [];
  for (let index of vector) {
    for (let i = 0; i < index.length; i += 1) {
      if (index[i] % 2 == 0) {
        par.push(index[i]);
      }
    }
  }
  return console.log(`Números pares do vetor: ${par}`);
}
retornaPar(vector);

// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function cesta(array) {
  let objArr = {
    melancia: 0
  };

  for (let index = 0; index < array.length; index += 1) {
    
  }
  console.log(objArr);
}
cesta(basket);
