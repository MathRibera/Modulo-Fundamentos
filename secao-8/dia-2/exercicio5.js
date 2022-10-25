const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((posicao) => posicao == name ? console.log('true') : console.log('false'))
};

console.log(hasName(names, 'Ana'));