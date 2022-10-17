// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 1; index < numbers.length; index += 1){
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if(numbers[index] < numbers[secondIndex]){
            let element = numbers[index]
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = element;
        }
    }
}
console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Ordene o array numbers em ordem decrescente e imprima seus valores;
let tamArr = numbers.length
for(let index = tamArr - 1; index >= 0; index -= 1){
    for (let secondIndex = tamArr; secondIndex > index; secondIndex -= 1) {
        if(numbers[index] < numbers[secondIndex]){
            let position = numbers[secondIndex]
            numbers[secondIndex] = numbers[index];
            numbers[index] = position;
        }
    }
}
console.log(numbers);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = []
for(let index = 0; index < numbers.length; index += 1){
    if(index == numbers.length - 1){
        newArr.push(numbers[index] * 2)
    }else{
    newArr.push(numbers[index] * numbers[index + 1])
    }
}
console.log(newArr)