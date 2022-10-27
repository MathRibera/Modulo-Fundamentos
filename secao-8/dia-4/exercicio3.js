const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(array) {
  return array.reduce( ( previous, current ) => previous += current).split('')
  . filter( ( letter ) => letter == 'a' || letter == 'A').length
}console.log(containsA(names));