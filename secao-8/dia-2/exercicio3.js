const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length > 5;

const varr = names.find(findNameWithFiveLetters)
console.log(varr);