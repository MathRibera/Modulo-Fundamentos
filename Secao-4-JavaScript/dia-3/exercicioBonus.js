// Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

const rimraf = require("rimraf");

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5
let symbol = '*'
for(let index = 0; index < n;index ++){
    let line = ''
    for (let indexDois = 0; indexDois < n; indexDois++) {
        line += symbol
    }
    console.log(line)
}

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

for(let index = 0; index < n;index ++){
    let line = ''
    for (let indexDois = 0; indexDois <= index; indexDois++) {
        line += symbol
    }
    console.log(line)
}
n = 5
let count = n
for(let index = 0; index < n;index ++){
    let line = ''
    for (let indexDois = 1; indexDois <= n; indexDois++) {
        if(indexDois >= count){
            line += symbol
        }else{
            line += ' '
        }
    }
    count -= 1
    console.log(line)
}

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// Depois, faça uma pirâmide com n asteriscos de base:


n = 5
let number = (n + 1) / 2
let left = (n + 1) / 2 
let right = (n + 1) / 2 
 
for(let row = 0; row < number; row += 1){
    let line = ''
    for (let column = 1; column <= n; column++) {
        if(column >= left && column <= right){
            line += symbol
        }else{
            line += ' '
        }
    }
    console.log(line)
    left -= 1
    right += 1
}
// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
n = 7
number = (n + 1) / 2
left = (n + 1) / 2 
right = (n + 1) / 2 

for(let row = 0; row < number; row += 1){
    let line = ''
    for (let column = 1; column <= n; column++) {
        if(left == column || right == column){
            line += symbol
        }else if(row == number - 1){
            line += symbol
        }else{
            line += ' '
        }
    }
    console.log(line)
    left -= 1
    right += 1
}

// Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
n = 22
let count2 = 0
for(let number = 0; number < 1; number += 1){
    for(let index = 1; index <= n; index += 1){
        if (n % index == 0) {
            count2 += 1
        }
    }
    if(count2 == 2){
        console.log(`${n} é um numero primo`);
    }else{
        console.log(`${n} não é primo`);
    }
}


