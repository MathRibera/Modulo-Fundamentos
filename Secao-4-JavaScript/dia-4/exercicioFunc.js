// A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

const { size } = require("lodash");

// Retorno esperado: false
function verificaPalindrome(element) {
  let saveElement = element;
  element = element.split("");
  let arr = [];
  for (let index of element) {
    arr.push(index);
  }
  arr.reverse();
  function verificador(param1, param2) {
    let array1 = param1;
    let array2 = param2;
    let count = 0;

    for (let x = 0; x < array1.length; x += 1) {
      if (array1[x] == array2[x]) {
        count += 1;
      }
    }
    if (count == array1.length) {
      return console.log(`${saveElement} é um palindromo`);
    } else {
      return console.log(`${saveElement} não é um palindromo`);
    }
  }
  verificador(arr, element);
}
verificaPalindrome("arara");

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.
function biggestInt(array) {
  let ind = 0;
  let bigger = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > ind) {
      bigger = array[index];
      ind = index;
    }
  }
  return console.log(`O indice do maior numero é o ${ind}, numero: ${bigger}`);
}
biggestInt([2, 3, 6, 7, 10, 1]);
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.
function smaller(array) {
  let theSmaller = array[0];
  let auth = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < theSmaller) {
      theSmaller = array[index];
      auth = index;
    }
  }
  return console.log(
    `O indice do menor numero é o ${auth}, numero: ${theSmaller}`
  );
}
smaller([2, 4, 6, 7, 10, 0, -3]);

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.
function sizeName(array) {
  let sizeName = array[0];
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element.length > sizeName.length) {
      sizeName = element;
    }
  }
  return console.log(`${sizeName}`);
}
sizeName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function repeated(array) {
  let winner = 0;
  let number = 0;
  for (let index = 0; index < array.length; index += 1) {
    let element = array[0];
    let auth = 0;
    for (let i = 0; i < array.length; i += 1) {
      let secondElement = array[i];
      if (secondElement == element && auth >= number) {
        winner = element;
        auth += 1;
        number += 1;
      }
    }
  }
  return console.log(
    `O numero mais repetido é o ${winner} e se repetiu ${number} vezes`
  );
}
repeated([2, 3, 2, 5, 8, 2, 3]);

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function naturalNumber(number) {
  if (number < 0) {
    return console.log(`${number} é invalido`);
  } else {
    let sum = 0;
    let text = "";
    for (let x = 1; x <= number; x += 1) {
      sum += x;
      if (x == number) {
        text += `${x.toString()} = ${sum}`;
      } else {
        text += `${x.toString()}+`;
      }
    }
    return console.log(text);
  }
}
naturalNumber(15);

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  let palavra = word
  let final = ending
  word = word.split("");
  ending = ending.split("");

  let sizeWord = word.length;
  let sizeEnd = ending.length;
  let sum = sizeWord - sizeEnd;
  let count = 0
  
  for (let i = sum; i <= sizeWord; i += 1) {
    if(word[i] == ending[count]){
      count += 1
      
    }
  }
  if(count - 1 == sizeEnd){
    console.log(`A string '${final}' é o final da string '${palavra}'`);
  }else{
    console.log(`A string '${final}' não é o final da string '${palavra}'`);
  }
}
verificaFimPalavra("joaofernando", "rnand");
