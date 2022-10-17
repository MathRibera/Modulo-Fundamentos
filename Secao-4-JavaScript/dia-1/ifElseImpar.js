// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.



const num1 = 32;
const num2 = 321;
const num3 = 212;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    console.log('Um ou mais número é impar');
}else{
    console.log('Nenhum dos números são impares');
}