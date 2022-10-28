const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];
const printObj = ( array ) =>
  array.map( ( { name: nameP, bornIn: bornIn, nationality:nationality }, index, array ) =>
  { if(bornIn > 1991 && nationality == 'Australian') console.log(array[index]) })
printObj(people)