// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let result = 1;
for (let index = 10; index > 0; index--) {
    result *= index
}
console.log(result);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.



let word = 'tryber';
let index = word.length - 1
let word2 = ''
for(let i = index; i >= 0; i -= 1){
    word2  += word[i]
}
console.log(word2);


// Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maior = ''
let menor = ''
for (let index = 0; index < array.length; index++) {
    let element = array[index]
    if(element.length > maior.length){
        maior = element
    }else{
        menor = element
    }  
}
console.log(`${maior}\n${menor}`);
