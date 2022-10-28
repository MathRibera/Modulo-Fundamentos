
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const newArr = ( {spring:spring, summer:summer, autumn:autumn, winter:winter} ) => `${winter},${spring},${summer},${autumn} `

console.log(newArr(yearSeasons));