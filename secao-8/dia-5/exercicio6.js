const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const returnObj = ( array ) => {
  const [modelo, marca, ano] = array
  return {
    modelo: modelo,
    marca: marca,
    ano: ano
  }
}
console.log(returnObj(palio));
console.log(returnObj(shelbyCobra));
console.log(returnObj(chiron));