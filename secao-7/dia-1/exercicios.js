// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.
// Copie o código abaixo:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    for (let i = 1; i < oddsAndEvens.length; i += 1) {
        for (let index = 0; index < i; index += 1) {
           let getFirst = oddsAndEvens[index]
           let getSecond = oddsAndEvens[i]
            getSecond < getFirst ? oddsAndEvens[index] = getSecond : false
            getSecond < getFirst ? oddsAndEvens[i] = getFirst : false
        }
    }
    let numbers = ''
    for(let index of oddsAndEvens){
        numbers += `${index}, `
    }
    return `Os números ${numbers}se encontram ordenados de forma crescente!`
}
console.log(sortOddsAndEvens());

let n = 5

const fatorial = () => {
    let result = n
    for(let i = n; i > 1 ; i -= 1){
        result *= (i - 1)
    }
    return result
}

console.log(fatorial());
